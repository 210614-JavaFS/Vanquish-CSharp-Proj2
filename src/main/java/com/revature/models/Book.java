package com.revature.models;


import java.util.Arrays;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name = "book")


public class Book {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="book_id")
	private int bookId;
	
	@Column(name = "book_author")
	private String author;
	
	
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
		this.author = author;
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
		this.author = author;
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
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
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

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((author == null) ? 0 : author.hashCode());
		result = prime * result + ((bookCategory == null) ? 0 : bookCategory.hashCode());
		result = prime * result + ((bookDescription == null) ? 0 : bookDescription.hashCode());
		result = prime * result + bookId;
		result = prime * result + ((bookName == null) ? 0 : bookName.hashCode());
		result = prime * result + bookStockQuantity;
		long temp;
		temp = Double.doubleToLongBits(costUSD);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		result = prime * result + ((imgURL == null) ? 0 : imgURL.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Book other = (Book) obj;
		if (author == null) {
			if (other.author != null)
				return false;
		} else if (!author.equals(other.author))
			return false;
		if (bookCategory == null) {
			if (other.bookCategory != null)
				return false;
		} else if (!bookCategory.equals(other.bookCategory))
			return false;
		if (bookDescription == null) {
			if (other.bookDescription != null)
				return false;
		} else if (!bookDescription.equals(other.bookDescription))
			return false;
		if (bookId != other.bookId)
			return false;
		if (bookName == null) {
			if (other.bookName != null)
				return false;
		} else if (!bookName.equals(other.bookName))
			return false;
		if (bookStockQuantity != other.bookStockQuantity)
			return false;
		if (Double.doubleToLongBits(costUSD) != Double.doubleToLongBits(other.costUSD))
			return false;
		if (imgURL == null) {
			if (other.imgURL != null)
				return false;
		} else if (!imgURL.equals(other.imgURL))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Book [bookId=" + bookId + ", author=" + author + ", bookName=" + bookName + ", bookDescription="
				+ bookDescription + ", bookCategory=" + bookCategory + ", costUSD=" + costUSD + ", imgURL=" + imgURL
				+ ", bookStockQuantity=" + bookStockQuantity + "]";
	}
	
	
	
	

	


}


