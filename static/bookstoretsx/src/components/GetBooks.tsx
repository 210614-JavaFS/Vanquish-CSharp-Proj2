import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Books from '../models/Books';
import { BookApiResponse } from '../remote/bookApi';
import booksClient from '../remote/BooksClient';

type Props = {
    getRate: number
}

const GetBooks: React.FC<Props> = ({ getRate }) => {
    const [books, setBooks] = useState<[]>([]);
    const baseURL = "http://localhost:8080/bookstore/admin/allbook";


    useEffect(() => {
        console.log(getRate);
        const abortController = new AbortController();
        const signal = abortController.signal;
        let source = axios.CancelToken.source();

        const fetchBooks = async () => {
            const res = await axios.get(baseURL, {
                cancelToken: source.token
            })

            if (res != null) {
                const data = res;
                console.log(data);
                console.log(data.data);
                setBooks(data.data);
            }
            return () => {
                console.log("Cancelling api call");
                source.cancel();
            }

        }
        fetchBooks();
    }, [])

    console.log(books)
    const ApiGetBooks = async (): Promise<BookApiResponse> => {
        const response = await booksClient.get<Books>("");
        console.log(response.data);
        if (response.status === 200) {

            // setBooks(response.data);
            return { status: response.status, payload: response.data }
        }
        if (response.status === 404) {
            return { status: response.status, message: "Failed to retrieve books" }
        }

        return { status: 404, message: "Failed to fetch Book" }
    }

    return (
        <div className="">
            <div className="">
                Books:
            </div>

            <div className="flexwrap justify">
                {books.map((book) => {

                    const {
                        bookId,
                        author,
                        bookCategory,
                        bookDescription,
                        bookName,
                        bookStockQuantity,
                        costUSD,
                        imgURL
                    } = book

                    const usdPrice = costUSD;
                    const convertedPrice = (getRate * costUSD).toFixed(2);

                    async function handleOrderButton() {

                    }
                    return (
                        <div className="padding1 " key={bookId} style={{
                            width: "350px", height: "620px", border: "1px solid white",
                            margin: "5%",
                            fontSize: "1rem",
                            textAlign: "start",
                            lineHeight: "1.8rem"
                        }}>
                            <div className="" >

                                <div className="flex justify">
                                    <img src={imgURL} alt="book_image" style={{ minWidth: "310px", height: "310px" }} />
                                </div>
                                <div className="justify flex" style={{ color: "aqua" }}>
                                    {bookName}
                                </div>
                                <div className="justify flex">
                                    <hr />
                                </div>

                                <div className="">
                                    <strong>author: </strong>      &nbsp; {author}
                                </div>
                                <div className="textoverflow">
                                    <strong> Description: </strong>    &nbsp; {bookDescription}
                                </div>

                                <div className="">
                                    <strong>Catagory:  </strong>   &nbsp; {bookCategory}
                                </div>
                                <div className="">
                                    <strong>Quantity:  </strong>   &nbsp; {bookStockQuantity}
                                </div>

                                <div className="">
                                    <strong> USD Price:</strong>     &nbsp;${usdPrice}

                                </div>
                                <div className="">
                                    <strong>Converted Price: </strong>
                                    &nbsp; <strong style={{ color: "gold" }}> {convertedPrice} </strong>
                                    &nbsp;
                                    <button className="btn btn-primary btn-sm" onClick={handleOrderButton}>Add to Order</button>
                                </div>

                            </div>
                        </div>
                    )
                }
                )}
            </div>


        </div>
    )
}

export default GetBooks
