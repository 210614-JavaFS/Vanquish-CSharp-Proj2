package com.revature.repos;

import java.util.List;

//import javax.persistence.criteria.CriteriaQuery;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.revature.models.Book;
import com.revature.models.Invoice;
import com.revature.models.Order;


@Repository
@Transactional(propagation=Propagation.NESTED)
public class AdminDAOImpl implements AdminDAO {

	
	private static Logger log = LoggerFactory.getLogger(AdminDAOImpl.class);
	
	
	@Autowired
	private SessionFactory sessionFactory;

	
	public AdminDAOImpl(SessionFactory sessionFactory) {
		super();
		this.sessionFactory = sessionFactory;
	}

	
	@Override
	public List<Invoice> findAllInvoice() {
		Session session = sessionFactory.getCurrentSession();
//		CriteriaQuery<Invoice> cq = session.getCriteriaBuilder().createQuery(Invoice.class);
//		cq.from(Invoice.class);
		log.info("Admin retrieved all invoices.");
//		return session.createQuery(cq).getResultList();
		return session.createQuery("FROM Invoice").list();
	}

	
	@Override
	public Invoice findInvoiceById(int invoiceId) {
		Session session = sessionFactory.getCurrentSession();
		log.info("Admin retrieved an invoice " + invoiceId);
		return session.get(Invoice.class, invoiceId);
	}

	
	@Override
	public Invoice findInvoiceByUserId(int userId) {
		Session session = sessionFactory.getCurrentSession();
		log.info("Admin retrieved an invoice with userID " + userId);
		return session.get(Invoice.class, userId);	
	}

	
	@Override
	public void updateOrder(Order order) {
		Session session = sessionFactory.getCurrentSession();
		session.update(order);
		log.info("Admin updated an existing order " + order.getInvoice().getUsdAmount());
	}

	@Override
	public void reviewInvoice(Invoice invoice) {
		Session session = sessionFactory.getCurrentSession();
		session.update(invoice);
		if(invoice.getInvoiceStatus().toLowerCase().equals("approved")) {
			log.info("Admin approved " + invoice.getInvoiceID() + "with total USD:$" + invoice.getUsdAmount());
		} else if(invoice.getInvoiceStatus().toLowerCase().equals("rejected")) {
			log.info("Admin rejected " + invoice.getInvoiceID());
		} else {
			System.out.println("Something went wrong!");
		}
	}

//	@Override
//	public void rejectOrder(Invoice invoice) {
//		Session session = sessionFactory.getCurrentSession();
//	}

	@Override
	public List<Book> findAllBook() {
		Session session = sessionFactory.getCurrentSession();
//		CriteriaQuery<Book> cq = session.getCriteriaBuilder().createQuery(Book.class);
//		cq.from(Book.class);
		log.info("Admin retrieved active book listing.");
//		return session.createQuery(cq).getResultList();
		return session.createQuery("FROM Book").list();
	}

	@Override
	public void addBook(Book book) {
		Session session = sessionFactory.getCurrentSession();
		session.saveOrUpdate(book);
		log.info("Admin added a new book "+ book.getBookName());
	}

	@Override
	public void updateBook(Book book) {
		Session session = sessionFactory.getCurrentSession();
		session.update(book);
		log.info("Admin updated an existing book " + book.getBookName());
	}

	@Override
	public void deleteBook(Book book) {
		Session session = sessionFactory.getCurrentSession();
		session.delete(book);
		log.info("Admin deleted a book from listing " + book.getBookName());
	}

}
