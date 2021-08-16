package com.revature.services;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import com.revature.models.Book;
import com.revature.models.Invoice;
import com.revature.models.Order;
import com.revature.repos.AdminDAO;
import com.revature.repos.BookDAO;
import com.revature.repos.InvoiceDAO;

class AdminServiceTest {

	public static AdminService adminService;
	public static AdminDAO adminDAO;
	public static BookDAO bookDAO;
	public static InvoiceDAO invoiceDAO;
	public static List<Book> bookResult;
	public static List<Invoice> invoiceResult;
	public static List<Order> orderResult;
	
	@BeforeAll
	public static void setAdminService() {
		adminService = new AdminService(adminDAO, bookDAO, invoiceDAO);
		System.out.println("AdminService Unit Test Begin!");
	}
	
	@AfterAll
	public static void clearAdminService() {
		System.out.println("AdminService Unit Test Done!");
		adminService = null;
	}
	
//	
//	@Test
//	void testAdminService() {
//		fail("Not yet implemented");
//	}

//	@Test
//	void testGetAllInvoice() {
//		System.out.println("Testing get all invoices.");
//		invoiceResult = invoiceDAO.findAllInvoice();
//		assertNotNull(invoiceResult);
//		System.out.println("========================================================");
//	}
//
//	@Test
//	void testGetInvoiceById() {
//		System.out.println("Testing get inovice by invoiceId");
//		int invoiceId = 1;
//		assertNotNull(invoiceDAO.findInvoiceById(invoiceId));
//		System.out.println("========================================================");
//	}
//
//	@Test
//	void testGetInvoiceByUserId() {
//		System.out.println("Testing get invoice by userId");
//		int userId = 1;
//		assertNotNull(invoiceDAO.findInvoiceByuserId(userId));
//		System.out.println("========================================================");
//	}
//
//	@Test
//	void testReviewInvoice() {
//		
//		System.out.println("========================================================");
//	}

	@Test
	void testGetAllBook() {
		System.out.println("Testing get all books.");
		bookResult = adminService.getAllBook();
		assertNotNull(bookResult);
		System.out.println("========================================================");
	}

//	@Test
//	void testGetBookById() {
//		System.out.println("Testing get book by bookId");
//		int bookId = 1;
//		assertNotNull(bookDAO.findBookById(bookId));
//		System.out.println("========================================================");
//	}
//
//	@Test
//	void testAddBook() {
//		System.out.println("Testing add book");
//		Book book = new Book();
//		book.setBookId(1);
//		book.setCostUSD(9.99);
//		book.setBookStockQuantity(10);
//		bookDAO.addBook(book);
//		assertTrue(true);
//		System.out.println("========================================================");
//	}
//
//	@Test
//	void testUpdateBook() {
//		System.out.println("Testing update book");
//		Book book = new Book();
//		book.setBookId(1);
//		book.setCostUSD(9.99);
//		book.setBookStockQuantity(10);
//		bookDAO.updateBook(book);
//		assertTrue(true);
//		System.out.println("========================================================");
//	}
//
//	@Test
//	void testDeleteBook() {
//		System.out.println("Testing delete book");
//		Book book = new Book();
//		int bookId = book.getBookId();
//		bookDAO.deleteBook(bookId);
//		assertTrue(true);
//		System.out.println("========================================================");
//	}
//
//	@Test
//	void testGetAllOrders() {
//		System.out.println("Testing get all orders");
//		orderResult = invoiceDAO.allOrder();
//		assertNotNull(orderResult);
//		System.out.println("========================================================");
//	}

}
