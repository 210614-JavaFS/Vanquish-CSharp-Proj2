import axios from 'axios';
import React, { useState } from 'react'

interface Props {

}

const EditBook = (props: Props) => {
    const [bookId, setbookId] = useState("");
    const [bookAuthor, setBookAuthor] = useState("");
    const [bookDescription, setBookDescription] = useState("");
    const [bookName, setbookName] = useState("");
    const [bookStockQuantity, setbookStockQuantity] = useState("");
    const [costUSD, setcostUSD] = useState("");
    const [imgURL, setimgURL] = useState("");
    const [bookCategory, setbookCategory] = useState("");

    const URL = "http://localhost:8080/bookstore/admin/updatebook";

    async function updateHandler() {
        const request = await axios.put(URL, {
            bookId,
            bookName,
            author: bookAuthor,
            bookDescription,
            bookStockQuantity,
            costUSD,
            imgURL,
            bookCategory
        })
            .then(
                (response) => { console.log(response); }
            )
    }


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-6">

                    <div className="modal-content extra-box-space transparent-nav" >
                        <div className="d-flex justify-content-center modal-header">
                            <h1 className="font-caps">Edit Book Page</h1>
                        </div>

                        <div className="">
                            <label style={{ width: "200px" }} htmlFor="bookId">Enter Book Id:</label>

                            <input type="number" id="bookId" name="bookId" onChange={(e) => { setbookId(e.target.value) }} />
                        </div>

                        <div className="">
                            <label style={{ width: "200px" }} htmlFor="Author">Enter Book Author:</label>

                            <input type="text" id="Author" name="Author" onChange={(e) => setBookAuthor(e.target.value)} />
                        </div>

                        <div className="">
                            <label style={{ width: "200px" }} htmlFor="Description">Enter Book Description:</label>

                            <input type="text" id="Description" name="Description" onChange={(e) => { setBookDescription(e.target.value) }} />
                        </div>

                        <div className="">
                            <label style={{ width: "200px" }} htmlFor="Title">Enter Book Title:</label>

                            <input type="text" id="Title" name="Title" onChange={(e) => { setbookName(e.target.value) }} />
                        </div>

                        <div className="">
                            <label style={{ width: "200px" }} htmlFor="Quantity">Enter Book Quantity:</label>

                            <input type="number" id="Quantity" name="Quantity" onChange={(e) => { setbookStockQuantity(e.target.value) }} />
                        </div>

                        <div className="">
                            <label style={{ width: "200px" }} htmlFor="Cost">Enter Book Cost:</label>

                            <input type="text" id="Cost" name="Cost" onChange={(e) => { setcostUSD(e.target.value) }} />
                        </div>


                        <div className="">
                            <label style={{ width: "200px" }} htmlFor="Image">Enter Book Image Url:</label>

                            <input type="text" id="Image" name="Image" onChange={(e) => { setimgURL(e.target.value) }} />
                        </div>

                        <div className="aligntext">
                            <input type="radio" id="fiction" name="fiction" value="fiction" onChange={(e) => { setbookCategory(e.target.value) }} />
                            <label style={{ width: "100px" }} htmlFor="fiction">FICTION</label> <br></br>

                            <input type="radio" id="non_fiction" name="non_fiction" value="non_fiction" onChange={(e) => { setbookCategory(e.target.value) }} />
                            <label style={{ width: "100px" }} htmlFor="non_fiction">NON FICTION</label>
                        </div>

                        <button className="btn btn-primary" onClick={updateHandler}   >Submit</button>

                    </div>
                </div>
                <div className="col-sm-3"></div>
            </div>
           


            

            {/* onClick={() => console.log(bookDescription)}  onClick={submitHandler} */}

        </div>
    )
}

export default EditBook
