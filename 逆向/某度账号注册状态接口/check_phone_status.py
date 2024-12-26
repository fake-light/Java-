import hashlib
import time
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad
import json
import base64
import random
import requests
import re

fuid = {
    "userAgent": "Mozilla%2F5.0%20(Windows%20NT%2010.0%3B%20Win64%3B%20x64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F131.0.0.0%20Safari%2F537.36",
    "canvas": "a341e3249822f12faca83b57ccd16f68",
    "language": "zh-CN",
    "colorDepth": "24",
    "deviceMemory": "8",
    "hardwareConcurrency": "32",
    "screenResolution": "1707%2C1067",
    "availableScreenResolution": "1019%2C1707",
    "timezoneOffset": "-480",
    "timezone": "",
    "sessionStorage": "true",
    "localStorage": "true",
    "indexedDb": "true",
    "addBehavior": "false",
    "openDatabase": "false",
    "cpuClass": "",
    "platform": "Win32",
    "plugins": "undefined",
    "webgl": "a2e003cf1e4b2e3c771b9c877ce5f73f",
    "webglVendorAndRenderer": "Google%20Inc.%20(NVIDIA)~ANGLE%20(NVIDIA%2C%20NVIDIA%20GeForce%20RTX%204060%20Laptop%20GPU%20(0x000028E0)%20Direct3D11%20vs_5_0%20ps_5_0%2C%20D3D11)",
    "adBlock": "false",
    "hasLiedLanguages": "false",
    "hasLiedResolution": "false",
    "hasLiedOs": "false",
    "hasLiedBrowser": "false",
    "touchSupport": "0%2Cfalse%2Cfalse",
    "fonts": "48",
    "audio": "undefined"
}


def getShaOne(timestamp_ms):
    shaOne = str(timestamp_ms)
    while shaOne[:2] != "00":
        md5Value = hashlib.md5(shaOne.encode('utf-8')).hexdigest()
        shaOne = hashlib.sha1(md5Value.encode('utf-8')).hexdigest()
    return shaOne


def getSig(param):
    # 通过屏幕宽高拼接的数字数组和一个打乱的1-9，a-z的字符串对象生成的一组字符串
    # 因为屏幕宽高固定，所以这边可以固定一组值17071067
    width_height = "tlsltskl"

    # 参数修改为key=value的字符串并用&拼接
    result = json2url(param)

    # MD5加密拼接的值
    param_md5 = hashlib.md5(result.encode('utf-8')).hexdigest()

    # 将生成的MD5值和上面的宽高生成的字符串穿插拼接
    width_height_array = list(width_height)
    param_md5_array = list(param_md5)
    param_md5_join_width_height = ""
    for index, item in enumerate(width_height_array):
        param_md5_join_width_height += param_md5_array[index] + item
    param_md5_join_width_height += param_md5[len(width_height_array):]

    # 使用AES对拼接的字符串进行加密
    aes_param_key = "moonshad0moonsh1"
    aes_encrypt_param = aes_encrypt(aes_param_key, param_md5_join_width_height)
    # 再使用base64进行编码
    base64_aes_encrypt_param = base64.b64encode(aes_encrypt_param.encode('utf-8')).decode('utf-8')
    return base64_aes_encrypt_param


def getRinfo():
    # aes加密指纹
    aes_fuid_key = "FfdsnvsootJmvNfl"
    aes_encrypt_fuid = aes_encrypt(aes_fuid_key, json.dumps(fuid, separators=(',', ':')))
    # 加密后指纹再MD5
    md5_aes_fuid = hashlib.md5(aes_encrypt_fuid.encode('utf-8')).hexdigest()
    rinfo = {
        'fuid': md5_aes_fuid
    }

    return json.dumps(rinfo, separators=(',', ':'))


def aes_encrypt(key, plaintext):
    key = key.encode('utf-8')

    # Ensure the plaintext is encoded in utf-8
    plaintext = plaintext.encode('utf-8')
    padded_plaintext = pad(plaintext, AES.block_size)

    # 设置加密模式
    cipher = AES.new(key, AES.MODE_ECB)
    encrypted = cipher.encrypt(padded_plaintext)
    return base64.b64encode(encrypted).decode('utf-8')


