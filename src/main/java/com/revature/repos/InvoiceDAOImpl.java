package com.revature.repos;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.NativeQuery;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.revature.models.Book;
import com.revature.models.Invoice;
import com.revature.models.Order;
import com.revature.models.User;



@Repository
@Transactional(propagation=Propagation.NESTED)
public class InvoiceDAOImpl implements InvoiceDAO{

	private static Logger log = LoggerFactory.getLogger(InvoiceDAOImpl.class);
	
	@Autowired
	private SessionFactory sessionFactory;
		
	public InvoiceDAOImpl(SessionFactory sessionFactory) {
		super();
		this.sessionFactory = sessionFactory;
	}

	
	
	@Override
	public void addInvoice(User user, Book book, double nativeAmount, int quantity) {
		Session session = sessionFactory.getCurrentSession();
		Invoice invoice = new Invoice();
		invoice.setInvoiceStatus("new");
		invoice.setNativeCurrency(user.getCurrencyID());
		invoice.setNativeAmount(nativeAmount);
		invoice.setUser(user);
		double usdTotal = book.getCostUSD() *quantity;
		invoice.setUsdAmount(usdTotal);
		session.save(invoice);
		log.info("User create a new invoice ticket.");
	}



	@Override
	public Invoice findInvoiceByuserId(int userID) {
		Session session = sessionFactory.getCurrentSession();
		String sql = "SELECT invoice.* "
				+ " FROM users "
				+ " LEFT JOIN invoice ON users.USER_ID = invoice.USER_ID "
				+ " WHERE users.USER_ID = :user_id AND  invoice.STATUS = 'new'; ";
		NativeQuery<Invoice> query = session.createNativeQuery(sql, Invoice.class);
		query.setParameter("user_id", userID);
		List<Invoice> result = query.getResultList();
		Invoice invoice = (Invoice) result.get(0);
		invoice.setInvoiceStatus("pending");
		session.merge(invoice);
		log.info("Got the invoice ticket from customer");
		return invoice;
	}



	@Override
	public void addOrder(User user, Book book, Invoice invoice, int quantity) {
		Session session = sessionFactory.getCurrentSession();
		Order order = new Order();
		order.setOrderQuantity(quantity);
		order.setBook(book);
		order.setInvoice(invoice);
		order.setUser(user);
		session.save(order);
		log.info("User created a new Order");
		
	}




}
