import React from 'react'
import { Image} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardButton from './Button';
import styles from './Weather.module.css';
import { useWeather } from '../../context/Weather';

const CardBox = () => {

  const weather = useWeather();
  // console.log("weather 11",weather);  
    
   const calculateCardClass = () => { 
    const currentTempC = weather?.data?.current?.temp_c; 
    
    if (currentTempC > 25) {
      return styles.hotCard;
    } else if (currentTempC < 17) {
      return styles.normalCard;
    } else if (currentTempC < 0) {
      return styles.snowCard;
    } else {
      return styles.normalCard;
    }
  };

  return (
    <Card className={`${styles.card} ${calculateCardClass()}`}>
      <Image variant="top" style={{ width: '5rem' }}  src={weather?.data?.current?.condition?.icon}/>
      <Card.Body>
        <Card.Title> {weather?.data?.location?.name} , {weather?.data?.location?.region} {" "} {weather?.data?.location?.country}</Card.Title>
        <Card.Text>
        {weather?.data?.current?.temp_c}. C
        </Card.Text>
        <CardButton onClick={weather.fetchCurrentUserLocationData} value="Refresh"/>
      </Card.Body>
    </Card>
  )
}

export default CardBox
