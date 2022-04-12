package com.app.loanApplication.customer.Exceptions;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class GlobalExceptionHandler {
	
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<ExceptionBody> genralException(MethodArgumentNotValidException ex){
		ExceptionBody eb = new ExceptionBody(400,ex.getBindingResult().getFieldError().getDefaultMessage(),LocalDate.now());
		return new ResponseEntity(eb,HttpStatus.BAD_REQUEST);
	}
	

	@ExceptionHandler(UserAlreadyPresentException.class)
	public ResponseEntity<ExceptionBody> userAlreadyPresent(UserAlreadyPresentException ex){
		ExceptionBody eb = new ExceptionBody(400,ex.getMessage(),LocalDate.now());
		return new ResponseEntity(eb,HttpStatus.BAD_REQUEST);
	}
	
	@ExceptionHandler(Incorrectpassword.class)
	public ResponseEntity<ExceptionBody> passwordNotCorrect(Incorrectpassword ex){
		ExceptionBody eb = new ExceptionBody(400,ex.getMessage(),LocalDate.now());
		return new ResponseEntity(eb,HttpStatus.BAD_REQUEST);
	}
	
	@ExceptionHandler(UserNotFound.class)
	public ResponseEntity<ExceptionBody> userNotFound(UserNotFound ex){
		ExceptionBody eb = new ExceptionBody(400,ex.getMessage(),LocalDate.now());
		return new ResponseEntity(eb,HttpStatus.BAD_REQUEST);
	}
	

}
