## SpringSecurity + JWT + redis认证授权方案

### 0、简介

​	SpringSecurity是Spring家族的安全管理框架。相比Shiro，提供更丰富的功能，并且有活跃的社区支撑，Shiro

比较容易上手。主要负责web应用的认证和授权。

​	**认证**：确定当前用户是否属于系统的用户，并且确定具体哪个用户

​	**授权**：确定当前用户属于哪个角色，是否具有访问相关资源的权限

### 1、快速入门

#### 1.1、添加依赖

设置父工程，确定SpringBoot版本

```xml
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>2.1.4.RELEASE</version>
    <relativePath/>
</parent>
```

​	添加依赖

```xml
<dependencies>
    <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-security</artifactId>
        </dependency>
</dependencies>
```

​	引入依赖后再尝试访问之前暴露的接口会跳转到默认的登录页，默认用户名是user，密码会打印到后台控制台，登录成功后能正常访问之前的接口，访问默认的/logout接口退出登录.

### 2、认证

#### 2.1、登录认证流程

​	认证的核心就是前后端约定好的token，用户携带指定的token进行访问表示为合法访问，后端对token进行合法校验，如果通过则允许访问，反之认证失败。

​	**jwt**：JsonWebToken，用于根据用户信息生成一个用于身份校验的令牌（token）。

![image-20241008110248180](E:\学习笔记\面试\SpringSecurity.assets\image-20241008110248180.png)

#### 2.2、原理

##### 2.2.1、认证流程

​	内部包含一个过滤器链，有很多的过滤器组成。原始的主要过滤器如下图所示

![image-20241008110717439](E:\学习笔记\面试\SpringSecurity.assets\image-20241008110717439.png)

​	首先通过第一个过滤器认证用户名密码是否正确，第二个用于处理鉴权过程中抛出的异常，第三个主要用于进行授权，确定用户包含哪些权限，是否有权限访问相关资源。

##### 2.2.2、认证流程详解

![image-20241008112941242](E:\学习笔记\面试\SpringSecurity.assets\image-20241008112941242.png)

​	需要重新实现UserDetailsService中的loadUserByUsername方法，修改获取流程，原本是从内存中获取，修改为从数据库中获取用户信息，并重新进行封装。

​	替换第一个Fillter，写一个controller实现自己的登录流程，再调用ProviderManager中的方法重新走SpringSecurity的过滤链流程，最终完成下面的流程实现定制开发。

![image-20241008113834530](E:\学习笔记\面试\SpringSecurity.assets\image-20241008113834530.png)

​	最后认证通过生成jwt信息后可以将用户信息存入redis，在加一个fillter使用jwt解析用户发起请求中携带的jwt令牌获取到用户的userid，通过userid去redis查询用户的权限信息，将所有信息封装为Authentication对象再调用SecurityContextHolderContext.getcontext().setAuthentication()将对象存入，之后再走SpringSecurity的认证流程即可从里面取出信息进行认证了。

##### 2.2.3、数据库校验用户

​	通过实现UserDetailsService并重现loadUserByUsername方法对去用户的流程进行更改。

```java
@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    private UserAuthDao userAuthDao;
    @Autowired
    private UserInfoDao userInfoDao;
    @Autowired
    private RedisTemplate redisTemplate;

    @Override
    public UserDetails loadUserByUsername(String username) {
        if (StringUtils.isEmpty(username)) {
            throw new ServeException("用户名不能为空！");
        }
        //查询账号是否存在
        QueryWrapper<UserAuth> userAuthQueryWrapper = new QueryWrapper<>();
        userAuthQueryWrapper.select("id", "user_info_id", "password").eq("username", username);
        UserAuth user = userAuthDao.selectOne(userAuthQueryWrapper);
        if (user == null) {
            throw new ServeException("用户名不存在");
        }
        //查询账号对应的信息
        QueryWrapper<UserInfo> userInfoWrapper = new QueryWrapper<>();
        userInfoWrapper.select("id", "user_role", "nickname", "avatar", "intro", "web_site", "is_silence").eq("id", user.getUserInfoId());
        UserInfo userInfo = userInfoDao.selectOne(userInfoWrapper);
        //查询账号点赞信息
        Set articleLikeSet = (Set<Integer>) redisTemplate.boundHashOps("article_user_like").get(userInfo.getId().toString());
        Set commentLikeSet = (Set) redisTemplate.boundHashOps("comment_user_like").get(userInfo.getId().toString());
        //封装信息
        return User.withUsername(JSON.toJSONString(new UserInfoDTO(user.getId(), userInfo, articleLikeSet, commentLikeSet))).password(user.getPassword()).roles(userInfo.getUserRole()).build();
    }

}
```

