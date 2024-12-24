import requests


class City:
    def __init__(self):
        headers = {
            'accept': 'application/json, text/plain, */*',
            'accept-language': 'zh-CN,zh;q=0.9',
            'cache-control': 'no-cache',
            'content-type': 'application/json',
            'origin': 'https://flights.ctrip.com',
            'pragma': 'no-cache',
            'priority': 'u=1, i',
            'referer': 'https://flights.ctrip.com/',
            'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
        }

        params = {
            'subEnv': 'fat110',
        }

        json_data = {
            'head': {
                'cver': '3',
                'cid': '',
                'extension': [
                    {
                        'name': 'source',
                        'value': 'ONLINE',
                    },
                    {
                        'name': 'sotpGroup',
                        'value': 'CTrip',
                    },
                    {
                        'name': 'sotpLocale',
                        'value': 'zh-CN',
                    },
                ],
            },
            'locale': 'zh-CN',
            'departureCity': 'HGH',
            'dataType': 1,
        }

        response = requests.post(
            'https://m.ctrip.com/restapi/soa2/17909/SearchBoxRecommend',
            params=params,
            headers=headers,
            json=json_data,
        )
        data = response.json()
        cityList = data["recommendGroupList"][0]["indexedCity"]["cityList"]
        self.cityList = cityList

    def getCity(self, cityName):

        result = [
            cityInfo for cityInfo in self.cityList
            if cityName in cityInfo["name"]
        ]
        if len(result) > 1:
            for index, item in enumerate(result, start=1):
                print(f"{index}: {item.name}")
            index = input("请选择一个城市（输入前方的序号）")
            return result[--index]
        elif len(result) == 1:
            return result[0]
        else:
            print("未查找到该城市")
            return None

    def contains_name(self, search_term):
        if "name" in self.cityList and search_term in self.cityList["name"]:
            return True
        if "items" in obj and isinstance(obj["items"], list):
            return any(contains_name(sub_obj, search_term) for sub_obj in obj["items"])
        return False
