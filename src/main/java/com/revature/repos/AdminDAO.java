package com.revature.repos;

import java.util.List;

import com.revature.models.Book;
import com.revature.models.Invoice;
import com.revature.models.Order;

public interface AdminDAO {
	
	//Populate Invoice table
//	public List<Invoice> findAllInvoice();
	//Find Invoice by Invoice ID.
//	public Invoice findInvoiceById(int invoiceId);
	//Find Invoice by User ID.
//	public Invoice findInvoiceByUserId(int userId);
	
	//Populate Order table
//	public void updateOrder(Order order);
	//Use reviewInvoice to replace approved and reject two functions.
	public void reviewInvoice(Invoice invoice);
//	public void approveOrder(Invoice invoice);
//	public void rejectOrder(Invoice invoice);
	
	//Populate Book listing
//	public List<Book> findAllBook();
//	public void addBook(Book book);
//	public void updateBook(Book book);
//	public void deleteBook(Book book);
}
