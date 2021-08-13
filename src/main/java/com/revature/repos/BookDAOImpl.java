package com.revature.repos;

import java.util.List;

import org.hibernate.query.Query;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.revature.models.Book;

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
	public void addBook(Book book) {
		Session session = sessionFactory.getCurrentSession();
		session.save(book);
	}

	@Override
	public void updateBook(Book book) {
		Session session = sessionFactory.getCurrentSession();
		session.merge(book);
		
	}

	@Override
	public void deleteBook(Book book) {
		Session session = sessionFactory.getCurrentSession();
		session.delete(book);	
		
	
	}

	
	
	
	
	
	

}
