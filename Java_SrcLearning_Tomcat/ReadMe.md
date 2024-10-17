# 手搓Tomcat

### 1、引入servlet依赖

```xml
<dependencies>

        <!--  servlet   -->
        <dependency>
            <groupId>javax.servlet</groupId>
            <artifactId>javax.servlet-api</artifactId>
            <version>3.1.0</version>
        </dependency>

</dependencies>
```

### 2、监听端口处理连接

​	1、建立一个ServerSocket连接监听8000端口用于处理连接，通过一个死循环重复的去处理连接，而不是在处理完连接之后直接退出，并且创建一个线程池用于并行处理多个连接，编写一个类SocketProcessor实现Runnable接口重写run方法用于处理连接（解析HTTP协议并封装request、resposne对象）。

```java
//  新建一个Socket监听8000端口用于处理连接
ServerSocket serverSocket = new ServerSocket(8000);
Socket socket = serverSocket.accept();
//  多线程并行处理连接
threadPool.execute(new SocketProcessor(socket));
```

### 3、处理HTTP请求

#### 3.1HTTP协议构成

​	首先了解HTTP协议组成,总共分成三个部分，请求行、请求头、请求数据。然后根据具体的格式获取请求协议，请求方法、URL、body等内容。

![image-20241014153231750](E:\学习笔记\JavaLearningDoc\Java_SrcLearning_Tomcat\ReadMe.assets\image-20241014153231750.png)

#### 3.2解析数据

​	根据上述格式，按照顺序，先提取请求方法，以空格结束，再提取URL...。

```java
String readLine = new String(bytes, 0, byteRead);
//  获取请求方法
String method = "";
pos = readLine.indexOf(SymbolConstants.SP);
if (pos!= -1) {
    method = readLine.substring(0, pos);
    System.out.println("Method: " + method);
}

//  获取URL
String uri = "";
if ((readLine.indexOf(SymbolConstants.SP, pos + 1))!= -1) {
    uri = readLine.substring(pos + 1, readLine.indexOf(SymbolConstants.SP, pos + 1));
    pos = readLine.indexOf(SymbolConstants.SP, pos + 1);
    System.out.println("URI: " + uri);
}
String protocol ="";
//  获取协议版本
if ((readLine.indexOf(SymbolConstants.CR, pos + 1))!= -1){
    protocol = readLine.substring(pos + 1, readLine.indexOf(SymbolConstants.CR, pos + 1));
    pos = readLine.indexOf(SymbolConstants.LF, pos + 1);

    System.out.println("protocol："+ protocol);
}
构造请求对象
if (method != "" && uri != "" && protocol != "") {
    request = new Request(method, uri, protocol);
    break;
}
```

#### 3.3封装request、resposne对象

​	封装request、response对象，调用servlet对请求进行逻辑处理，再调用servlet service方法时需要传入两个对象，查看接口说明可以看到这两个对象分别是HttpServletRequest和HttpServletResponse，所以再封装request和response对象时必须实现这两个接口，但是因为接口中的方法太多，我们不需要每个都是实现，所以先用一个抽象类去简单实现接口中的方法,然后再使用request类去继承抽象类并重写我们需要定制的方法即可。

```java
public class AbstractHttpServletRequest implements HttpServletRequest {
    //  实现接口方法
}
```

```java
public class Request extends AbstractHttpServletRequest{

    //  封装属性方法
}
```

#### 3.4编写servlet

然后将封装好的request和resposne通过servlet调用service传入。service会根据请求方法自动选择doXXX方法执行对应逻辑。

```java
//  解析结束，交给servlet处理
HelloServlet helloServlet = new HelloServlet();
//  根据请求方法自动选择处理逻辑
helloServlet.service(request, response);
```

这边我们在servlet中简单返回一个hello,word

```java
 @Override
 protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println(req.getMethod());
        resp.getOutputStream().write("hello tomcat".getBytes());
}
```

#### 3.5响应处理

​	运行时发现resp.getOutputStream()报空指针异常，因为我们在抽象类实现接口时直接返回了null，此处需要对这个逻辑进行处理

```java
@Override
public ServletOutputStream getOutputStream() throws IOException {
    return null;
}
```

> ​	思考：如果此处直接使用socket获取输出流将字符输出到管道，调用方能正常接受吗？
>
> ​	答： 不能，HTTP协议规范了传输的数据格式，不管是请求还是响应都需要按照规定的格式进行传输，否则浏览器无法正常解析响应的数据

​	HTTP响应由三个部分组成，分别是：状态行、消息报头和响应正文。根据这个格式我们在输出响应信息时，应该先将状态行和响应头输出，再按照一定格式输出正文。这部分逻辑就写在write方法中。

​	首先在Resposne对象中重写getOutputStream方法。

```java
 @Override
public ServletOutputStream getOutputStream() throws IOException {
    return super.getOutputStream();
}
```

发现返回的是一个ServletOutputStream抽象类，我们需要对这个抽象类进行实现并重现write方法。

```java
public class ResponseOutputStream extends ServletOutputStream {
    @Override
    public void write(int b) throws IOException {

    }
}
```

> ​	思考： 在调用write时立刻就会将状态行、响应头、正文等信息直接写到Socket管道中码？
>
> ​	答： 不是。实际使用中可能会多次调用wirte方法进行写入，但是写入的是同一个请求的响应，并且后续处理可能会报异常，如果直接写入管道中会导致后面的逻辑失效，应该在调用write方法时暂时将正文内容存起来，等doxxx方法完全执行完后再将完整的响应写入管道中。

​	所以当调用write方法时应该先暂时存储到一个数组中,此处有个坑，我们在servlet中调用write方法明明传的是一个byte数组，但是此处接收的是一个int类型的变量，这是因为在OutputStream中实现了write(byte b[])方法，最终还是会指向write(int b)。

