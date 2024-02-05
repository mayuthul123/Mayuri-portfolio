import React from 'react';
import styles from "./Experience.module.css";
// import stylesApp from "../../App.module.css";
// import Container from 'react-bootstrap/Container'; 
import { Image } from 'react-bootstrap';

import {getImageUrl} from "../../utils"; 

import skills from "../../data/skill.json";
import experience from "../../data/experience.json";

const Experience = () => {
  return (
    <section className={styles.container} id="experience">
    <h2 className={styles.title}>Experience</h2>
    <div className={styles.content}>
      <div className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          );
        })}
      </div>
      <ul className={styles.history}>
        {experience.map((historyItem, id) => {
          return (
            <li key={id} className={styles.historyItem}>
              <Image
                src={getImageUrl(historyItem.imageSrc)}
                alt={`${historyItem.organisation} Logo`}
              />
              <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul>
                  {historyItem.experiences.map((experience, id) => {
                    return <li key={id}>{experience}</li>;
                  })}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
  )
}

export default Experience
