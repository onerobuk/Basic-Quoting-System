package dev.abhinavvuppala.quotingbackend.exception;


import lombok.Getter;

public class unauthorizedAccessException extends RuntimeException {

    @Getter
    public enum accessDeniedReasons{
      INVALID_HEADERS("Request is missing an access header."),
      INCORRECT_KEY("Request Header contains invalid key");

      @Getter
      private final String errorMessage;

      accessDeniedReasons(String errorMessage){
        this.errorMessage=errorMessage;
      }
    }

    public unauthorizedAccessException(accessDeniedReasons reason) {
        super(reason.getErrorMessage());
    }
}
