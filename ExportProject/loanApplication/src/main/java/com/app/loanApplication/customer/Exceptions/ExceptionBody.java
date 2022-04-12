package com.app.loanApplication.customer.Exceptions;

import java.time.LocalDate;

public class ExceptionBody {

	private int errorCode;
	private String msg;
	private LocalDate date;
	public ExceptionBody() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ExceptionBody(int errorCode, String msg, LocalDate date) {
		super();
		this.errorCode = errorCode;
		this.msg = msg;
		this.date = date;
	}
	public int getErrorCode() {
		return errorCode;
	}
	public void setErrorCode(int errorCode) {
		this.errorCode = errorCode;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	
	
}
