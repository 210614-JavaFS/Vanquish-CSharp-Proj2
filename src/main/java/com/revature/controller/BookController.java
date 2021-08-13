package com.revature.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.revature.models.Book;
import com.revature.services.BookService;

@RestController
@RequestMapping(value="/book")
@CrossOrigin
public class BookController {

	private BookService bookService;

	@Autowired
	public BookController(BookService bookService) {
		super();
		this.bookService = bookService;
	}
	
	@RequestMapping(method = RequestMethod.GET)
	public List<Book> allBooks(){
		
		return bookService.findBookByInvoice(3, 1);
	}
	
}
