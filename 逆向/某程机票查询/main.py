import requests
import execjs
import re
import json
import hashlib

from city import City
from flight import Flight

# 加载 JavaScript 文件内容
with open("./sdt.js", "r", encoding="utf-8") as file:
    js_code = file.read()

# 编译 JavaScript 代码
ctx = execjs.compile(js_code)


def getTransactionId(departureCityCode, arrivalCityCode, depdate):
    headers = {
        'accept': '*/*',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cache-control': 'no-cache',
        'pragma': 'no-cache',
        'priority': 'u=0, i',
        'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'none',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    }

    params = {
        'depdate': depdate,
        'cabin': 'y_s_c_f',
    }

    response = requests.get(
        f'https://flights.ctrip.com/international/search/api/flightlist/oneway-{departureCityCode}-{arrivalCityCode}',
        params=params, headers=headers)
    responseJson = response.json()
    return responseJson["data"]
    # # 正则匹配返回的json串 获取transactionId
    # pattern = r'<script id="__NEXT_DATA__" type="application/json">(.*?)</script>'
    # html_content = response.text
    # match = re.search(pattern, html_content, re.DOTALL)
    # if match:
    #     json_string = match.group(1).strip()
    #     data = json.loads(json_string)
    #     json_data = data["props"]["pageProps"]["renderData"]["GlobalSearchCriteria"]
    #     return json_data
    # else:
    #     print("未找到匹配的内容")


def getFly(sign, token, transactionId, json_data):
    cookies = {
        'UBT_VID': '1734682944700.eb3fIUrCxARg',
        'GUID': '09031048112717160856',
        '_RF1': '112.24.220.26',
        '_RSG': 'pJKdYae02O6XvMSCpTQEQA',
        '_RDG': '280942b75cd6582ed636f2896bd596a046',
        '_RGUID': '66020289-229d-44f3-a68e-69dccc716e61',
        'FlightIntl': 'Search=[%22HGH|%E6%9D%AD%E5%B7%9E(HGH)|17|HGH|480%22%2C%22CAN|%E5%B9%BF%E5%B7%9E(CAN)|32|CAN|480%22%2C%222024-12-26%22]',
        '_bfa': '1.1734682944700.eb3fIUrCxARg.1.1735014732534.1735014757785.11.6.10320673302',
    }
    headers = {
        'accept': 'application/json',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cache-control': 'no-cache',
        'content-type': 'application/json;charset=UTF-8',
        'origin': 'https://flights.ctrip.com',
        'pragma': 'no-cache',
        'priority': 'u=1, i',
        'referer': 'https://flights.ctrip.com/online/list/oneway-czx-tyo?depdate=2024-12-21&cabin=y_s&adult=1&child=0&infant=0',
        'scope': 'd',
        'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
        'sessionid': '1',
        'sign': sign,
        'token': token,
        'transactionid': transactionId,
    }

    params = {
        'v': '0.33005148008770546',
    }

    response = requests.post(
        'https://flights.ctrip.com/international/search/api/search/batchSearch',
        params=params,
        cookies=cookies,
        headers=headers,
        json=json_data,
    )
    responseJson = response.json()
    try:
        flyList = responseJson.get("data").get("flightItineraryList")
        flights = []
        for fly in flyList:
            flyInfo = Flight()
            for item in fly.get("flightSegments"):
                for flight in item.get("flightList"):
                    flyInfo.airlineName = flight["marketAirlineName"]
                    flyInfo.departureCityName = flight["departureCityName"]
                    flyInfo.arrivalCityName = flight["arrivalCityName"]
                    flyInfo.departureDateTime = flight["departureDateTime"]
                    flyInfo.arrivalDateTime = flight["arrivalDateTime"]
                    flyInfo.duration = flight["duration"]
                    flyInfo.aircraftName = flight["aircraftName"]
            flyInfo.adultPrice = fly["priceList"][0]['adultPrice']
            flights.append(flyInfo)
        return flights
    except Exception as e:
        print(responseJson)
        print("出现异常")


def getSign(signSrc):
    # 创建 MD5 对象
    md5 = hashlib.md5()
    return hashlib.md5(signSrc.encode('utf-8')).hexdigest()


def getFlightInfo(departureCity, arrivalCity, departureDate):
    json_data = getTransactionId(departureCity['code'], arrivalCity['code'], departureDate)

    print(f"debug  ===>  search str: {json.dumps(json_data)}")
    # 调用 JS 文件中的函数
    token = ctx.call("getToken", json.dumps(json_data))
    print(f"debug  ===>  token is {token}")

    # 拼接sign字符串
    transactionId = json_data["transactionID"]
    departureCityCode = json_data["flightSegments"][0]["departureCityCode"]
    arrivalCityCode = json_data["flightSegments"][0]["arrivalCityCode"]
    departureDate = json_data["flightSegments"][0]["departureDate"]
    signSrc = transactionId + departureCityCode + arrivalCityCode + departureDate
    print(f"debug  ===>  src sign: {signSrc}")
    sign = getSign(signSrc)
    print(f"debug  ===>  md5 sign: {sign}")

    flights = getFly(sign, token, transactionId, json_data)
    Flight.sort_flights_by_price(flights)


city = City()

while(True):
    departureCity = city.getCity(input("请输入出发城市名称或机场名称: "))
    print(f"出发城市: {departureCity['name']}({departureCity['code']})")
    arrivalCity = city.getCity(input("请输入到达城市名称或机场名称: "))
    print(f"到达城市: {arrivalCity['name']}({arrivalCity['code']})")
    departureDate = input("请输入出发日期 eg：2024-12-26 : ")
    getFlightInfo(departureCity, arrivalCity, departureDate)
