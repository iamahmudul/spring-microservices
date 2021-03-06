import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    <NavLink to="/" className="brandLink">Office</NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink to="/employers" className="headerLinks">Employer</NavLink>
                    <NavLink to="/departments" className="headerLinks">Department</NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;