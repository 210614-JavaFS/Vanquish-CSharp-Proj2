import React, { useState } from 'react'
import { apiGetBooks } from '../remote/bookApi'

export default class Books {
    constructor(
        public title: string,
        // public list_name,
        // public published_date,
        // public description,
        // public publisher,
        public rank: string,
        public primary_isbn13: string,
        public publisher: string,
        public description: string,
        public author: string,
        public book_image: string,
        public isbns: [{}]
        // public types:{type:{}}[]
    ) { }
}



// export const BooksView = () => {

//     const[books:Promise<BookApiResponse>,setBooks]=useState([]);
//     setBooks(apiGetBooks);
//     return (
//         <div>
//             {books.map(book=>{
//                 return (<div className="" key={book.rank}>

//                     </div>)
//             })}
//         </div>
//     )
// }
