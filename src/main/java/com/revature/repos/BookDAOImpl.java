<<<<<<< HEAD
//package com.revature.repos;
//
//
//import org.hibernate.Session;
//import org.hibernate.SessionFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Repository;
//import org.springframework.transaction.annotation.Propagation;
//import org.springframework.transaction.annotation.Transactional;
//
//import com.revature.models.Book;
//
//@Repository
//@Transactional(propagation=Propagation.NESTED)
//public class BookDAOImpl implements BookDAO{
//	
//	@Autowired
//	private SessionFactory sessionFactory;
//
//	public BookDAOImpl(SessionFactory sessionFactory) {
//		super();
//		this.sessionFactory = sessionFactory;
//	}
//
//	@Override
//	public void addBook(Book book) {
//		Session session = sessionFactory.getCurrentSession();
//		session.save(book);
//	}
//
//	@Override
//	public void updateBook(Book book) {
//		Session session = sessionFactory.getCurrentSession();
//		session.merge(book);
//		
//	}
//
//	@Override
//	public void deleteBook(Book book) {
//		Session session = sessionFactory.getCurrentSession();
//		session.delete(book);	
//	}
//
//}
=======
package com.revature.repos;


import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.revature.models.Book;
import com.revature.models.User;

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

	@Override
	public Book findBookById(int id) {
		Session session = sessionFactory.getCurrentSession();
		Book book = session.get(Book.class, id);
		
		return book;
	}
}
>>>>>>> origin/testing-db
