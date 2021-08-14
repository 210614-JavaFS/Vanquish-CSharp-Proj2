import React, { useState } from 'react'
import Books from "../models/Books";
import booksClient from '../remote/BooksClient';



export type BookApiSuccess = {
    status: number,
    payload: Books
}

export type BookApiError = {
    status: number,
    message: string;

}

export type BookApiResponse = BookApiSuccess | BookApiError;



// export const BookMapper = () => {
//     const [books, setBooks] = useState([]);
//     let bokapii = ApiGetBooks;
//     console.log(bokapii);
//     return (
//         <div>

//         </div>
//     )
// }