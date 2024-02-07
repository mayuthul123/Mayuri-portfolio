import React from 'react'
import {Button } from 'react-bootstrap';
const CardButton = (props) => {
  return ( 
   
    <Button variant="primary" onClick={props.onClick}>{props.value}</Button>  
   
  )
}

export default CardButton
