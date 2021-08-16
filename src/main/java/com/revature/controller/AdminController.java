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
	
//	@RequestMapping(method = RequestMethod.GET)
//	public List<Invoice> allInvoice(){
//		return adminService.getAllInvoice();
//	}
//	
//	@RequestMapping(method = RequestMethod.GET)
//	public List<Book> allBook(){
//		return adminService.getAllBook();
//	}
	
	//comment from Jack. I didn't do anything.
	@GetMapping("/allinvoice")
	public List<Invoice> allInvoice(){
		return adminService.getAllInvoice();
	}
	

	@GetMapping("/allbook")
	public List<Book> allBook(){
		return adminService.getAllBook();
	}
	
	
	@PostMapping("/addbook")
	public ResponseEntity<Book> addBook(@RequestBody Book book){
		adminService.addBook(book);
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}
	
	@PutMapping("/updatebook")
	public ResponseEntity<Book> updateBook(@RequestBody Book book){
		adminService.updateBook(book);
		return ResponseEntity.status(HttpStatus.ACCEPTED).build();
	}
	
	@PutMapping("/updateorder")
	public ResponseEntity<Order> updateOrder(@RequestBody Order order){
		adminService.updateOrder(order);
		return ResponseEntity.status(HttpStatus.ACCEPTED).build();
	}
	
	@PutMapping("/updateinvoice")
	public ResponseEntity<Invoice> updateInvoiceStatus(@RequestBody Invoice invoice){
		adminService.reviewInvoice(invoice);
		return ResponseEntity.status(HttpStatus.ACCEPTED).build();
	}

	
	@DeleteMapping("/delete")
	public ResponseEntity<Book> deleteBook(@RequestBody Book book){
		System.out.println("Deleting book");
		adminService.deleteBook(book);
		return ResponseEntity.status(HttpStatus.ACCEPTED).build();
	}
	
	@GetMapping("/allorder")
	public List<Order> allOrder(){
		return adminService.getAllOrders();
	}
	
}
