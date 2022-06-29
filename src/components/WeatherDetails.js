import {  useEffect, useState } from "react";
const axios = require('axios');

async function getWeatherData(city) {
    try{
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid=2c8d07a872803f8287189b1366f2dda6');
        return response.data;
    }catch(error) {
        return {};
    }
    
}

function WeatherDetails(props) {
    const [weatherData, setWeatherData] = useState({});

    useEffect(() => {
        async function fetchData(){
            if(props.city){
                var data = await getWeatherData(props.city)
                console.log(data)
                if(data.main){
                    setWeatherData(data.main)
                }
            }
        }
        fetchData();
      },[props.city]);
    return (
        <>
        <h6 className="mt-4">{props.city}</h6>
        <div><b>Temp:</b> {weatherData.temp}</div>
        <div><b>Feels Like:</b> {weatherData.feels_like}</div>
        <div><b>Temp Min:</b> {weatherData.temp_min}</div>
        <div><b>Temp Max:</b> {weatherData.temp_max}</div>
        <div><b>Pressure:</b> {weatherData.pressure}</div>
        <div><b>Humidity:</b> {weatherData.humidity}</div>
        </>

    )
}

export default WeatherDetails;
