package com.tao.tomcat;

import javax.servlet.ServletOutputStream;
import javax.servlet.WriteListener;
import java.io.IOException;

public class ResponseOutputStream extends ServletOutputStream {

    // 建立一个1K的body暂存区
    private byte[] body = new byte[1024];
    //  指示存储了多少数据
    private int pos;

    @Override
    public void write(int b) throws IOException {
        body[pos] = (byte) b;
        pos ++;
    }

    @Override
    public boolean isReady() {
        return false;
    }

    @Override
    public void setWriteListener(WriteListener writeListener) {

    }


    public byte[] getBody() {
        return body;
    }

    public int getPos() {
        return pos;
    }
}
