package com.tao.tomcat;

import com.tao.WebClassLoader;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import java.io.File;
import java.io.IOException;
import java.net.*;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class Tomcat {

    public static void main(String[] args) {

        Tomcat tomcat = new Tomcat();
        tomcat.deployApps();
//        tomcat.start();

    }

    private void deployApps() {
        File webapps = new File(System.getProperty("user.dir"), "webapps");
        for (String app : webapps.list()) {
            deployApp(webapps, app);
        }

    }

    private void deployApp(File webapps, String app) {
        File appDir = new File(webapps, app);
        File classDir = new File(appDir, "classes/");

        //  此处应该递归遍历获取下面的所有文件，此处偷懒，直接获取指定的servlet
        String path = classDir.getPath();
        File servletClass = new File(path + "com/tao/tomcat/HelloServlet.class");

        String name = servletClass.getPath();
        name = name.replace(path, "");
        name = name.replace(".class", "");
        name = name.replace("\\", ".");

        try {
            System.out.println(name);
            URLClassLoader classLoader = new URLClassLoader(new URL[]{classDir.toURI().toURL()});
            Class<?> aClass = classLoader.loadClass(name);
            //  判断是否继承于HttpServlet
            if (HttpServlet.class.isAssignableFrom(aClass)){
                //  判断是否包含Webservlet注解
                if (aClass.isAnnotationPresent(WebServlet.class)){
                    //  获取映射关系，然后存储起来，后面根据URL进行调用
                    WebServlet annotation = aClass.getAnnotation(WebServlet.class);
                    String[] urls = annotation.urlPatterns();
                }
            }
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        }
    }

    private void start() {
        try {

            ExecutorService threadPool = Executors.newFixedThreadPool(20);
            //  新建一个Socket监听8000端口用于处理连接
            ServerSocket serverSocket = new ServerSocket(8000);

            while (true){
                Socket socket = serverSocket.accept();
                //  多线程并行处理连接
                threadPool.execute(new SocketProcessor(socket));

            }


        } catch (IOException e) {
            e.printStackTrace();
        }



    }
}
