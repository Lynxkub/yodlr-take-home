import React from 'react';
import {NavLink} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const NavBar = () => {
  return (
    <div>
      <Navbar bg='light'>
        <Container>
      <Nav defaultActiveKey='/' >
        <Nav.Item >
    <Nav.Link href='/'>
        Home
    </Nav.Link>
    </Nav.Item>
    <Nav.Item >
    <Nav.Link href='/signup'>
        Sign Up
    </Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <Nav.Link href='/users'>
        Users
    </Nav.Link>
    </Nav.Item>
    </Nav>
    </Container>
    </Navbar>
    </div>
  )
}


export default NavBar;