import React from 'react';
import "../styles/Navigation.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../assets/RM.png";
import Home from "../assets/home.svg";
import Folder from "../assets/folder.svg";
import Skills from "../assets/skills.svg";
import Phone from "../assets/phone.svg";
import {Link} from "react-router-dom"
import { NavHashLink } from 'react-router-hash-link';




function Navigation() {
  return (
    <div className="main-nav-cntr">
    <div className="logo-container">
      <img src={Logo} alt="logo" className="myLogo"/>
      </div>
    <Navbar expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-links m-auto sticky-top" >
            <Link to="/" className="link-item"><img src={Home} alt="home-icon" className="menu-icon"/>Home</Link>
            <NavHashLink to="/#skills" className="link-item"><img src={Skills} alt="skills-icon" className="menu-icon"/> Skills</NavHashLink>
            <NavHashLink to="/#projects" className="link-item"><img src={Folder} alt="folder-icon" className="menu-icon"/> Projects</NavHashLink>
            <Link to="#contact" className="link-item"><img src={Phone} alt="phone-icon" className="menu-icon"/>Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Navigation;