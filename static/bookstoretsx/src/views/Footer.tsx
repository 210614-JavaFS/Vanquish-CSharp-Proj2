import React from 'react';
import { Container, Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';

export const Footer: React.FC<any> = () => {
    return (
        <div className="footer">
            <div className="">
                <Navbar bg="primary" variant="dark" className="" style={{ color: "white" }}>
                    <Container className="justify flex">
                        <h2>Footer</h2>
                        {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav> */}

                    </Container>

                </Navbar>

            </div>

        </div>
    )
}
