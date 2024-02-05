
import React from 'react';
import styles from './App.module.css';

import {NavBar} from "./components/Navbar/Navbar";
import {Hero} from "./components/Hero/Hero";
import About from './components/About/About';
import Project from './components/Project/Project';
import Contact from "./components/Contact/Contact";
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
// import stylesApp from "./App.module.css";

function App() { 
  return (
    <>
      <div className={styles.App}> 
        <NavBar>  
          <Hero/> 
          <About/>  
          <Experience/>  
          <Project/>
          <Contact/> 
          {/* <div className={stylesApp.topBlur} />*/}
     
        </NavBar>
        {/* <Footer/> */}
      </div>
    </>
  )
}

export default App
