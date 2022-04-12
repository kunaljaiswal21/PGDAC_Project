package com.app.loanApplication.Loan.pojo;

import java.time.LocalDate;
import java.time.Period;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class EMIDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@OneToOne
	private LoanDetails loanDetails;
	private int emiPaid;
	private int emiLeft;
	private LocalDate nextDate;
	private Double lateFees;
	private double amount;
	private double intrest;
	
	public EMIDetails() {
		super();
		// TODO Auto-generated constructor stub
	}
	public EMIDetails(LoanDetails loanDetails, int emiPaid, int emiLeft,
			double intrest) {
		super();
		this.loanDetails = loanDetails;
		this.emiPaid = emiPaid;
		this.emiLeft = emiLeft;
		this.nextDate = null;
		this.amount = (loanDetails.getAmount() + (loanDetails.getAmount() * (intrest / 100))) / loanDetails.getTennureInMonth();
		this.intrest = intrest;
	}
	
	public LoanDetails getLoanDetails() {
		return loanDetails;
	}
	public void setLoanDetails(LoanDetails loanDetails) {
		this.loanDetails = loanDetails;
	}
	public int getEmiPaid() {
		return emiPaid;
	}
	public void setEmiPaid(int emiPaid) {
		this.emiPaid = emiPaid;
	}
	public int getEmiLeft() {
		return emiLeft;
	}
	public void setEmiLeft(int emiLeft) {
		this.emiLeft = emiLeft;
	}
	public LocalDate getNextDate() {
		return nextDate;
	}
	public void setNextDate(LocalDate nextDate) {
		this.nextDate = nextDate;
	}
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	public double getIntrest() {
		return intrest;
	}
	public void setIntrest(double intrest) {
		this.intrest = intrest;
	}
	public Long getId() {
		return id;
	}
	
	public Double getLateFees() {
//		LocalDate today = LocalDate.now();
//		if (today.compareTo(this.nextDate) > 0) {
//			Period p = Period.between(today, this.nextDate);
//			int days = (int) (p.getDays() / 30);
//			if (days > 0) this.lateFees = this.amount / 100; ;
//				}else {
//					this.lateFees = 0.0;
//				}
		return lateFees;
	}
	public void setLateFees(Double lateFees) {
		this.lateFees = lateFees;
	}
	
}
