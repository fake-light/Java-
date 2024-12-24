package com.tao;

import java.net.URL;
import java.net.URLClassLoader;

public class WebClassLoader extends URLClassLoader {
    public WebClassLoader(URL[] urls) {
        super(urls);
    }
}
