import React from 'react';
import { Link } from 'react-router-dom';


import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function Header(props) {
    return (
		<div className="App">

<Navbar expand="lg" className="navbar-light bg-white py-3">
    <Container className="px-5">
        <Navbar.Brand href="/" className="fw-bolder text-primary">종우의 개발 꾸러미</Navbar.Brand>
        <Navbar.Toggle data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse className="collapse navbar-collapse" id="navbarSupportedContent">
            <Nav className="ms-auto mb-2 mb-lg-0 small fw-bolder">
                <Nav.Link href="/">소개</Nav.Link>
                <Nav.Link href="/#/skills">기술</Nav.Link>
                <Nav.Link href="/#/experience">걸어온 길</Nav.Link>
                <Nav.Link href="/#/projects">산출물</Nav.Link>
                
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>

		</div>
    );
}
 
export default Header;