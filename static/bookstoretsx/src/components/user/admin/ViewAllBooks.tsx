import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from "react-bootstrap";

interface Props {

}

const ViewAllBooks = (props: Props) => {
    const URL = "http://localhost:8080/bookstore/admin/allbook";
    const [books, setBooks] = useState([]);


    useEffect(() => {
        async function getAllBooks() {
            const request = await axios.get(URL)
            // .then(response => {
            console.log(request)

            // });
            const data = await request.data
            console.log(data);
            setBooks(data);
        }

        getAllBooks();
        return () => {

        }
    }, [])


    return (
        <div className="">
            <div className="">
                <h3>View All Book List</h3>
            </div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr className="">
                        <th className="">#ID</th>
                        <th className="">Book Name</th>
                        <th className="">Author</th>
                        <th className="">Description</th>
                        <th className="">Book Type</th>
                        <th className="">Book Price</th>
                        <th className="">#Left in Inventory</th>


                    </tr>
                </thead>
                <tbody id="tableBody">
                    {books.map(book => {
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

                        return (
                            <tr className="" key={bookId} >
                                <td >{bookId}</td>
                                <td >{bookName}</td>
                                <td >{author} </td>
                                <td >{bookDescription}</td>
                                <td >{bookCategory} </td>
                                <td >{costUSD}</td>


                                <td > {bookStockQuantity}</td>


                            </tr>

                        )

                    })}
                </tbody>
            </Table>

        </div>
    )
}

export default ViewAllBooks
