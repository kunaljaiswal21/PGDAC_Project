package com.app.loanApplication.Loan.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.app.loanApplication.Loan.pojo.LoanDetails;
import com.app.loanApplication.Loan.pojo.Payment;

public interface PaymentRepo extends CrudRepository<Payment, Long> {
	
	public List<Payment> findByLoanDetails(LoanDetails ld);

}
