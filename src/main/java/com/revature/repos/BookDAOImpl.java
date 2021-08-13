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
	public List<Book> findAllBook() {
		Session session = sessionFactory.getCurrentSession();
//		CriteriaQuery<Book> cq = session.getCriteriaBuilder().createQuery(Book.class);
//		cq.from(Book.class);
		log.info("Admin retrieved active book listing.");
//		return session.createQuery(cq).getResultList();
		return session.createQuery("FROM Book").list();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Book> findAllBookByInvoice(int userId,int invoiceId) {
		Session session = sessionFactory.getCurrentSession();
		
		String sql = "Select book.* "
				+ " FROM users "
				+ " LEFT JOIN invoice ON users.USER_ID = invoice.USER_USER_ID "
				+ " LEFT JOIN orders ON invoice.INVOICE_ID = orders.invoice_id"
				+ " LEFT JOIN book ON book.BOOK_ID = orders.BOOK_ID WHERE users.USER_ID  = :user_id AND invoice.INVOICE_ID  = :invoice_id ;";
		Query<Book> query = session.createNativeQuery(sql, Book.class);
		query.setParameter("user_id", userId).setParameter("invoice_id", invoiceId);
		log.info("Find all Books");
		List<Book> list = query.getResultList();
		
		return list;
		
	}

	@Override
	public Book findBookById() {
		// TODO Auto-generated method stub
		return null;
	}
	
	
	
	
	
	

}
