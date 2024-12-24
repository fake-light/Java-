package com.tao.tomcat;

import java.net.Socket;

public class Request extends AbstractHttpServletRequest{

    private Socket socket;

    private String requestUri;

    private String method;

    private String protocol;

    public Request(String requestUri, String method, String protocol, Socket socket) {
        this.requestUri = requestUri;
        this.method = method;
        this.protocol = protocol;
        this.socket = socket;
    }

    public StringBuffer getRequestURL() {
        return new StringBuffer(requestUri);
    }

    public String getMethod() {
        return method;
    }

    public String getProtocol() {
        return protocol;
    }

    public Socket getSocket() {
        return socket;
    }
}
