package com.revature.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.revature.models.Book;
import com.revature.models.Invoice;
import com.revature.models.Order;
import com.revature.services.AdminService;

@RestController
@RequestMapping(value="/admin")
@CrossOrigin
public class AdminController {

	private AdminService adminService;

	@Autowired
	public AdminController(AdminService adminService) {
		super();
		this.adminService = adminService;
	}
	
	//@RequestMapping(method = RequestMethod.GET)
	//public List<Invoice> allInvoice(){
		//return adminService.getAllInvoice();
	//}
	


	//@RequestMapping(method = RequestMethod.GET)

	@GetMapping("/allbook")
	public List<Book> allBook(){
		return adminService.getAllBook();
	}
	
	@PostMapping
	public ResponseEntity<Book> addBook(@RequestBody Book book){
		adminService.addBook(book);
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}
	
	@PutMapping
	public ResponseEntity<Book> updateBook(@RequestBody Book book){
		adminService.updateBook(book);
		return ResponseEntity.status(HttpStatus.ACCEPTED).build();
	}
	
	@PutMapping
	public ResponseEntity<Order> updateOrder(@RequestBody Order order){
		adminService.updateOrder(order);
		return ResponseEntity.status(HttpStatus.ACCEPTED).build();
	}
	
	@PutMapping
	public ResponseEntity<Invoice> updateInvoiceStatus(@RequestBody Invoice invoice){
		adminService.reviewInvoice(invoice);
		return ResponseEntity.status(HttpStatus.ACCEPTED).build();
	}

	
	@DeleteMapping
	public ResponseEntity<Book> deleteBook(@RequestBody Book book){
		adminService.deleteBook(book);
		return ResponseEntity.status(HttpStatus.ACCEPTED).build();
	}
}
