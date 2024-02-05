import React from "react";
import stylesApp from "../../App.module.css";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

const Contact = () => {
  return (
    <div id="contact" className={styles.container}>
      <div className={styles.contactCon}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:mayuthul288@email.com">mayuthul288@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/mayuri-munge-9614a864/">linkedin.com/mayuri-munge</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/mayuthul123">github.com/mayuthul123</a>
        </li>
      </ul>
      </div>
      <div className={stylesApp.topBlur} />
      
    </div>
  );
};

export default Contact