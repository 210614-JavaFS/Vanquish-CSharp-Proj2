import React from 'react'
import { Container, Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
// import Book from "../pics/book3.jpg"

export const NavBar = () => {
    return (
        <div >
            <div className="" >
                <div className="awningImage">

                </div>

                <div className="header  " style={{}} >

                    <div className="vanquishbooks flex justify alignitems absolute" >
                        <div className="">
                            {/* <hr></hr>
                            <hr></hr> */}
                        </div>


                        {/* <div className="">
                            <hr></hr>
                            <hr></hr>
                        </div> */}
                    </div>
                    <div className="flex justify " >
                        <div className="headerImage marginbottom " style={{ marginBottom: "" }}>

                        </div>
                    </div>

                </div>
                <div className=" ">
                    <Navbar bg="primary" variant="dark" className="textalign" >
                        <div className="relative flex width80 justifyaround textalign">
                            <Navbar.Brand href="/home">Navbar</Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="#features">Features</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>

                            </Nav>

                            <div className="flex aligncontent alignitems absolutetopmid " style={{ margin: "", color: "#ffc107" }}>
                                <h1>Vanquish Book Store</h1>
                            </div>

                        </div>



                        <Form className="d-flex ">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="mr-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar>


                </div>
            </div>
        </div>
    )
}
