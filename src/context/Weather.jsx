import { createContext, useContext, useState } from "react";
import { getWeatherCity , getWeatherLocation } from "../data/weatherApi";

const WeatherContext = createContext(null);

export const useWeather = () =>
{
    return useContext(WeatherContext);
}

export const WeatherProvider = (props) =>{

    const[data,setData] = useState(null);
    const[searchCity,setSearchCity] = useState(null);

    const fetchCity = async() =>
    {
         const response = await getWeatherCity(searchCity);
         setData(response);
    }

    const fetchCurrentUserLocationData = () =>{
       navigator.geolocation.getCurrentPosition( (position) =>{
          console.log("position",position);
          getWeatherLocation (position.coords.latitude,position.coords.longitude).then(data => setData(data)) 
       })
    }
     return(
        <WeatherContext.Provider value={{data,searchCity, setSearchCity,fetchCity,fetchCurrentUserLocationData}}>
            {props.children}
        </WeatherContext.Provider>
     )
}