##### 2.2.4、密码加密存储

​	在SpringSecurity配置类中注入bean,之后认证就会使用改bean进行加密验证，用户注册时也可以使用该实例对密码进行加密将密文存储到数据库

```java
@Bean
public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
}
```

#### 2.3、登录接口

​	自定义登录接口，封装然后调用AuthenticationManager的authenticate完成认证，然后将认证通过后的用户以ID为key，用户信息为值存入redis,并且使用jwt生成一个令牌返回前端存储，前端每次请求带上token作为身份令牌进行验证。

```java
//  封装对象
Authentication authentication = new UsernamePasswordAuthenticationToken(user.getUsername(), 				user.getPassword());
//  调用authenticate进行认证
Authentication authenticate = authenticationManager.authenticate(authentication);

UserInfoDTO userInfoDTO = JSON.parseObject(authenticate.getName(), UserInfoDTO.class);
// 认证通过，生成jwt令牌
Map<String, Object> token = new HashMap<>();
token.put("user_key", userInfoDTO.getId().toString());
String jwtToken = JwtUtils.createToken(token);
//  将用户信息存入redis，id作为key
redisCache.setCacheObject("login:"+userInfoDTO.getId().toString(), userInfoDTO);
redisCache.expire("login:"+userInfoDTO.getId().toString(), TokenConstants.EXPIRE_TIME);

Map<String, Object> data = new HashMap<>();
data.put("user", userInfoDTO);
data.put("token", jwtToken);

return new Result(true, Constants.SUCCESS, "登录成功",data);
```

#### 2.4 JWT过滤器

​	实现登录接口后，将jwt令牌返回给了前端，并将用户信息存储到了redis设置了过期时间，那么用户下一次请求是如何获取认证信息呢。

​	前面返回的token，用户在接下来的请求都要在请求中都要带上这个token作为身份令牌进行校验。所以这边需要写一个过滤器在请求进来时首先解析令牌进行身份校验。

​	校验主要分为几步，从实现声明的位置获取令牌 -->  使用JWT解析令牌 -->  使用解析出来的用户ID查redis获取权限信息  -->封装用户信息以及权限信息存到SecurityContextHolder中。

```java
//  从请求头获取token
String token = httpServletRequest.getHeader(TokenConstants.AUTHENTICATION);
if (StringUtils.isEmpty(token)){
    // 执行接下来的过滤器
    filterChain.doFilter(httpServletRequest, httpServletResponse);
    return;
}

//  解析token获取userId
String userKey = JwtUtils.getUserKey(token);
//  查询redis获取用户信息
String redisKey = "login:"+userKey;
UserInfoDTO userInfoDTO = redisCache.getCacheObject(redisKey);

if (Objects.isNull(userInfoDTO)){
    filterChain.doFilter(httpServletRequest, httpServletResponse);
    return;
}
//  刷新过期时间
redisCache.expire("login:"+userInfoDTO.getId().toString(), TokenConstants.EXPIRE_TIME);

//  封装认证信息,存入上下文中，后续认证可以直接通过
UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(userInfoDTO, null, userInfoDTO.getAuthorities());
usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(httpServletRequest));
SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);

filterChain.doFilter(httpServletRequest, httpServletResponse);
```

> ​	在封装权限信息时有个坑，如果配置类中使用hasAnyRole或hasRole（最终会调用hasAnyRole）时，hasAnyRole方法调用 this.hasAnyAuthorityName(this.defaultRolePrefix, roles)会传递一个默认的前缀Role_，在鉴权时会加上这个前缀与封装的权限进行匹配,封装的时候如果没有对自己的权限加上这个前缀，鉴权会不通过。通过hasAuthority或者hasAnyAuthority进行鉴权则没这个问题

​		然后将定义好的过滤器加到UsernamePasswordAuthenticationFilter之前，完整的配置如下。因为本项目涉及接口不是很多，权限不复杂，所以直接在配置中定义需要权限的接口。

