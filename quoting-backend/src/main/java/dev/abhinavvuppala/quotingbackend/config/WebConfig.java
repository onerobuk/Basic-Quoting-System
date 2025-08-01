package dev.abhinavvuppala.quotingbackend.config;

import dev.abhinavvuppala.quotingbackend.interceptor.HeaderAuthInterceptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    private final HeaderAuthInterceptor headerAuthInterceptor;
    @Autowired
    public WebConfig(HeaderAuthInterceptor headerAuthInterceptor) {
        this.headerAuthInterceptor = headerAuthInterceptor;
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry){
        registry.addInterceptor(headerAuthInterceptor).excludePathPatterns("/","/index.html","/docs/**");
    }

}
