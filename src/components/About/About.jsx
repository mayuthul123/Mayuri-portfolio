import React , {useState} from 'react'

import styles from './About.module.css';
import stylesApp from "../../App.module.css";
import {getImageUrl} from "../../utils";

import { Image, Button } from 'react-bootstrap';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import aboutContent from '../../data/aboutContent.json';

const About = () => {
 
    const [expandedSection, setExpandedSection] = useState(null);

    const handleReadMoreClick = (index) => {
      setExpandedSection(index === expandedSection ? null : index);
    };
    
  return (
    <section className={styles.container}> 
     <Container>
      <Row>
        <Col className={styles.title}> Know Me </Col>  
      </Row>
      <Row> 
        <Col className={styles.content}> 
        <ul className={styles.aboutItems}>
        {aboutContent.sections.map((section, index) => (
            <li key={index} className={styles.aboutItem}>
              <div className={styles.aboutItemText}>
                <h3>{section.title}</h3>
                <div> {expandedSection === index ? 
                      (
                        <>
                          <ul className={styles.listing}>
                            {section.content.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <span>{item.topic}:</span> {item.description}
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : 
                      (
                        <p>
                         {section.paragraph}
                        </p>
                      )
                  }
                </div>
                <Button className={styles.readMore} variant="primary" onClick={() => handleReadMoreClick(index)}>
                  {expandedSection === index ? 'Less' : 'Read More...'}
                </Button>
              </div>
            </li>
        ))}
        </ul> 
        </Col>
      </Row> 
    </Container>
      <div className={stylesApp.topBlur} />
      
    </section> 
  )
}

export default About
