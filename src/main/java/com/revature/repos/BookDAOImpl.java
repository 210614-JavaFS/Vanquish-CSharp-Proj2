package com.revature.repos;


import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.revature.models.Book;

@Repository
@Transactional(propagation=Propagation.NESTED)
public class BookDAOImpl implements BookDAO{
	
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