```java
// 建立一个1K的body暂存区
private byte[] body = new byte[1024];
//  指示存储了多少数据
private int pos;

@Override
public void write(int b) throws IOException {
    body[pos] = (byte) b;
    pos ++;
}
```

​	当doxxx方法执行完毕后在处理连接的逻辑例应该再调用一个complete方法表示完成响应,正式将响应信息写到Socket管道中。在Resposne方法中编写该逻辑。并且按照HTTP规范格式将构造响应

```java
 public void complete(){
     sendStatusLine();
     sendResponseHeader();
     sendResposeBody();
 }
```

​	发送数据需要获取socket的outpustream，所以需要将request对象传入resposne内，也符合一个请求对应一个响应的原则，同时需要在request内部记录当前对应的socket连接。在Resposne构造方法中获取socket的outputstram对象并存储。

```java
public Response(Request request) {
    this.request = request;
    try {
        this.socketOutput = request.getSocket().getOutputStream();
    } catch (IOException e) {
        throw new RuntimeException(e);
    }
}
```

​	发送状态行:

```java
private void sendStatusLine() throws IOException {
    //  发送请求协议，与请求一致
    socketOutput.write(request.getProtocol().getBytes());
    socketOutput.write(SymbolConstants.SP);
    //  发送状态码
    socketOutput.write(status);
    socketOutput.write(SymbolConstants.SP);
    //  状态信息
    socketOutput.write(message.getBytes());
    socketOutput.write(SymbolConstants.CR);
    socketOutput.write(SymbolConstants.LF);
}
```

​	发送响应头：

```java
private void sendResponseHeader() throws IOException {
    for (Map.Entry<String, String> entry : headers.entrySet()) {
        String key = entry.getKey();
        String value = entry.getValue();
        socketOutput.write(key.getBytes());
        socketOutput.write(':');
        socketOutput.write(value.getBytes());
        socketOutput.write(SymbolConstants.CR);
        socketOutput.write(SymbolConstants.LF);

    }
    socketOutput.write(SymbolConstants.CR);
    socketOutput.write(SymbolConstants.LF);
}
```

​	发送响应体

```
private void sendResponseBody() throws IOException {
    byte[] body = getOutputStream().getBody();
    int pos = getOutputStream().getPos();
    socketOutput.write(body,0, pos);
}
```

​	页面访问正常响应

![image-20241017125232259](E:\学习笔记\JavaLearningDoc\Java_SrcLearning_Tomcat\ReadMe.assets\image-20241017125232259.png)

### 4、Tomcat部署应用

> ​	在上面的逻辑中我们手动创建了servlet实例，但是在实际的部署中，Tomcatl应该自动选择需要使用的servlet，并调用对应的方法

​	那么Tomcat是如何发现我们编写的servlet呢，首先是获取webapps文件夹下面所有的class文件（可能部署时是个jar包会给他解压），先使用类加载器将class加载为一个class对象，然后通过反射判断是否继承于HttpServlet，如果是，那么他就是要获取的servlet文件。

```java
for (File clazz : files){
    //  将文件名转换为全限定名
    ...
   	//  类加载器加载进来
    //Class<?> servletClass = Thread.currentThread().getContextClassLoader().loadClass(name);
}
```

这边有个问题，如果使用app加载器的话，因为类文件不在当前项目的classpath里面是加在不到的，所以需要重新写一个类用于加载部署的app类，当然此处也可以直接使用URLClassLoader。

> ​	加载时一定要注意classs里面的包名，文件结构不要搞错了，在这边卡半天加载不到类，结果发现编译的时候包名是com.tao.tomcat,结果建文件结构的时候漏了个tomcat。当然实际解压出来是不会错的。

```java
private void deployApp(File webapps, String app) {
    File appDir = new File(webapps, app);
    File classDir = new File(appDir, "classes/");

    //  此处应该递归遍历获取下面的所有文件，此处偷懒，直接获取指定的servlet
    String path = classDir.getPath();
    File servletClass = new File(path + "com/tao/tomcat/HelloServlet.class");

    String name = servletClass.getPath();
    name = name.replace(path, "");
    name = name.replace(".class", "");
    name = name.replace("\\", ".");

    try {
        System.out.println(name);
        URLClassLoader classLoader = new URLClassLoader(new URL[]{classDir.toURI().toURL()});
        Class<?> aClass = classLoader.loadClass(name);
        //  判断是否继承于HttpServlet
        if (HttpServlet.class.isAssignableFrom(aClass)){
            //  判断是否包含Webservlet注解
            if (aClass.isAnnotationPresent(WebServlet.class)){
                //  获取映射关系，然后存储起来，后面根据URL进行调用
                WebServlet annotation = aClass.getAnnotation(WebServlet.class);
                String[] urls = annotation.urlPatterns();
            }
        }
    } catch (MalformedURLException e) {
        e.printStackTrace();
    } catch (ClassNotFoundException e) {
        throw new RuntimeException(e);
    }
}
```

有了映射关系并且也有了servlet的classs对象，直接通过反射获取servlet实例，然后根据前面解析的URL来决定使用哪个servlet即可。

### 5、结语

​	Socket编程确实能帮助对网络的通信原理加深理解，之前一直不明白所谓的通信协议到底是以什么样的形式在网络中传输，通过这一个简单的demo编写，对HTTP协议的构成，以及数据的传输、web应用的交互理解都有较大的提升。

​	在实际编程中也遇到了一些问题，如在写响应头时漏了一个换行符合一个回车符，结果页面死活没有响应，最后发现漏了，也证明各种网络协议在传输过程中是非常严谨的。还有就是加载类时搞错了编译时的包结构一直没能成功加载到类
