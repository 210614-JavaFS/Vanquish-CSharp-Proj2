package com.revature.models;

import java.util.Arrays;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.TypeDef;
import org.hibernate.annotations.TypeDefs;

import com.vladmihalcea.hibernate.type.array.StringArrayType;

@Entity
@Table(name = "book")
@TypeDefs({
    @TypeDef(
        name = "string-array", 
        typeClass = StringArrayType.class
    )
})

public class Book {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="book_id")
	private int bookId;
	
	@Column(name = "book_name", nullable = false)
	private String bookName;
	
	@Column(name = "book_description")
	private String bookDescription;
	
	@Column(name = "book_category")
	private String[] category; 
	
	@Column(name = "book_cost_USD", nullable = false)
	private double costUSD;
	
	@Column(name = "book_author")
	private String Author;
	
	@Column(name = "book_img_URL")
	private String imgURL;

	
	
	
	public Book() {
		super();
	}

	public Book(String bookName, String bookDescription, String[] category, double costUSD, String author,
			String imgURL) {
		super();
		this.bookName = bookName;
		this.bookDescription = bookDescription;
		this.category = category;
		this.costUSD = costUSD;
		Author = author;
		this.imgURL = imgURL;
	}

	public int getBookId() {
		return bookId;
	}

	public void setBookId(int bookId) {
		this.bookId = bookId;
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

	public String[] getCategory() {
		return category;
	}

	public void setCategory(String[] category) {
		this.category = category;
	}

	public double getCostUSD() {
		return costUSD;
	}

	public void setCostUSD(double costUSD) {
		this.costUSD = costUSD;
	}

	public String getAuthor() {
		return Author;
	}

	public void setAuthor(String author) {
		Author = author;
	}

	public String getImgURL() {
		return imgURL;
	}

	public void setImgURL(String imgURL) {
		this.imgURL = imgURL;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((Author == null) ? 0 : Author.hashCode());
		result = prime * result + ((bookDescription == null) ? 0 : bookDescription.hashCode());
		result = prime * result + bookId;
		result = prime * result + ((bookName == null) ? 0 : bookName.hashCode());
		result = prime * result + Arrays.hashCode(category);
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
		if (Author == null) {
			if (other.Author != null)
				return false;
		} else if (!Author.equals(other.Author))
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
		if (!Arrays.equals(category, other.category))
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
		return "Book [bookId=" + bookId + ", bookName=" + bookName + ", bookDescription=" + bookDescription
				+ ", category=" + Arrays.toString(category) + ", costUSD=" + costUSD + ", Author=" + Author
				+ ", imgURL=" + imgURL + "]";
	}
	
	
	
	
	
	
	

	
	
	
	
	

}
