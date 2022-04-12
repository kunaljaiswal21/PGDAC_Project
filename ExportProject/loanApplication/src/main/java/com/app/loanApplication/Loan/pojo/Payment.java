package com.app.loanApplication.Loan.pojo;

import java.time.LocalDate;

import java.time.Period;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Payment {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@ManyToOne
	private LoanDetails loanDetails;
	private LocalDate paymentDate;
	private LocalDate sceduledDate;
	private Double amount;
	private Double lateFees;
	public Payment() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Payment(LoanDetails loanDetails, LocalDate paymentDate, LocalDate sceduledDate, Double amount,Double lateFees) {
		super();
		this.loanDetails = loanDetails;
		this.paymentDate = paymentDate;
		this.sceduledDate = sceduledDate;
		this.amount = amount;
		this.lateFees = lateFees;
	}
	public LoanDetails getLoanDetails() {
		return loanDetails;
	}
	public void setLoanDetails(LoanDetails loanDetails) {
		this.loanDetails = loanDetails;
	}
	public LocalDate getPaymentDate() {
		return paymentDate;
	}
	public void setPaymentDate(LocalDate paymentDate) {
		this.paymentDate = paymentDate;
	}
	public LocalDate getSceduledDate() {
		return sceduledDate;
	}
	public void setSceduledDate(LocalDate sceduledDate) {
		this.sceduledDate = sceduledDate;
	}
	public Double getAmount() {
		return amount;
	}
	public void setAmount(Double amount) {
		this.amount = amount;
	}
	public Double getLateFees() {
		return lateFees;
	}
	public void setLateFees(Double lateFees) {
		this.lateFees = lateFees;
	}
	public Long getId() {
		return id;
	}
	
}
