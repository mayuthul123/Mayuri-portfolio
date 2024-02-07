import React , {useEffect, useState} from 'react'

import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import styles from "./Navbar.module.css"
import {getImageUrl} from '../../utils'

import { Routes, Route, Link } from 'react-router-dom';
 
import About from "../About/About";
import { Hero } from '../Hero/Hero';
import Project from '../Project/Project';
import Contact from '../Contact/Contact';
import Experience from '../Experience/Experience';
import Weather from '../Weather/Weather';
export const NavBar = () => {

  const [isSticky, setIsSticky] = useState(false);
  useEffect(()=>{
    const handlescroll = () =>{
     (window.scrollY > 50) ? setIsSticky(true) : setIsSticky(false), setExpanded(false);
    };
    window.addEventListener('scroll', handlescroll);
    return () => {
      window.removeEventListener('scroll', handlescroll);
    };
  },[])


  const [expanded, setExpanded] = useState(false);
  const closeNavbar = () => {
    setExpanded(false);
  };

  return (
    <div>
      <Navbar expanded={expanded} onToggle={setExpanded} sticky="top" style={{ backgroundColor: isSticky ? '#102745' : '' }} variant="dark" expand="lg">
        <Container>
          
          {/* Logo */}
          <Navbar.Brand href="#home" className={styles.title}> 
            <Link className={styles.title} to={"/"}  onClick={closeNavbar}> Portfolio </Link> 
          </Navbar.Brand> 

          {/* links */}
          <div expand="lg"> 

          {/* Toggle in mobile */}
          <Navbar.Toggle  aria-controls="basic-navbar-nav" className={styles.menuBtn} src={getImageUrl('nav/menu-mob.png')} alt="menu" />
          <Navbar.Collapse  id="basic-navbar-nav" className={styles.menu}>
            <Nav className={"mr-auto " + styles.menuItems} > 
              {/* <Nav.Link href="#about-us">About </Nav.Link> 
              <Nav.Link href="#about-us">Experience</Nav.Link>
              <Nav.Link href="#about-us">Project</Nav.Link>
              <Nav.Link href="#contact-us">Contact</Nav.Link> */}  
     
            <Nav><Link to={"/about"} onClick={closeNavbar}> About </Link></Nav>
            <Nav><Link to={"/experience"} onClick={closeNavbar}>Experience</Link></Nav>
            <Nav><Link to={"/projects"} onClick={closeNavbar}> Projects </Link></Nav>
            <Nav><Link to={"/contact"} onClick={closeNavbar}> Contact </Link></Nav>

            </Nav>
          </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
      <Routes>
          <Route element={<Hero />} path="/" />  
          <Route element={<About />} path="/about" /> 
          <Route element={<Experience />} path="/experience" /> 
          <Route element={<Project />} path="/projects" /> 
          <Route element={<Contact />} path="/contact" /> 
          <Route element={<Weather/>} path='/weather'/>
      </Routes> 
    </div>
  )
};

 
