import React from 'react'
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import Card from 'react-bootstrap/Card';
 
import { Image, Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

function ProjectCard({
    project: {title,imageSrc,description,skills,demo,source},
}) {
  return (
   
    <Card className={styles.cardContainer}>
      <Image variant="top" src={getImageUrl(imageSrc)} className={styles.image} />
      <Card.Body className={styles.cardbody}>
        <Card.Title className={styles.title}> {title} </Card.Title>
        <Card.Text className={styles.description}>
           {description}
        </Card.Text>
      </Card.Body>
      <ListGroup className={`list-group-flush ${styles.skills}`}>
        {skills.map( (skilltag,id) =>{
          return <ListGroup.Item key={id}> {skilltag} </ListGroup.Item>
        })}
      </ListGroup>
      <Card.Body className={styles.linkbutn} >
        <Button href={demo} target='_blank'>Demo</Button>
        <Button href={source}>Source </Button>
      </Card.Body>
    </Card> 
 
  )
}

export default ProjectCard
