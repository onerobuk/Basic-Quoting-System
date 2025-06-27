package dev.abhinavvuppala.quotingbackend.exception;

import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.ConstraintViolationException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity<String> handleDataIntegrityViolation(DataIntegrityViolationException ex){
        String errorMessage = (ex.getRootCause()==null) ? ex.getMessage():ex.getRootCause().getMessage();
        return new ResponseEntity<>("Invalid data: " + errorMessage,HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(ConstraintViolationException.class)
    public ResponseEntity<String> handleConstraintViolation(ConstraintViolationException ex){
        return new ResponseEntity<>("Failed Validation: " + ex.getMessage(),HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity<String> handleNoSuchEntity(EntityNotFoundException ex){
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(unauthorizedAccessException.class)
    public ResponseEntity<String> handleUnauthorizedAccess(unauthorizedAccessException ex){
        return new ResponseEntity<>("Unauthorized access: " + ex.getMessage(),HttpStatus.UNAUTHORIZED);
    }
}
