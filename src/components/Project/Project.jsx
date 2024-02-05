import React from 'react'

import styles from './Project.module.css';
import stylesApp from "../../App.module.css";

import ProjectCard from './ProjectCard';

import project from "../../data/projects.json"

const Project = () => {
  return (
    <section className={styles.container} id='projects'> 
      <div className={styles.title}>Projects</div>
      <div className={styles.projects}>
        {project.map((proCard, id) =>
        {  
         return <ProjectCard className={styles.porjectCard} key={id} project={proCard}/> 
        })} 
      </div> 
    <div className={stylesApp.topBlur} /> 
  </section> 
  )
}

export default Project
