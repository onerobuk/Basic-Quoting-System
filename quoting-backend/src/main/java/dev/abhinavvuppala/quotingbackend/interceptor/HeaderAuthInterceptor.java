package dev.abhinavvuppala.quotingbackend.interceptor;

import dev.abhinavvuppala.quotingbackend.exception.unauthorizedAccessException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

@Component
public class HeaderAuthInterceptor implements HandlerInterceptor {
    private static final String FRONTEND_KEY = "tricephalos";

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception{
        String requestHeader = request.getHeader("Frontend-Key");
        System.out.println("header check");
        if (request.getMethod().equalsIgnoreCase("OPTIONS")){
            return true;
        }
        if(requestHeader!=null){
            if(!requestHeader.equals(FRONTEND_KEY)) {
                unauthorizedAccessException.accessDeniedReasons errorInvalidHeaders = unauthorizedAccessException.accessDeniedReasons.INCORRECT_KEY;
                throw new unauthorizedAccessException(errorInvalidHeaders);
            }
        }
        else{
            unauthorizedAccessException.accessDeniedReasons errorInvalidHeaders = unauthorizedAccessException.accessDeniedReasons.INVALID_HEADERS;
            throw new unauthorizedAccessException(errorInvalidHeaders);
        }
        return true;
    }
}
