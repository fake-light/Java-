package com.tao.tomcat;

import com.tao.contants.SymbolConstants;

import javax.servlet.ServletOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.HashMap;
import java.util.Map;

public class Response extends AbstractHttpServletResponse{

    private Request request;

    private ResponseOutputStream outputStream = new ResponseOutputStream();

    private OutputStream socketOutput;

    private int status = 200;

    private String message = "OK";

    private Map<String,String> headers = new HashMap<>();

    @Override
    public void setStatus(int i, String s) {
        this.status = i;
        this.message = s;
    }

    public Response(Request request) {
        this.request = request;
        try {
            this.socketOutput = request.getSocket().getOutputStream();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public int getStatus() {
        return this.status;
    }

    @Override
    public void addHeader(String s, String s1) {
        this.headers.put(s, s1);
    }

    @Override
    public ResponseOutputStream getOutputStream() throws IOException {
        return outputStream;
    }


    public void complete(){
        try {
            sendStatusLine();
            sendResponseHeader();
            sendResponseBody();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void sendResponseBody() throws IOException {
        byte[] body = getOutputStream().getBody();
        int pos = getOutputStream().getPos();
        socketOutput.write(body,0, pos);
    }

    private void sendResponseHeader() throws IOException {
        if (!headers.containsKey("Content-Length")){
            addHeader("Content-Length", String.valueOf(getOutputStream().getPos()));
        }
        if (!headers.containsKey("Content-Type")){
            addHeader("Content-Type","text/plain;charset=utf-8");
        }
        for (Map.Entry<String, String> entry : headers.entrySet()) {
            String key = entry.getKey();
            String value = entry.getValue();
            socketOutput.write(key.getBytes());
            socketOutput.write(':');
            socketOutput.write(value.getBytes());
            socketOutput.write(SymbolConstants.CR);
            socketOutput.write(SymbolConstants.LF);
        }
        socketOutput.write(SymbolConstants.CR);
        socketOutput.write(SymbolConstants.LF);
    }

    private void sendStatusLine() throws IOException {
        //  发送请求协议，与请求一致
        socketOutput.write(request.getProtocol().getBytes());
        socketOutput.write(SymbolConstants.SP);
        //  发送状态码
        socketOutput.write(status);
        socketOutput.write(SymbolConstants.SP);
        //  状态信息
        socketOutput.write(message.getBytes());
        socketOutput.write(SymbolConstants.CR);
        socketOutput.write(SymbolConstants.LF);

    }
}
