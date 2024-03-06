import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/Nav.css';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../store/useTheme';
import logoOrange from '../images/orangeLogo.png';

const NavComponent = () => {

  const { theme, setTheme } = useTheme();
  const [textState, setTextState] = useState(theme);

  const changeThemeColor = () => {
    const text = theme === 'light' ? 'Light' : 'Dark';
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    setTextState(text);
  };  

  return (
    <Navbar collapseOnSelect expand="lg" className="nav">
    <Container>
      <Navbar.Brand as={Link} to={'/'}>
        <img width={100} src={logoOrange} alt={'logo'} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to={'/'} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Inicio</Nav.Link>
          <Nav.Link as={NavLink} to={'/about-me'} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Sobre mí</Nav.Link>
          <Nav.Link as={NavLink} to={'/projects'} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Proyectos</Nav.Link>
          <Nav.Link as={NavLink} to={'/contacts'} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Contactos</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link onClick={changeThemeColor}>{textState}</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavComponent;