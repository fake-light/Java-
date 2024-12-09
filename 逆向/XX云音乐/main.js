const axios = require('axios');
const { log } = require('console');
const forge = require('node-forge');
const CryptoJS = require('crypto-js');

const RU4Y = {
    "emj": {
        "色": "00e0b",
        "流感": "509f6",
        "这边": "259df",
        "弱": "8642d",
        "嘴唇": "bc356",
        "亲": "62901",
        "开心": "477df",
        "呲牙": "22677",
        "憨笑": "ec152",
        "猫": "b5ff6",
        "皱眉": "8ace6",
        "幽灵": "15bb7",
        "蛋糕": "b7251",
        "发怒": "52b3a",
        "大哭": "b17a8",
        "兔子": "76aea",
        "星星": "8a5aa",
        "钟情": "76d2e",
        "牵手": "41762",
        "公鸡": "9ec4e",
        "爱意": "e341f",
        "禁止": "56135",
        "狗": "fccf6",
        "亲亲": "95280",
        "叉": "104e0",
        "礼物": "312ec",
        "晕": "bda92",
        "呆": "557c9",
        "生病": "38701",
        "钻石": "14af6",
        "拜": "c9d05",
        "怒": "c4f7f",
        "示爱": "0c368",
        "汗": "5b7a4",
        "小鸡": "6bee2",
        "痛苦": "55932",
        "撇嘴": "575cc",
        "惶恐": "e10b4",
        "口罩": "24d81",
        "吐舌": "3cfe4",
        "心碎": "875d3",
        "生气": "e8204",
        "可爱": "7b97d",
        "鬼脸": "def52",
        "跳舞": "741d5",
        "男孩": "46b8e",
        "奸笑": "289dc",
        "猪": "6935b",
        "圈": "3ece0",
        "便便": "462db",
        "外星": "0a22b",
        "圣诞": "8e7",
        "流泪": "01000",
        "强": "1",
        "爱心": "0CoJU",
        "女孩": "m6Qyw",
        "惊恐": "8W8ju",
        "大笑": "d"
    },
    "md": [
        "色",
        "流感",
        "这边",
        "弱",
        "嘴唇",
        "亲",
        "开心",
        "呲牙",
        "憨笑",
        "猫",
        "皱眉",
        "幽灵",
        "蛋糕",
        "发怒",
        "大哭",
        "兔子",
        "星星",
        "钟情",
        "牵手",
        "公鸡",
        "爱意",
        "禁止",
        "狗",
        "亲亲",
        "叉",
        "礼物",
        "晕",
        "呆",
        "生病",
        "钻石",
        "拜",
        "怒",
        "示爱",
        "汗",
        "小鸡",
        "痛苦",
        "撇嘴",
        "惶恐",
        "口罩",
        "吐舌",
        "心碎",
        "生气",
        "可爱",
        "鬼脸",
        "跳舞",
        "男孩",
        "奸笑",
        "猪",
        "圈",
        "便便",
        "外星",
        "圣诞"
    ]
}

const params = {
    "ids": "[1848253951]",
    "level": "standard",
    "encodeType": "aac",
    "csrf_token": "ab38aa247a6654f633ba80b8863890d7"
}

function bsc5h(cya1x) {
    var m4q = [];
    for (const value of cya1x) {
        m4q.push(RU4Y.emj[value])
    }
    return m4q.join("")
};

function asrsea(d, e, f, g){

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

    var encText = ""
    , i = 'lcUt3KIEAKCBxIGu';
    
    return encText = b(d, g),
    encText = b(encText, i),
    encText
}

