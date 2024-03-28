// WeatherComponent.js
import React, { useState } from 'react';
import './WeatherComponent.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

const API_KEY = '2b60d418053e4e05af291eaae9165dc6';

function WeatherComponent() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeatherData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error('Network response - Try Again');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
// When User Click - if there is an input then return fetch data
  const handleButtonClick = () => {
    if (city) {
      fetchWeatherData();
    }
  };
// Updates the city state with the value of input
  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className="weather-container">
        <div className='weather-item'>
        
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleInputChange}
        />
        <button className="button-85" role="button" onClick={handleButtonClick}><FontAwesomeIcon className='icon-button'icon={faMagnifyingGlass} /></button>
        {loading && <div>Loading...</div>}
        {error && <div className='Error'>Error: {error}</div>}
        {weatherData && (
          <div className='weather-data'>
            <h3>Weather in {weatherData.name}</h3>
            <p>Temperature: {weatherData.main.temp} °C</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Wind Speed: {weatherData.wind.speed} m/s </p>
            <p>Feels like: {weatherData.main.feels_like}°C</p>
            <p>Description: {weatherData.weather[0].description}</p>
            
            {console.log(weatherData)}
          </div>
        )}
        </div>
        {/* Second Card */}
        <div className='weather-item'></div>
        <div className='weather-item'></div>
        
    </div>
  ); }

export default WeatherComponent;
        