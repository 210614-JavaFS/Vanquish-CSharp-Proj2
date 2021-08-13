import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Books from '../models/Books';
import { BookApiResponse } from '../remote/bookApi';
import booksClient from '../remote/BooksClient';

// type Props = {
//     title: string,
//     rank: string,
//     primary_isbn13: string,
//     publisher: string,
//     description: string,
//     author: string,
//     book_image: string,
//     isbns: [{}]
// }

type Props = {
    getRate: number
}

const GetBooks: React.FC<Props> = ({ getRate }) => {
    const [books, setBooks] = useState<[]>([]);
    const baseURL = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=";
    const KEY1 = "wfShq9i9bbJXOyQzHxUKg1FCSftgjdjn";

    useEffect(() => {
        console.log(getRate);
        const abortController = new AbortController();
        const signal = abortController.signal;
        let source = axios.CancelToken.source();

        const fetchBooks = async () => {
            const res = await axios.get(baseURL + KEY1, {
                cancelToken: source.token
            })
            // console.log(res.data.results.books);
            const data = res.data.results.books;
            setBooks(data);

            return () => {
                // abortController.abort();
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

    async function getApiBooks() {

        const baseURL2 = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=";

        const KEY = "wfShq9i9bbJXOyQzHxUKg1FCSftgjdjn";

        let response = await fetch(baseURL2 + KEY)
        // .then(response => response.json())
        // .then(data => {
        //     console.log(data)
        //     setBooks(data)
        // }       // )
        let data = await response.json();
        // console.log(data);


    }

    return (
        <div className="">
            <div className="">
                Books:
            </div>

            <div className="flexwrap justify">
                {books.map((book) => {

                    const { title,
                        rank,
                        primary_isbn13,
                        publisher,
                        description,
                        author,
                        book_image,
                        isbns } = book

                    const usdPrice = rank + 11;
                    const convertedPrice = (getRate * usdPrice).toFixed(2);
                    return (
                        <div className="padding1 " key={rank} style={{
                            width: "350px", height: "620px", border: "1px solid white",
                            margin: "5%",
                            fontSize: "1rem",
                            textAlign: "start",
                            lineHeight: "1.8rem"
                        }}>
                            <div className="" >
                                <div className="flex justify">
                                    <img src={book_image} alt="book_image" style={{ minWidth: "310px", height: "310px" }} />
                                </div>
                                <div className="justify flex" style={{ color: "aqua" }}>
                                    {title}
                                </div>
                                <div className="justify flex">
                                    <hr />
                                </div>
                                <strong>Book rank: </strong>   &nbsp;{rank}
                                <div className="">
                                    <strong>Publisher </strong> :&nbsp;{publisher}
                                </div>
                                <div className="">
                                    <strong>author: </strong>      &nbsp; {author}
                                </div>
                                <div className="textoverflow">
                                    <strong> Description: </strong>    &nbsp; {description}
                                </div>

                                <div className="">
                                    <strong>primary_isbn13:  </strong>   &nbsp; {primary_isbn13}
                                </div>

                                <div className="">
                                    <strong> USD Price:</strong>     &nbsp;${usdPrice}

                                </div>
                                <div className="">
                                    <strong>Converted Price: </strong>
                                    &nbsp;$ <strong style={{ color: "gold" }}> {convertedPrice} </strong>
                                    &nbsp;
                                    <button className="btn btn-primary btn-sm">Add to Cart</button>
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
