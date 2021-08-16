package com.revature.repos;


import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.revature.models.Book;
import com.revature.models.User;

@Repository
@Transactional(propagation=Propagation.NESTED)
public class BookDAOImpl implements BookDAO{
	
	private static Logger log = LoggerFactory.getLogger(BookDAOImpl.class);
	
	
	@Autowired
	private SessionFactory sessionFactory;

	public BookDAOImpl(SessionFactory sessionFactory) {
		super();
		this.sessionFactory = sessionFactory;
	}

	@Override
	public List<Book> findAllBook() {
		Session session = sessionFactory.getCurrentSession();
		log.info("Admin retrieved active book listing.");
		return session.createQuery("FROM Book").list();
	}
	
	@Override
	public void addBook(Book book) {
		Session session = sessionFactory.getCurrentSession();
		session.save(book);
		log.info("Admin added a new book "+ book.getBookName());
	}

	@Override
	public void updateBook(Book book) {
		Session session = sessionFactory.getCurrentSession();
		session.merge(book);
		log.info("Admin updated an existing book " + book.getBookName());
	}

	@Override
	public void deleteBook(int bookId) {
		Session session = sessionFactory.getCurrentSession();
		session.delete(bookId);	
		log.info("Admin deleted a book " + bookId + "f rom listing ");
	}

	@Override
	public Book findBookById(int id) {
		Session session = sessionFactory.getCurrentSession();
		log.info("Admin retrieved book " + id);
		return session.get(Book.class, id);
	}
}

