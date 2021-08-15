package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.models.Book;
import com.revature.models.Invoice;
import com.revature.models.Order;
import com.revature.repos.AdminDAO;
import com.revature.repos.InvoiceDAO;


@Service
public class AdminService {

	private AdminDAO adminDAO;
	private InvoiceDAO invoiceDAO;


	@Autowired
	public AdminService(AdminDAO adminDAO, InvoiceDAO invoiceDAO) {
		super();
		this.adminDAO = adminDAO;
		this.invoiceDAO = invoiceDAO;
	}

	public List<Invoice> getAllInvoice() {
		return adminDAO.findAllInvoice();
	}

	public Invoice getInvoiceById(int invoiceId) {
		return adminDAO.findInvoiceById(invoiceId);
	}
	
	public Invoice getInvoiceByUserId(int userId) {
		return adminDAO.findInvoiceByUserId(userId);
	}
	
	public void updateOrder(Order order) {
		adminDAO.updateOrder(order);
	}
	
	public void reviewInvoice(Invoice invoice) {
		adminDAO.reviewInvoice(invoice);
	}
	
	
	public List<Book> getAllBook(){
		return adminDAO.findAllBook();
	}
	
	
	public void addBook(Book book) {
		adminDAO.addBook(book);
	}
	
	
	public void updateBook(Book book) {
		adminDAO.updateBook(book);
	}
	
	
	public void deleteBook(Book book) {
		adminDAO.deleteBook(book);
	}
	
	public List<Order> getAllOrders(){		
		return invoiceDAO.allOrder();
	}
	
	
}
