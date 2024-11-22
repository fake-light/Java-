import axios from 'axios';


const t= 'fsdsogkndfokasodnaso'

function getSign(){
    const timeStamp = (new Date).getTime();
    const md5Text = `client=fanyideskweb&mysticTime=${timeStamp}&product=webfanyi&key=fsdsogkndfokasodnaso`
}

async function getData(){
    const response = await axios.post(
        'https://dict.youdao.com/webtranslate',
        new URLSearchParams({
            'i': '测试',
            'from': 'auto',
            'to': '',
            'useTerm': 'false',
            'dictResult': 'true',
            'keyid': 'webfanyi',
            'sign': '5216f15a17ba5725687d9ed07a8bfb5f',
            'client': 'fanyideskweb',
            'product': 'webfanyi',
            'appVersion': '1.0.0',
            'vendor': 'web',
            'pointParam': 'client,mysticTime,product',
            'mysticTime': '1732250789670',
            'keyfrom': 'fanyi.web',
            'mid': '1',
            'screen': '1',
            'model': '1',
            'network': 'wifi',
            'abtest': '0',
            'yduuid': 'abcdefg'
        }),
        {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Accept-Language': 'zh-CN,zh;q=0.9',
                'Cache-Control': 'no-cache',
                'Connection': 'keep-alive',
                'Cookie': 'OUTFOX_SEARCH_USER_ID=2048358291@223.66.48.228; OUTFOX_SEARCH_USER_ID_NCOO=1907173447.6392212; _uetsid=6482f360a88b11efbe66034d8064bf49; _uetvid=64830a10a88b11ef9ca3ff8b7f125d3a; DICT_DOCTRANS_SESSION_ID=YjEzOWI0MWQtMzc4ZC00MmE5LWJmNGEtZmQ1OWRiOTA5MjY3',
                'Origin': 'https://fanyi.youdao.com',
                'Pragma': 'no-cache',
                'Referer': 'https://fanyi.youdao.com/',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'same-site',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
                'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"'
            }
        }
    );
    console.log(response);
}
getData();