async function getMusicInfo(param){
    const response = await axios.post(
        'https://music.163.com/weapi/song/enhance/player/url/v1',
        new URLSearchParams({
          'params': param,
          'encSecKey': '68ac21e74e76e08f53eef243e98fd5e771e9e44d600473fbacbb74630d80f5045c5fcd4b5bd875eaf7b028678f97595f7034952ab16a50e2d6b7806a6e6f2de85c90f11258a368834b2125ef833e3ac7d4a85b93fb954f0a7ac61ec750c55f7e860df867157941b6abce059c7d2641838aae56d9f88c010cfb2b2ff0600aea47'
        }),
        {
          params: {
            'csrf_token': 'a2682e0a12716e2c047951a8a69fcd08'
          },
          headers: {
            'accept': '*/*',
            'accept-language': 'zh-CN,zh;q=0.9',
            'cache-control': 'no-cache',
            'cookie': 'vinfo_n_f_l_n3=bc2686e4c2c7660d.1.0.1703129436117.0.1703129438026; nts_mail_user=lgxpsy@163.com:-1:1; NTES_CMT_USER_INFO=92484674%7C%E6%9C%89%E6%80%81%E5%BA%A6%E7%BD%91%E5%8F%8B05wPh2%7Chttp%3A%2F%2Fcms-bucket.nosdn.127.net%2F2018%2F08%2F13%2F078ea9f65d954410b62a52ac773875a1.jpeg%7Cfalse%7CbGd4cHN5QDE2My5jb20%3D; __root_domain_v=.163.com; _qddaz=QD.400097448017019; _ntes_nnid=520198caa5b0174ba7c39fe1e556f954,1713505112736; _ntes_nuid=520198caa5b0174ba7c39fe1e556f954; NTES_P_UTID=QzXxjR8IEHyLkvH57DOaYTKCH1Qxqgmx|1729767682; NTES_PASSPORT=_rmfwBEctkkdmGWVUatH0KWtZwhbcbtkG9sWoUT8ZcSNO1zGOBYERDWSo.6HzHgkLieBVVEPsZ1IQ54cQ9Jbgxmk_m6XgieyV6LTVj.rj_.n6bCMkZ5Gl5uXu2gUlL5QTcu3Bwss4TNtGQHkXNQZBtZZDYt9efuV3ArreWzRSRCHvA3dEwVfw_q7E; P_INFO=lgxpsy@163.com|1729767682|1|mail163|00&99|CN&1727424880&mail163#jis&320400#10#0#0|138962&0||lgxpsy@163.com; timing_user_id=time_S6wpL00McD; NMTID=00OQlmuEeJvlcCw00yyoHKTgAM3hWUAAAGTUuJiJQ; JSESSIONID-WYYY=eCSVMr7SQjbiujjcgiVCh9PmW%2FKEAn6fv%2BVN8zndPoiSC7fpSIqw%2BOKcp91oXlg0a%2Bi8wEZSUHXbCmhXjUSYHTv2UAZVEx3aP6OlckAHv%2BS1Tsx56Z%2Fyg6iOImDrvn%5C8oPZxiyuxcxz8Irir19%5CkPxaXJEj1gBFfje6R%2F3AI%5Ci40S5qJ%3A1732264188292; _iuqxldmzr_=32; WEVNSM=1.0.0; WNMCID=kuwojd.1732262388604.01.0; WM_TID=SSX2pfs65NJEFBVVQUaFhiAwyYpx2kMv; WM_NI=nfWHIRZi37%2BkZ%2B32TAbj%2BGCDuygnosElWOA60E8jcs60Ue3mQPXAAgnw61TLexlFxkU7Chl6MIYSNOGfiG6Vq16wJGWFRX8X0uaQkMCRt0ZABMXXSnh5LY8JqfeKIwuSQXQ%3D; WM_NIKE=9ca17ae2e6ffcda170e2e6eebaf854a5be9baece66a2b88ab2c55f928a8fadc754ab9296d0c87df7a7ad9acf2af0fea7c3b92aaeba99a9cc5a9ab7fdd8aa619af5fdd3d74ba2b6e5a8c250b7a7a98fee7987b499b0c43ef49bf88be279f6f09b86b267939098a2c46daea9fad2d748a7a8a4a7fb6197e98d89ef3e8f9797b4cd4585baa7a8b55eb3effa98c94d959a9eb9bb54f4abafb2ea47818ebcd1d94b829398b9d266aceb84babb42b3baabaccc7db78d9fb9d437e2a3; ntes_utid=tid._.3TKxIiRYhkFEEhRRBVeQx2Vx2cszC33o._.0; sDeviceId=YD-0B%2B6biB8OaVAQhVAUQaAxozJLAPIFCNC; __snaker__id=YSlYGpuMPncn31QM; gdxidpyhxdE=EUY9pWRz9dk3vVzje8yVi6Rv2A1QuIJhX%2BTqkHH0BraKKxH%5Ctk5BpV3E%2B2%5CMO6%5CwBW47%2BaImk%2BM%2BOxDM3OZcbTBKHqCtBjR41RIEVL0EL5qg7H%2Byyyu5CU%5C6%2BH4uGLgnHtfqb1aE85b8v%2Bq956oozkuRArxp6E%2BnXwb2ylMnvbeNwk6%5C%3A1732263312818; __csrf=a2682e0a12716e2c047951a8a69fcd08; MUSIC_U=002A37E8F7D7297CAFCBB77C05F8DB9D8A93AE0645868D61AB750A0B02DAF80FAD6F9EBD428B2E4E0538684F1BF7B201598A5634586E2B61DAC246DBBA7B2452F5085C32132C645659F48A36CA06FAA724AF4EBBDBB001EE4324DE976AAF2FF246947C6D98EFBB76C58795762BC13544DC5B04C7D963CFEADFD4903F7655D8A8F451527F98F74F04344444A576BF68EEB68705CFE59BE279A2E9C5001B42C17BFEC6EEA1D8BFE8508CBCCFD6C94F3B1EC644C258B5056F04268CE3FA54239500FAD70F0B043F912B89A3E048E64C1A5A4D3EDA07BF7C4E9FCF10345BDC03317DB92052A35BB797C19AE99F238802DC0F0BC851DE7498B8E551B29B8959BC24BC1194252919FFF2B25D2C2CF3C042710B444246B604AE8ADEFD4261E16F51B4D08F46F37AC57DFCEA0CA83A8A4C07A834711D3B3B0AE7ABC7A1ECD2F69237132D9A11E2E08F426E31B6BC34124FFB8B6932007C7288549E7F9940471E9823842481; ntes_kaola_ad=1; playerid=78621420',
            'origin': 'https://music.163.com',
            'pragma': 'no-cache',
            'priority': 'u=1, i',
            'referer': 'https://music.163.com/',
            'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'
          }
        }
      );
      for(let info of response.data.data){
        console.log("url:"+ info.url);
      }
}


encode = asrsea(JSON.stringify(params), bsc5h(["流泪", "强"]), bsc5h(RU4Y.md), bsc5h(["爱心", "女孩", "惊恐","大笑"]))
console.log("encText: "+encode);
getMusicInfo(encode);