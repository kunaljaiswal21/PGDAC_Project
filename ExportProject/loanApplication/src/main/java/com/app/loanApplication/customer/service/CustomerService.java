package com.app.loanApplication.customer.service;

import java.lang.reflect.Field;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import com.app.loanApplication.customer.Exceptions.Incorrectpassword;
import com.app.loanApplication.customer.Exceptions.UserAlreadyPresentException;
import com.app.loanApplication.customer.Exceptions.UserNotFound;
import com.app.loanApplication.customer.pojo.CustomerDao;
import com.app.loanApplication.customer.repo.UserRepo;

@Service
public class CustomerService {

	
	@Autowired
	public UserRepo userRepo;
	
	public CustomerDao addNewCustomer(CustomerDao customer) {
		try {
			return userRepo.save(customer);
		}catch (DataIntegrityViolationException di){
			throw new UserAlreadyPresentException("Customer with UserName :- " +customer.getUserName() + " Already present");
		}	
	}
	
	public CustomerDao upDateCustomer(CustomerDao customer) {
		if (customer.getId() == null) {
			throw new UserNotFound("User not present !");
		}
		if(!userRepo.findById(customer.getId()).isPresent()) {
			throw new UserNotFound("User not present !");
		}
		try {
			return userRepo.save(customer);
		}catch (DataIntegrityViolationException di){
			throw new UserAlreadyPresentException("Customer with UserName :- " +customer.getUserName() + " Already present");
		}	
	}
	
	public CustomerDao getCustomerByID(Long id) {
		Optional<CustomerDao> user =  userRepo.findById(id);
		if (user.isPresent()) {
			return user.get();
		}else {
			throw new UserNotFound("Invalid User");
		}
	}
	
	public CustomerDao getCustomerByName(String name) {
		Optional<CustomerDao> user =  userRepo.findByUserName(name);
//		return user.get();
		if (user.isPresent()) {
			return user.get();
		}else {
			throw new UserNotFound("Incorrect User Name -"+ name + "");
		}
	}
}
