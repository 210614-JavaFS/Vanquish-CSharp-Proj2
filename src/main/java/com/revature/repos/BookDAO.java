package com.revature.repos;

import java.util.List;

import com.revature.models.Book;

public interface BookDAO {
	
	public void addBook(Book book);
	
	public void updateBook(Book book);
	
	public void deleteBook(Book book);
	
	
}
