package com.tao.tomcat;

import com.tao.contants.SymbolConstants;

import javax.servlet.ServletException;
import java.io.IOException;
import java.io.InputStream;
import java.net.Socket;

public class SocketProcessor implements Runnable{

    private Socket socket;

    public SocketProcessor(Socket socket) {
        this.socket = socket;
    }

    @Override
    public void run() {
        process();
    }

    /*
    * 处理Socket连接
    * */
    private void process() {
        try {
            InputStream inputStream = socket.getInputStream();

            //  定义一个1kb的字节数组作为读取缓冲区
            byte[] bytes = new byte[1024];
            //  记录读取位置,以及读取次数
            int byteRead;
            int readTime = 0;
            //  解析HTTP请求
            Request request = null;
            while ((byteRead = inputStream.read(bytes)) != -1) {

                //  记录遍历位置
                int pos;
                //  获取请求方法，仅在首次读取时获取，1024字节足以存储请求行以及头信息，一般超出部分为body
                if (readTime == 0 ){
                    String readLine = new String(bytes, 0, byteRead);
                    //  获取请求方法
                    String method = "";
                    pos = readLine.indexOf(SymbolConstants.SP);
                    if (pos!= -1) {
                        method = readLine.substring(0, pos);
                        System.out.println("Method: " + method);
                    }

                    //  获取URL
                    String uri = "";
                    if ((readLine.indexOf(SymbolConstants.SP, pos + 1))!= -1) {
                        uri = readLine.substring(pos + 1, readLine.indexOf(SymbolConstants.SP, pos + 1));
                        pos = readLine.indexOf(SymbolConstants.SP, pos + 1);
                        System.out.println("URI: " + uri);
                    }
                    String protocol ="";
                    //  获取协议版本
                    if ((readLine.indexOf(SymbolConstants.CR, pos + 1))!= -1){
                        protocol = readLine.substring(pos + 1, readLine.indexOf(SymbolConstants.CR, pos + 1));
                        pos = readLine.indexOf(SymbolConstants.LF, pos + 1);

                        System.out.println("protocol："+ protocol);
                    }
                    if (method != "" && uri != "" && protocol != "") {
                        request = new Request(uri, method, protocol, socket);
                        break;
                    }
                }
            }


            if (request != null) {

                Response response = new Response(request);

//                //  解析结束，交给servlet处理
//                HelloServlet helloServlet = new HelloServlet();
//                helloServlet.service(request, response);

                //  servlet处理完成后调用complete方法完成响应
                response.complete();
            }

        } catch (IOException e) {
            e.printStackTrace();
        }


    }


}
