package com.revature.models;


import java.util.Arrays;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;



@Entity
@Table(name = "book")


public class Book {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="book_id")
	private int bookId;
	
	@Column(name = "book_author")
	private String Author;
	
	
	@Column(name = "book_name", nullable = false)
	private String bookName;
	
	@Column(name = "book_description")
	private String bookDescription;
	
    @Column(
        name = "book_category"
    )
    private String bookCategory;
	
	
	@Column(name = "book_cost_USD", nullable = false)
	private double costUSD;
	
	
	@Column(name = "book_img_URL")
	private String imgURL;
	
	@Column(name = "quantity")
	private int bookStockQuantity;
	
	

	public Book(int bookId, String author, String bookName, String bookDescription, String bookCategory, double costUSD,
			String imgURL, int bookStockQuantity) {
		super();
		this.bookId = bookId;
		Author = author;
		this.bookName = bookName;
		this.bookDescription = bookDescription;
		this.bookCategory = bookCategory;
		this.costUSD = costUSD;
		this.imgURL = imgURL;
		this.bookStockQuantity = bookStockQuantity;
	}
	
	

	public Book(String author, String bookName, String bookDescription, String bookCategory, double costUSD,
			String imgURL, int bookStockQuantity) {
		super();
		Author = author;
		this.bookName = bookName;
		this.bookDescription = bookDescription;
		this.bookCategory = bookCategory;
		this.costUSD = costUSD;
		this.imgURL = imgURL;
		this.bookStockQuantity = bookStockQuantity;
	}
	
	



	public Book() {
		super();
	}



	public int getBookId() {
		return bookId;
	}

	public void setBookId(int bookId) {
		this.bookId = bookId;
	}

	public String getAuthor() {
		return Author;
	}

	public void setAuthor(String author) {
		Author = author;
	}

	public String getBookName() {
		return bookName;
	}

	public void setBookName(String bookName) {
		this.bookName = bookName;
	}

	public String getBookDescription() {
		return bookDescription;
	}

	public void setBookDescription(String bookDescription) {
		this.bookDescription = bookDescription;
	}

	public String getBookCategory() {
		return bookCategory;
	}

	public void setBookCategory(String bookCategory) {
		this.bookCategory = bookCategory;
	}

	public double getCostUSD() {
		return costUSD;
	}

	public void setCostUSD(double costUSD) {
		this.costUSD = costUSD;
	}

	public String getImgURL() {
		return imgURL;
	}

	public void setImgURL(String imgURL) {
		this.imgURL = imgURL;
	}

	public int getBookStockQuantity() {
		return bookStockQuantity;
	}

	public void setBookStockQuantity(int bookStockQuantity) {
		this.bookStockQuantity = bookStockQuantity;
	}
	
	
	


}


