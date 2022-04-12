package com.app.loanApplication.Loan.repo;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.app.loanApplication.Loan.pojo.EMIDetails;
import com.app.loanApplication.Loan.pojo.LoanDetails;

public interface EMIRepo extends CrudRepository<EMIDetails, Long> {

	public Optional<EMIDetails> findByLoanDetails(LoanDetails ld);
}
