import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function Navigatie(props){
    let showSignLinks = false;
    let showOtherLinks = true;

    if(sessionStorage.getItem("isLoggedIn") === "logged"){
        showSignLinks = true;
        showOtherLinks = false;
    }

    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Aplicație Internship</Navbar.Brand>
                <Navbar.Toggle aria-controls="basix-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/signup" hidden={showSignLinks}>Sign Up</Nav.Link>
                    <Nav.Link href="/signin" hidden={showSignLinks}>Sign In</Nav.Link>
                    <Nav.Link href="/employees" hidden={showOtherLinks}>Employees</Nav.Link>
                    <Nav.Link href="/projects" hidden={showOtherLinks}>Projects</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigatie;