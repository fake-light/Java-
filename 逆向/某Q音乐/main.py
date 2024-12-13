import execjs
import requests
import time

# 加载 JavaScript 文件内容
with open("qq_music_sign.js", "r", encoding="utf-8") as file:
    js_code = file.read()

# 编译 JavaScript 代码
ctx = execjs.compile(js_code)

songMID = "00184ejM4XouuN"
songID = "1021078"
albumMid = "003YQ8lP3NBXKl"
# 可固定
guid = "6775231000"

data = '{"comm":{"cv":4747474,"ct":24,"format":"json","inCharset":"utf-8","outCharset":"utf-8","notice":0,"platform":"yqq.json","needNewCode":1,"uin":2418225979,"g_tk_new_20200303":1491472491,"g_tk":1491472491},"req_1":{"module":"music.musichallSong.PlayLyricInfo","method":"GetPlayLyricInfo","param":{"songMID":"'+songMID+'","songID":'+songID+'}},"req_2":{"method":"GetCommentCount","module":"music.globalComment.GlobalCommentRead","param":{"request_list":[{"biz_type":1,"biz_id":"'+songID+'","biz_sub_type":0}]}},"req_3":{"module":"music.musichallAlbum.AlbumInfoServer","method":"GetAlbumDetail","param":{"albumMid":"'+albumMid+'"}},"req_4":{"module":"music.vkey.GetVkey","method":"GetUrl","param":{"guid":"'+guid+'","songmid":["'+songMID+'"],"songtype":[0],"uin":"2418225979","loginflag":1,"platform":"20"}}}'
result = ctx.call("getSign", data)
print(f'sign => {result}')


cookies = {
    '_qpsvr_localtk': '0.2660915853972601',
    'RK': 'AYtoQHjTtH',
    'ptcz': 'e68268c5ab725613414a3e2775f10da8022ac7e77b85cd50ceb99cff95f68233',
    'login_type': '1',
    'psrf_qqunionid': '96ADAE77FBB398BECE3F5263D6B2CC19',
    'wxunionid': '',
    'qqmusic_key': 'Q_H_L_63k3NVKacCjSM6jFcLOB3HY-VEg-D_Mhl1T-Y5Hxp1vKlyN1WECr31iNGtvNymo1pBHwV87MxVcjuCj2v_WsfRV8ZzIs',
    'psrf_qqrefresh_token': '0F2C71BC7F13DF5B87C1666007BB1D60',
    'music_ignore_pskey': '202306271436Hn@vBj',
    'euin': 'owv5Ne-A7KElNv**',
    'wxopenid': '',
    'tmeLoginType': '2',
    'psrf_qqaccess_token': '653B234AB3ACC92D382667C5FD25AE76',
    'psrf_access_token_expiresAt': '1734624243',
    'wxrefresh_token': '',
    'psrf_musickey_createtime': '1734019443',
    'psrf_qqopenid': '5FE5912B9912D7E0BE320DCBAF1E5180',
    'uin': '2418225979',
    'qm_keyst': 'Q_H_L_63k3NVKacCjSM6jFcLOB3HY-VEg-D_Mhl1T-Y5Hxp1vKlyN1WECr31iNGtvNymo1pBHwV87MxVcjuCj2v_WsfRV8ZzIs',
    'pgv_pvid': '8436768500',
    'fqm_pvqid': 'e5529737-ee5d-460a-b9a6-d1a80006e9ee',
    'fqm_sessionid': 'bc9cc64f-4de9-4454-a967-aa6843df747d',
    'pgv_info': 'ssid=s7046204200',
    'ts_uid': '1611553860',
}

headers = {
    'accept': 'application/json',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    'content-type': 'application/x-www-form-urlencoded',
    # 'cookie': '_qpsvr_localtk=0.2660915853972601; RK=AYtoQHjTtH; ptcz=e68268c5ab725613414a3e2775f10da8022ac7e77b85cd50ceb99cff95f68233; login_type=1; psrf_qqunionid=96ADAE77FBB398BECE3F5263D6B2CC19; wxunionid=; qqmusic_key=Q_H_L_63k3NVKacCjSM6jFcLOB3HY-VEg-D_Mhl1T-Y5Hxp1vKlyN1WECr31iNGtvNymo1pBHwV87MxVcjuCj2v_WsfRV8ZzIs; psrf_qqrefresh_token=0F2C71BC7F13DF5B87C1666007BB1D60; music_ignore_pskey=202306271436Hn@vBj; euin=owv5Ne-A7KElNv**; wxopenid=; tmeLoginType=2; psrf_qqaccess_token=653B234AB3ACC92D382667C5FD25AE76; psrf_access_token_expiresAt=1734624243; wxrefresh_token=; psrf_musickey_createtime=1734019443; psrf_qqopenid=5FE5912B9912D7E0BE320DCBAF1E5180; uin=2418225979; qm_keyst=Q_H_L_63k3NVKacCjSM6jFcLOB3HY-VEg-D_Mhl1T-Y5Hxp1vKlyN1WECr31iNGtvNymo1pBHwV87MxVcjuCj2v_WsfRV8ZzIs; pgv_pvid=8436768500; fqm_pvqid=e5529737-ee5d-460a-b9a6-d1a80006e9ee; fqm_sessionid=bc9cc64f-4de9-4454-a967-aa6843df747d; pgv_info=ssid=s7046204200; ts_uid=1611553860',
    'origin': 'https://y.qq.com',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://y.qq.com/',
    'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
}

params = {
    '_': int(time.time() * 1000),
    'sign': result,
}

response = requests.post('https://u6.y.qq.com/cgi-bin/musics.fcg', params=params, cookies=cookies, headers=headers,
                         data=data)
print(f"url => https://ws6.stream.qqmusic.qq.com/{response.json().get('req_4').get('data').get('midurlinfo')[0].get('purl')}")
