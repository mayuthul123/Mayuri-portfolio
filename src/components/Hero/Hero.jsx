import React from 'react';
import styles from './Hero.module.css';
import stylesApp from "../../App.module.css";
import {getImageUrl} from "../../utils";

import { Image, Button } from 'react-bootstrap';

export const Hero = () => {
  return ( 
     <section className={styles.container}> 
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Mayuri</h1>
        <p className={styles.description}>
        I am committed to delivering exceptional user experiences through a combination of technical expertise and creative problem-solving. 
        Whether it's building from scratch, optimizing existing projects, or diving into the world of AWS, I am ready to contribute to your next project.
        </p>
        <p>Feel free to explore my portfolio to witness the fusion of technology and design. Let's connect and turn your ideas into digital reality!</p>
        <Button href="mailto:myemail@email.com">Contact Me</Button>
      </div>
      <Image className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" />
      <div className={stylesApp.topBlur} />
    
    </section> 
  )
}
 
 

