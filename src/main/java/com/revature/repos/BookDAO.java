package com.revature.repos;

import java.util.List;

import com.revature.models.Book;

public interface BookDAO {
	
	
	public Book findBookById();

	public List<Book> findAllBook();
	

	public List<Book> findAllBookByInvoice(int userId, int invoiceId);
	
}
