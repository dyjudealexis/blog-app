import React, { useEffect, useState } from "react";
import "./Navbar.css";
import {Navbar, Nav, Form, FormControl, Button, NavDropdown} from 'react-bootstrap';

function Navbar1() {
  const [loggedIn, setLoggedIn] = useState("");

  useEffect(() => {
    console.log(localStorage.getItem("no_set"));
    setLoggedIn(localStorage.getItem("no_set"));
    console.log(loggedIn);
  }, [localStorage.getItem("no_set")]);

  return (
    //<div className="Navbar">
    //  <a href="/">Home</a>
    //  {loggedIn ? (
    //    <>
    //      <a href="/upload">Upload</a>
    //      <a href="/profile">Profile</a>
    //    </>
    //  ) : (
    //    <>
    //      <a href="/register">Register</a>
    //      <a href="/login">Login</a>
    //    </>
    //  )}
    //</div>

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="nav-1"> 
    <div className="container">
      <Navbar.Brand href="#home">Jaira Blog</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      
      { loggedIn === "1" ? (
        <>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/upload">Post</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Link href="/update">Update</Nav.Link>
          <Nav.Link href="/logout">Logout</Nav.Link>
        </Nav>
        
        </>
      ) :  (
        <>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/register">Register</Nav.Link>
          <Nav.Link href="/chat">Chat</Nav.Link>
        </Nav>
        </>
      
      )}
        
      </Navbar.Collapse>
    </div>
  </Navbar>
  );
}

export default Navbar1;
