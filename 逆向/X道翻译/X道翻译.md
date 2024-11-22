# 某道翻译sign逆向及响应还原

### 1查找关键API

​	通过反复发送翻译请求，确定翻译的API，发现每次翻译有四个请求，除了第二个请求响应了一串加密的数据，其他的都和翻译内容无关，所以这边主要关注第二个API，即/webtranslate

![image-20241122124725085](E:\学习笔记\LearningDoc\逆向\X道翻译\X道翻译.assets\image-20241122124725085.png)

### 2确定加密参数

​	复制该条请求，关注参数，在body里面发现一个比较可以的参数sign，sign删掉返回500。除了加密的参数以外，我们还要找到如何还原加密的内容，通过内容大致应该是通过AES进行了加密，我们找的key和iv即可进行还原。

### 3加密参数逆向分析

​	看下sign咋来的，跟下请求的栈

![image-20241122130612834](E:\学习笔记\LearningDoc\逆向\X道翻译\X道翻译.assets\image-20241122130612834.png)

​	参数生成应该在xhr之前，一直往前跟，直到找到发起请求的入口位置，在request中找到了入口，这边传递的e就包含了参数，现在要跟e的生成位置。![image-20241122130939608](E:\学习笔记\LearningDoc\逆向\X道翻译\X道翻译.assets\image-20241122130939608.png)

​	一直跟着参数来到了生成的位置，调用函数k进行生成，这边很明显，sign调用了一个方法进行生成，我们将这个生成的方法扣下来即可，在这边打个断点，重新跟进S函数。

```js
function k(e, t) {
    const a = (new Date).getTime();
    return {
        sign: S(a, e),
        client: d,
        product: u,
        appVersion: m,
        vendor: h,
        pointParam: p,
        mysticTime: a,
        keyfrom: g,
        mid: b,
        screen: f,
        model: v,
        network: A,
        abtest: y,
        yduuid: t || "abcdefg"
    }
}
```

​	跟进S函数后发现这边拼接了一个字符串调用_ 函数进行加密。其中d是fanyideskweb可以固定，e是上一步a当前的时间戳，u是webfanyi可以固定，t的值是传入的一串没有意义的字符串，多次调用如果不变化的话就可以固定，多次请求发现确实是固定的，那唯一的变量就是时间戳了，这边有个坑，他有两个请求会生成sign，第一个请求和第二个请求t值是不一样的，但都是固定的。再接着跟函数_。

```js
function S(e, t) {
    return _(`client=${d}&mysticTime=${e}&product=${u}&key=${t}`)
}
```

​	最终发现只是对构造的字符串进行了一个md5加密，轻松搞定。

```js
function _(e) {
    return i.createHash("md5").update(e.toString()).digest("hex")
}
```

​		最终sign的生成如下代码。更换翻译内容进行测试，响应正常

```js
const secretKey = "fsdsogkndfokasodnaso";
const timeStamp = (new Date).getTime();
const param = `client=fanyideskweb&mysticTime=${timeStamp}&product=webfanyi&key=${secretKey}`
let sign = crypto.createHash("md5").update(param.toString()).digest("hex");
```

![image-20241122135143789](E:\学习笔记\LearningDoc\逆向\X道翻译\X道翻译.assets\image-20241122135143789.png)

### 4响应还原	

​	上面完成了对请求的加密，现在对加密的响应内容进行还原，一样的跟请求，但是要跟的是拿到响应之后的逻辑，跟到这边可以看到o就是响应的加密内容，这边就是请求成功后执行的逻辑。凭借经验，一眼就看到了引人注目的decodeKey和decodeIv。并且，key和iv还是不变的，其实写这篇文章离我第一次逆向这个接口已经过了挺久的了，这两个参数都没变化，真是太良心了，不像某度翻译，接口和加密算法都换了。![image-20241122135759369](E:\学习笔记\LearningDoc\逆向\X道翻译\X道翻译.assets\image-20241122135759369.png)

​	接下来其实都不用看了，使用AES进行解密就可以了，需要注意的是这边的key和iv需要md5加密之后再拿去解密![image-20241122141105036](E:\学习笔记\LearningDoc\逆向\X道翻译\X道翻译.assets\image-20241122141105036.png)

```js
let key = crypto.createHash("md5").update(decodeKey).digest();
let iv = crypto.createHash("md5").update(decodeIv).digest();

let decipheriv = crypto.createDecipheriv("aes-128-cbc", key, iv)

let decodeData =decipheriv.update( data,"base64", "utf-8");
let response = decodeData += decipheriv.final("utf-8")
response = JSON.parse(response)
```

​	请求测试，内容正常还原![image-20241122141652343](E:\学习笔记\LearningDoc\逆向\X道翻译\X道翻译.assets\image-20241122141652343.png)