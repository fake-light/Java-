const crypto=require('crypto')
const axios = require('axios');
const { log } = require('console');

const decodeKey = "ydsecret://query/key/B*RGygVywfNBwpmBaZg*WT7SIOUP2T0C9WHMZN39j^DAdaZhAnxvGcCY6VYFwnHl";
const decodeIv = "ydsecret://query/iv/C@lZe2YzHtZ2CYgaXKSVfsb7Y4QWHjITPPZ0nQp87fBeJ!Iv6v^6fvi2WN@bYpJ4";

const secretKey = "fsdsogkndfokasodnaso";
const timeStamp = (new Date).getTime();
const param = `client=fanyideskweb&mysticTime=${timeStamp}&product=webfanyi&key=${secretKey}`
let sign = crypto.createHash("md5").update(param.toString()).digest("hex");

let translate = "test";

var body = {
    "i": translate,
    "from": "auto",
    "to": "",
    "dictResult": true,
    "keyid": "webfanyi",
    "sign": sign,
    "client": "fanyideskweb",
    "product": "webfanyi",
    "appVersion": "1.0.0",
    "vendor": "web",
    "pointParam": "client,mysticTime,product",
    "mysticTime": timeStamp,
    "keyfrom": "fanyi.web",
    "mid": 1,
    "screen": 1,
    "model": 1,
    "network": "wifi",
    "abtest": 0,
    "yduuid": "abcdefg"
}

function getData(){
    return axios.post("https://xxx/webtranslate", new URLSearchParams(body), {
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Accept-Language': 'zh-CN,zh;q=0.9',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Cookie': 'OUTFOX_SEARCH_USER_ID=1264505552@10.110.96.153; OUTFOX_SEARCH_USER_ID_NCOO=213805737.47116295',
            'Pragma': 'no-cache',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-site',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            "Content-Type": "application/x-www-form-urlencoded"
        }
    })
        .then((data)=>{
            return data.data;
        }).catch((e)=>{
        console.log("请求失败了，reason"+e.message)
    })
}

getData().then(data => {
    let key = crypto.createHash("md5").update(decodeKey).digest();
    let iv = crypto.createHash("md5").update(decodeIv).digest();

    let decipheriv = crypto.createDecipheriv("aes-128-cbc", key, iv)

    let decodeData =decipheriv.update( data,"base64", "utf-8");
    let response = decodeData += decipheriv.final("utf-8")
    response = JSON.parse(response)

    console.log(decodeData);

    console.log(response);

    console.log("responseCode: " + response.code);
    response.translateResult.map(item => {
        item.map(item =>{
            console.log("translateData: " + item.src);
            console.log("translateResult: " + item.tgt);
        })
    })

})
