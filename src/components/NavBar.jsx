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
            <Link to='/excursiones' className="nav-link">Excursiones</Link>            
            <NavDropdown title="Categorias" className="basic-nav-dropdown">
                <NavLink to={`/subcategoria/Valle`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Valle</NavLink>
                <NavLink to={`/subcategoria/Quebrada`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Quebrada</NavLink>
                <NavLink to={`/subcategoria/Yungas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Yungas</NavLink>
                <NavLink to={`/subcategoria/Puna`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Puna</NavLink>
                <NavDropdown title="Exterior" className="basic-nav-dropdown" id="submenu">
                    <NavLink to={`/subcategoria/Bolivia`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Bolivia</NavLink>
                    <NavLink to={`/subcategoria/Chile`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Chile</NavLink>
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
