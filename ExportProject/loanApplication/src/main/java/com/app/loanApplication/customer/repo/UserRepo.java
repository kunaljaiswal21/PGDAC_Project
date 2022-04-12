package com.app.loanApplication.customer.repo;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.app.loanApplication.customer.pojo.CustomerDao;

public interface UserRepo extends CrudRepository<CustomerDao, Long> {

	public Optional<CustomerDao> findByUserName(String userName);
}