```java
@Override
protected void configure(HttpSecurity http) throws Exception {
    http
        // 添加Logout filter
        .logout().logoutUrl("/logout").logoutSuccessHandler(logoutSuccessHandler)
        .and()
        //关闭跨站请求防护
        .csrf().disable()
        // 基于token，所以不需要session
        .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        .and()
        .authorizeRequests()
        //开放测试账号权限
        .antMatchers(HttpMethod.GET,"/admin/**").hasAnyAuthority("test","admin")
        //管理员页面需要权限
        .antMatchers("/admin/**").hasAuthority("admin")
        //用户操作，发表评论需要登录
        .antMatchers("/users/info","/users/avatar","/comments").authenticated()
        .anyRequest().permitAll()
        .and()
        .exceptionHandling()
        //未登录处理
        .authenticationEntryPoint(authenticationEntryPoint)
        //权限不足处理
        .accessDeniedHandler(accessDeniedHandler)
        .and()
        //开启嵌入
        .headers().frameOptions().disable()
        .and()
        .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
}
```

​	如果权限较为复杂，推荐使用注解的形式进行开发，在配置类上加注解@EnableGlobalMethodSecurity(prePostEnabled=true)开启注解配置，然后在需要鉴权的controller上面加@PreAuthorize("hasAuthority('admin')")。

> ​	该注解需要传入一个鉴权的方法，以及需要的权限，鉴权的方法可以试用默认的四个，也可以直接开发一个鉴权方法，比如RUOYI框架开发了一个service，并将其加入了spring容器，就可以使用@PreAuthorize("@ss.hasPermi('system:menu:list')")这种形式来调用其中的方法进行鉴权
>
> ```java
> @Service("ss")
> public class PermissionService
> ```

#### 2.5认证失败处理

​	在上面的配置类中，我们配置了一下配置，并传入了我们自定义的处理类。自定义的处理类只需要实现对应的handler即可，如实现AccessDeniedHandler即可在权限不足时使用我们的逻辑完成返回。又比如在logoutSuccessHandler中可以在登出成功后执行删除redis中的key等操作。

 ```java
 //未登录处理
 .authenticationEntryPoint(authenticationEntryPoint)
 //权限不足处理
 .accessDeniedHandler(accessDeniedHandler)
 ```

#### 2.6RABC权限模型

​	RABC(Role-Based Access Control)，基于角色的权限控制，使用一个角色包含多个权限，用户只需要维护一个角色信息即可整合多个权限，如果从拆分解耦的角度来设计表，可能涉及五张表，角色表 <-角色用户关联表->用户表， 角色表  <-角色权限关联表-> 权限表,如果想要减少联表查询带来的损耗则可以使用，用户表中维护一个角色ID列，角色表中维护一个权限ID列则只需要使用三张表。

​	一个用户可能有多个角色，一个角色也可能对应多个用户，多对多的关系。一个权限会包含多条权限，同时一条权限也可能包含在多个角色中也是多对多的关系。

### 3、总结

​	SpringSecurity + JWT + Redis的认证授权解决方案的开发主要包含以下流程。

- 配置类开发：安全防护配置、认证权限配置、过滤器配置、是否基于Session配置、各种认证处理配置。
- 登录接口开发：封装Authentication对象，使用AuthenticationManager调用authenticate完成SpringSecurity的认证流程，认证通过生成jwt令牌返回前端，使用userId作为key将用户信息（权限信息）存储到redis，设置过期时间。
- UserDetailsServiceImpl开发：实现UserDetailsService接口，重写loadUserByUsername逻辑，上面在调用authenticate方法经过一些列过滤链后会调用loadUserByUsername该方法，在该方法中查询数据库，用户不存在抛异常，然后将查到的用户信息和密码封装返回，SpringSecurity会使用提供的bean对密码进行加密判断，完整后续认证流程。
- JWT过滤器：进行session验证后SpringSecurity会停止从session中获取用户认证信息，我们需要自定义一个过滤器对当前请求进行身份认证，前面登录成功会返回一个jwt生成的身份令牌进行返回，后续请求会携带这个身份令牌，在过滤器中解析携带的令牌获取用户ID，并通过该ID去redis查询用户信息，存在则封装用户信息即权限信息调用SecurityContextHolder.getContext().setAuthentication();完整身份信息验证，后续SpringSecurity的认证从里面拿信息进行授权。
- 权限配置：使用RABC权限模型对系统权限进行设计，然后决定使用注解或者配置对请求进行权限配置。
- 登出处理：完成SpringSecurity默认的登出流程后再处理器中对redis中的用户信息进行删除，前端将token删除。