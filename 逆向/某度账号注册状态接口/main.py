from fastapi import FastAPI, HTTPException, Request
from slowapi import Limiter
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded
from fastapi.responses import JSONResponse
from check_phone_status import checkPhoneStatus  # 假设你已实现此函数
import uvicorn

# 创建 Limiter 实例
limiter = Limiter(key_func=get_remote_address)
# 创建 FastAPI 实例
app = FastAPI()


# 捕获限流异常
@app.exception_handler(RateLimitExceeded)
def rate_limit_exceeded_handler(request: Request, exc: RateLimitExceeded):
    # 使用 JSONResponse 返回一个自定义的错误响应
    return JSONResponse(status_code=429, content={"detail": "Rate limit exceeded. Please try again later."})


# 提供一个简单的 GET 接口，并使用 limiter 作为装饰器
@app.get("/test/checkPhone/{phone}")
@limiter.limit("1/5second")  # 每 2 秒只能请求一次
def read_item(request: Request, phone: int, q: str = None):
    return checkPhoneStatus(phone)


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
