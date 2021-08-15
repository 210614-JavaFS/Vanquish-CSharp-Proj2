package com.revature.repos;

import com.revature.models.Book;
import com.revature.models.Invoice;
import com.revature.models.User;

public interface InvoiceDAO {

	
	
	 public void addInvoice(User user, Book book, double nativeAmount, int quantity);
	 //String status = 'new';
	 
	 // find invoice id by status = new and userId
	 // invoice.setStatus('pending');
	 // session.update(invoice)
	 public Invoice findInvoiceByuserId(int userID);
	 // int invoiceid = findInvoiceByStatus(int userID);
	 
	 public void addOrder(User user, Book book, Invoice invoice, int quantity);
	
	
	
}
