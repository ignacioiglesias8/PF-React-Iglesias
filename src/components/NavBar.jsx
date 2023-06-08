import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget";
import logo from '../assets/img/logo.png';
import {NavLink, Link} from 'react-router-dom'

const NavBar = () => {
    return (
    <Navbar className="navBar" id="top">
        <Container>
        <Navbar.Brand href="/" id="navBrand"><img src={logo} alt="Main Logo" id="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link className="navLink"><Link to='/excursiones'>Excursiones</Link></Nav.Link>
            <NavDropdown title="Categorias" className="basic-nav-dropdown">
                <NavDropdown.Item className="navItem" href="#action/3.1"><NavLink to={`/subcategoria/Valle`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Valle</NavLink></NavDropdown.Item>
                <NavDropdown.Item className="navItem" href="#action/3.2"><NavLink to={`/subcategoria/Quebrada`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Quebrada</NavLink></NavDropdown.Item>
                <NavDropdown.Item className="navItem" href="#action/3.3"><NavLink to={`/subcategoria/Yungas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Yungas</NavLink></NavDropdown.Item>
                <NavDropdown.Item className="navItem" href="#action/3.4"><NavLink to={`/subcategoria/Puna`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Puna</NavLink></NavDropdown.Item>
                <NavDropdown title="Exterior" className="basic-nav-dropdown" id="submenu">
                    <NavDropdown.Item className="navItem" href="#action/2.1"><NavLink to={`/subcategoria/Bolivia`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Bolivia</NavLink></NavDropdown.Item>
                    <NavDropdown.Item className="navItem" href="#action/2.2"><NavLink to={`/subcategoria/Chile`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Chile</NavLink></NavDropdown.Item>
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
