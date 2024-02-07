import React, { useEffect } from 'react'
import CardBox from './Card';
import styles from './Weather.module.css';
import CardButton from './Button';
import { Row , Col } from 'react-bootstrap';
import { useWeather } from '../../context/Weather';

const Weather = () => {

  const weather = useWeather();
  console.log("weather",weather);
 
  useEffect(() => {
    // to get user location 
    weather.fetchCurrentUserLocationData();
  
  },[])

  return (
    <section className={styles.container} id='weather'> 
    <div className={styles.title}> Know Weather </div>
    <Row className={styles.rowInput}> 
      <Col xs={6} className={styles.colInput}> 
        <input
          className={styles.inputfield}
          type='text' 
          placeholder="Search City"
          value={weather.searchCity}
          onChange={ (e)=> { weather.setSearchCity(e.target.value)}}>  
        </input>
        <CardButton onClick={weather.fetchCity} value="Search"/>

          {/* display card below */}
          <CardBox/>

        </Col>
      </Row>
    </section>
  )
}

export default Weather