def getUrl(phone):
    param = {
        "token": "ec7625b3ea87ae8b4aa241cfbcf1ae9c",
        "tpl": "bp",
        "subpro": "",
        "apiver": "v3",
        "tt": int(time.time() * 1000),
        "gid": "BB9E9B2-C165-4FC1-A911-85AB83492EC6",
        "phone": phone,
        "countrycode": "",
        "mobileencryption": "",
        "alg": "v3",
    }

    time.sleep(random.uniform(0.002, 0.005))
    param['time'] = round(time.time())
    param['sig'] = getSig(param)
    timestamp_ms = int(time.time() * 1000)
    param['shaOne'] = getShaOne(timestamp_ms)
    time.sleep(random.uniform(0.002, 0.005))
    param['traceid'] = ""
    param['elapsed'] = int(time.time() * 1000) - timestamp_ms
    param['rinfo'] = getRinfo()
    param['callback'] = 'bd__cbs__' + base36(int(2147483648 * random.random()))[:6]
    uri = json2url(param)
    url = "https://passport.baidu.com/v2/?getphonestatus&" + uri
    print(url)
    return url


def base36(num):
    return hex(num)[2:]  # 使用 hex() 返回16进制字符串，省略 '0x'


def json2url(param):
    sorted_keys = sorted(param.keys())
    result = [f"{key}={param[key]}" for key in sorted_keys]
    result = '&'.join(result)
    return result


def checkPhoneStatus(phone):
    cookies = {
        'HOSUPPORT_BFESS': '1',
        'USERNAMETYPE_BFESS': '3',
        'SAVEUSERID_BFESS': '64df8ee908c8edc8dc2bf0e284d245',
        'HISTORY_BFESS': 'e79fe627c43d00f95d4614c050a491204e034e',
        'UBI_BFESS': 'fi_PncwhpxZ%7ETaO3prv75kHc-IbNIaEN01iD5yjQXYSrcJrtF6s8Hm0BirejlOSHI%7EmlnSiBzh76AgQeMfVypbWfqEPsxbMplO9LMVpcc6cLPFODRLSllFlv1EYWy8m1fYCIKvUeHvlIQb3TNrXMHy5-oMAFA__',
        'PTOKEN_BFESS': '4edbede02caa7207a042da7010e842ef',
        'STOKEN_BFESS': '41783d13e4e75aebc8532433ff293c6d10a7cd89a1d5c307ad3092c9f0e5738c',
        'BAIDUID_BFESS': '87448EB51B3BA0FF6A524495EBF991C5:FG=1',
        'ZFY': 'AAG1pR1Gpw2wJnEFv0Rw3rPCC00NLPE:B:ADTgjmJjFWA:C',
    }

    headers = {
        'Accept': '*/*',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Pragma': 'no-cache',
        'Referer': 'https://www.duxiaoman.com/',
        'Sec-Fetch-Dest': 'script',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'cross-site',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
    }

    response = requests.get(
        getUrl(phone),
        cookies=cookies,
        headers=headers,
    )
    response.encoding = 'utf-8'

    response.text.replace('不存在', '未注册')
    response.text.replace('已存在', '已注册')
    # 提取响应中的 JSON 数据
    callback_function_pattern = r'bd__cbs__\w+\((.*)\)'
    match = re.search(callback_function_pattern, response.text)
    if match:
        json_data_str = match.group(1)  # 提取 JSON 字符串
        json_data = json.loads(json_data_str)  # 转换为 Python 字典
        if json_data['errInfo']['no'] == '0':
            json_data['errInfo']['msg'] = "已注册"
        elif json_data['errInfo']['no'] == '3':
            json_data['errInfo']['msg'] = "未注册"
        print(json_data)
        return json_data
    else:
        print("未能解析回调函数中的 JSON 数据")
