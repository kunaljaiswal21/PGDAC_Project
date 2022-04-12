package com.app.loanApplication.Controller;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.loanApplication.Loan.pojo.EMIDetails;
import com.app.loanApplication.Loan.pojo.LoanDetails;
import com.app.loanApplication.Loan.pojo.Payment;
import com.app.loanApplication.Loan.service.EMIService;
import com.app.loanApplication.Loan.service.LoanService;
import com.app.loanApplication.customer.pojo.CustomerDao;
import com.app.loanApplication.customer.service.CustomerService;

@RestController
public class LoanController {
	
	@Autowired
	private LoanService ls;
	@Autowired
	private CustomerService cs;
	@Autowired
	private EMIService es;
	
	
	@GetMapping("/feed")
	public String getLoanDetails(){
		CustomerDao clerk = new CustomerDao("David", 
				"david123", "clerk", "mrdavid@gmail.com",
				LocalDate.now(), "Male", "8080706545", "Mumbai");
		CustomerDao manager = new CustomerDao("Smith", 
				"smith123", "manager", "smith21@gmail.com",
				LocalDate.now(), "Male", "9090807565", "Mumbai");
		/*
		 * CustomerDao investigator = new CustomerDao("Aisha", "1234", "investigator",
		 * "aisha@gmail.com", LocalDate.now(), "Female", "9865743261", "Pune");
		 */
		clerk = cs.addNewCustomer(clerk);
		manager = cs.addNewCustomer(manager);
		/*
		 * investigator = cs.addNewCustomer(investigator);
		 */		return "Success";
	}
	
	@GetMapping("/loanDetailsByCustomer/{id}")
	public List<LoanDetails> getLoanDetails(@PathVariable("id") Long id){
		return ls.getLoanDetailsByCustomer(id);
	}
	
	@GetMapping("/EMIDetailsByCustomer/{id}")
	public List<EMIDetails> getEMIDetailsByCustomer(@PathVariable("id") Long id){
		CustomerDao customer = cs.getCustomerByID(id);
		return es.getByCustomerDetail(customer);
	}
	
	@PutMapping("/loanDetails")
	public LoanDetails updateStatusOfLoanApplication(@RequestBody LoanDetails ld) {
		return ls.updateLoanDetails(ld);
	}
	
	@PostMapping("/loanDetails")
	public LoanDetails addLoanApplication(@RequestBody LoanDetails ld) {
		return ls.addNewLoadDetails(ld);
	}
	
	@GetMapping("/payEMI/{customerID}/{loanID}")
	public Payment makePayment(@PathVariable("customerID") Long cId,@PathVariable("loanID") Long lId ) {
		CustomerDao customer = cs.getCustomerByID(cId);
		LoanDetails loan = ls.getLoanDetailsById(lId);
		return es.makePayment(customer, loan);
	}
	
	@GetMapping("/payEMI/{customerID}")
	public List<Payment> getPayments(@PathVariable("customerID") Long cId) {
		if (cId == 0) {
			return es.getPaymentByLoanDetails(null);
		}
		List<Payment> listPayment = new ArrayList<Payment>();
		CustomerDao customer = cs.getCustomerByID(cId);
		List<LoanDetails>  loanDetails = ls.getLoanDetailsByCustomer(customer.getId());
		for(LoanDetails loan :loanDetails) {
			es.getPaymentByLoanDetails(loan).forEach(pay -> listPayment.add(pay));
		}
		return listPayment;
	}

}
