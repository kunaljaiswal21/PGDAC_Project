package com.app.loanApplication.customer.Exceptions;

public class UserAlreadyPresentException extends RuntimeException {

	public UserAlreadyPresentException(String msg) {
		super(msg);
	}
}
