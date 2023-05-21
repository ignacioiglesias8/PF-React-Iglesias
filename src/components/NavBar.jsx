import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
    <Navbar className="navBar">
        <Container>
        <Navbar.Brand id="navBrand">Warmi Sumaj tours</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link id="navLink" href="#home">Home</Nav.Link>
            <Nav.Link id="navLink" href="#link">Excursiones</Nav.Link>
            <NavDropdown title="Categorias" id="navLink" className="basic-nav-dropdown navLink">
                <NavDropdown.Item className="navItem" href="#action/3.1">Valle</NavDropdown.Item>
                <NavDropdown.Item className="navItem" href="#action/3.2">Quebrada</NavDropdown.Item>
                <NavDropdown.Item className="navItem" href="#action/3.3">Yungas</NavDropdown.Item>
                <NavDropdown.Item className="navItem" href="#action/3.4">Puna</NavDropdown.Item>
                <NavDropdown title="Exterior" id="navLink" className="basic-nav-dropdown">
                    <NavDropdown.Item className="navItem" href="#action/2.1">Tarija</NavDropdown.Item>
                    <NavDropdown.Item className="navItem" href="#action/2.2">Atacama</NavDropdown.Item>
                    </NavDropdown>
            </NavDropdown>
            </Nav>
            <CartWidget />
        </Navbar.Collapse>
        </Container>
    </Navbar>
);
};

export default NavBar;
