# XX云音乐encSecKey和params逆向分析

### 1目标

​	能下载指定id的歌曲，找到歌曲源。

### 2请求分析

​	播放一首歌曲，查看请求情况，可以发现再多个请求后请求了一个m4a格式的音乐文件。这个文件就是我们需要的文件，光是分析请求路径好像得不出什么结论，所以要看下这个请求是咋来的，找到他的来源。![image-20241122162012098](E:\学习笔记\LearningDoc\逆向\XX云音乐\xx云音乐.assets\image-20241122162012098.png)

查看上面的请求，在一个API为/weapi/song/enhance/player/url/v1的响应内容中，我们发现了包含这个音乐链接的响应以及一些音乐相关的信息，那么我们的重点就是分析这个API了。![image-20241122162338622](E:\学习笔记\LearningDoc\逆向\XX云音乐\xx云音乐.assets\image-20241122162338622.png)

### 3加密分析

​	看参数有两个加密内容，主要关注这俩是咋加密的![image-20241122164050812](E:\学习笔记\LearningDoc\逆向\XX云音乐\xx云音乐.assets\image-20241122164050812.png)

### 4逆向分析

​	请求跟栈，找到参数的生成位置，直接从栈的名字没有获取到什么信息，改用全局搜索encSecKey，找到可疑代码，确定bVk9b为生成的加密内容，如果使用rpc插桩调用的方式，到这步就结束了，但是我们要扣算法，所以继续跟，后面几个bsc5h的函数因为参数是固定的，所以返回值应该也是固定的，多次请求如果不变则可以固定。

```js
var bVk9b = window.asrsea(JSON.stringify(i9b), bsc5h(["流泪", "强"]), bsc5h(RU4Y.md), bsc5h(["爱心", "女孩", "惊恐", "大笑"]));
e9f.data = j9a.cr9i({
    params: bVk9b.encText,
    encSecKey: bVk9b.encSecKey
})
```

​	这边bsc5h做的事情也很简单，代码里维护了一个变量名为RU4Y的对象，对象中包含两个属性，一个emj和一个md，md是一个数组，存储的就是一些表情的文字，emj是一个对象，存储的是表情文字对应的编码，所以这边做的就是将传入的表情文字数组转换成对应的编码并拼接在一起

```js
var bsc5h = function(cya1x) {
    var m4q = [];
    j4n.bh4l(cya1x, function(cxZ1x) {
        m4q.push(RU4Y.emj[cxZ1x])  // 从emj中获取表情文字对应的编码
    });
    return m4q.join("")
};
```

![image-20241123133215499](E:\学习笔记\LearningDoc\逆向\XX云音乐\xx云音乐.assets\image-20241123133215499.png)

​	再接着跟asrsea这个函数，代码如下，d函数被存储到全局变量中也就是window.asrsea,a函数是在指定的字符串中随机取16个字符组成字符串。后续会用这个字符串进行加密，根据上面的代码可知，h.encText就是后续的params参数，h.encSecKey就是encSecKey这个参数。

```js
function d(d, e, f, g) {
    var h = {}
    , i = a(16);
    return h.encText = b(d, g),
        h.encText = b(h.encText, i),
        h.encSecKey = c(i, e, f),
        h
}

function a(a) {
    var d, e, b = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", c = "";
    for (d = 0; a > d; d += 1)
        e = Math.random() * b.length,
            e = Math.floor(e),
            c += b.charAt(e);
    return c
}

function b(a, b) {
    var c = CryptoJS.enc.Utf8.parse(b)
    , d = CryptoJS.enc.Utf8.parse("0102030405060708")
    , e = CryptoJS.enc.Utf8.parse(a)
    , f = CryptoJS.AES.encrypt(e, c, {
        iv: d,
        mode: CryptoJS.mode.CBC
    });
    return f.toString()
}

function c(a, b, c) {
    var d, e;
    return setMaxDigits(131),
        d = new RSAKeyPair(b,"",c),
        e = encryptedString(d, a)
}
```

​	h.encText调用了两次b函数进行加密，传入的d是明文参数，g是上一步拼接的编码，传入b函数之后，g充当加密秘钥，iv是遗传固定的数字，然后将明文参数进行AES加密。返回的密文再次调用b函数进行二次加密，不过这次加密秘钥换成了上一步随机取的字符串i。两次加密后得到h.encText即params的值。

​	h.encSecKey调用c函数进行加密，传入的i是随机生成的字符串，e是前面转换的较短的编码，f是较长的一段编码，将所有的表情文字转换了。光看代码可以猜到是使用了RSA对前面的随机生成的字符串进行了加密，这比那为什么要加密这个字符串呢，这是因为后端再解析参数的时候需要使用这个随机字符串才能进行AES解密，这边使用公钥进行加密后，后端使用私钥即可进行解密即可得到随机的加密秘钥对参数进行解密。其实这边如果固定上面随机生成的字符串的话，就可以对encSecKey的值进行固定，因为他的作用就是加密随机的字符串。

​	固定之后我们只需要对明文参数中的ids进行修改，即可获取指定id的歌曲链接,从结构可以看出，我们可以一次传递多个id，后端会响应多条数据。

```json
{
    "ids": "[1369034842,1455273374]",
    "level": "standard",
    "encodeType": "aac",
    "csrf_token": "ab38aa247a6654f633ba80b8863890d7"
}
```

![image-20241123170047823](E:\学习笔记\LearningDoc\逆向\XX云音乐\xx云音乐.assets\image-20241123170047823.png)

### 5总结

​	首先从本地代码中维护了一个数组及其对应编码的变量，后续从该变量中取出指定表情文字的编码用于加密明文参数。明文参数的加密总共经过了两次AES加密，第一次使用外部取的固定编码进行加密，然后对密文进行二次加密，第二次加密使用随机的秘钥进行加密。因为第二次的秘钥是随机的，所以此时后端是没法感知这个秘钥的，那么同时就需要对这个秘钥进行传递，这是就有了第二个参数，第二个参数由前面生成的一长串模数以及公钥指数通过RSA加密随机秘钥生成，这边的模数以及公钥指数都是固定的。并且第二个参数只是为了记录第二次AES加密的随机秘钥值，当我们固定了该秘钥后，就可以固定这个RSA加密生成的参数。

​	其实这个系统很多API使用的都是这一套加密方案，评论、歌曲列表啥的都是一样的方式，所以能够过一个基本就能拿所有的信息。