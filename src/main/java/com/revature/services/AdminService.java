package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.models.Book;
import com.revature.models.Invoice;
import com.revature.repos.AdminDAO;
<<<<<<< HEAD
import com.revature.repos.BookDAO;
=======
>>>>>>> 97f1e86e0eed866c4a5f4dbac489fe1aae5cfc61
import com.revature.repos.InvoiceDAO;


@Service
public class AdminService {

	private AdminDAO adminDAO;
<<<<<<< HEAD
	private BookDAO bookDAO;
=======
>>>>>>> 97f1e86e0eed866c4a5f4dbac489fe1aae5cfc61
	private InvoiceDAO invoiceDAO;


//	@Autowired
//	public AdminService(AdminDAO adminDAO) {
//		super();
//		this.adminDAO = adminDAO;
//	}

	@Autowired
<<<<<<< HEAD
	public AdminService(AdminDAO adminDAO, BookDAO bookDAO, InvoiceDAO invoiceDAO) {
		super();
		this.adminDAO = adminDAO;
		this.bookDAO = bookDAO;
=======
	public AdminService(AdminDAO adminDAO, InvoiceDAO invoiceDAO) {
		super();
		this.adminDAO = adminDAO;
>>>>>>> 97f1e86e0eed866c4a5f4dbac489fe1aae5cfc61
		this.invoiceDAO = invoiceDAO;
	}


	public List<Invoice> getAllInvoice() {
		return invoiceDAO.findAllInvoice();
	}

	public Invoice getInvoiceById(int invoiceId) {
		return invoiceDAO.findInvoiceById(invoiceId);
	}
	
	public Invoice getInvoiceByUserId(int userId) {
		return invoiceDAO.findInvoiceByuserId(userId);
	}
	
//	public void updateOrder(Order order) {
//		adminDAO.updateOrder(order);
//	}
	
	public void reviewInvoice(Invoice invoice) {
		adminDAO.reviewInvoice(invoice);
	}
	
	
	public List<Book> getAllBook(){
		return bookDAO.findAllBook();
	}
	
	public Book getBookById(int bookId){
		return bookDAO.findBookById(bookId);
	}
	
	
	public void addBook(Book book) {
		bookDAO.addBook(book);
	}
	
	
	public void updateBook(Book book) {
		bookDAO.updateBook(book);
	}
	
	
	public void deleteBook(int bookId) {
		bookDAO.deleteBook(bookId);
	}
	
	public List<Order> getAllOrders(){		
		return invoiceDAO.allOrder();
	}
	
	
}
