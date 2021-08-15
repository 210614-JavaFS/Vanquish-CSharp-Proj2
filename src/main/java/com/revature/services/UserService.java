package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.models.Book;
import com.revature.models.Invoice;
import com.revature.models.Order;
import com.revature.models.User;
import com.revature.repos.BookDAO;
import com.revature.repos.InvoiceDAO;
import com.revature.repos.UserDAO;

@Service
public class UserService {

	private UserDAO userDAO;
	private InvoiceDAO invoiceDAO;
	private BookDAO bookDAO;

	@Autowired
	public UserService(UserDAO userDAO, InvoiceDAO invoiceDAO, BookDAO bookDAO) {
		super();
		this.userDAO = userDAO;
		this.invoiceDAO = invoiceDAO;
		this.bookDAO = bookDAO;
	}

	public void addUser(User user) {
		userDAO.addUser(user);
	}
	
	public List<User> findAllUsers() {
		return userDAO.findAllUsers();
	}
	
	public User findById(int id) {
		return userDAO.findById(id);
	}
	
	public User findByEmail(String email) {
		return userDAO.findByEmail(email);
	}

	public void updateUser(User user) {
		userDAO.updateUser(user);
		
	}
	
	public void generatedOrder(int userId, int bookId, double nativeAmount, String name) {
		User user = userDAO.findById(userId);
		Book book = bookDAO.findBookById(bookId);
		invoiceDAO.addInvoice(user, book, nativeAmount, name);
		Invoice invoice = invoiceDAO.findInvoiceByuserId(userId);
		invoiceDAO.addOrder(user, book, invoice);		
	}
	
	public void statusUpdate(int invoiceId, String status) {
		invoiceDAO.updateStatusbyId(invoiceId, status);
	}
	
	public List<Order> OrdersById(int userId){		
		return invoiceDAO.findOrderByuserId(userId);
	}
	
	
	
	
}
