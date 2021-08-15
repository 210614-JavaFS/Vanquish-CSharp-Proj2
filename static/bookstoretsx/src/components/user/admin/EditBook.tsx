import React, { useState } from 'react'

interface Props {

}

const EditBook = (props: Props) => {

    const [bookAuthor, setBookAuthor] = useState("");
    const [bookDescription, setBookDescription] = useState("");
    const [bookName, setbookName] = useState("");
    const [bookStockQuantity, setbookStockQuantity] = useState("");
    const [costUSD, setcostUSD] = useState("");
    const [imgURL, setimgURL] = useState("");
    const [bookCategory, setbookCategory] = useState("");



    return (
        <div className="">
            <div>
                <h1>Update Book Page</h1>
            </div>

            <div className="flex justify margintop ">

                <div className="flexcol justifyaround alignitems" style={{ border: "2px solid black", width: "500px", height: "700px" }}>

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

                    <button className="btn btn-primary" onClick={submitHandler} >Submit</button>

                </div>

            </div>

            {/* onClick={() => console.log(bookDescription)} */}

        </div>
    )
}

export default EditBook
