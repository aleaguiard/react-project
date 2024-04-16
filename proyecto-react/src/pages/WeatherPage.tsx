import React from 'react';
import useWeatherData from '../hooks/useWeatherData';
import Button from '../components/Button/Button';
import Navigation from '../components/Navigation/Navigation';
import { AxiosHttpClient } from '../api/AxiosHttpClient';
import { ToastContainer } from 'react-toastify';
import { WeatherApi } from '../api/WeatherApi';

const WeatherPage: React.FC = () => {
    const urlApi = import.meta.env.VITE_WEATHER_API_URL;
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const httpClient = new AxiosHttpClient(urlApi, apiKey);
    const weatherService = new WeatherApi(httpClient);

    const { city, weatherData, handleCityChange, handleButtonClick } =
        useWeatherData(weatherService);

    return (
        <div>
            <h1>Tiempo actual</h1>
            <div className="input-container">
                <input
                    className="input-field"
                    type="text"
                    placeholder="Nombre de la ciudad"
                    value={city}
                    onChange={(e) => handleCityChange(e.target.value)}
                />
                <ToastContainer />
            </div>
            <Button onClick={handleButtonClick}>Clima</Button>
            <br />
            {weatherData ? (
                <div>
                    <h2>{weatherData.name}</h2>
                    <p>Temperatura: {weatherData.main.temp.toFixed(0)}°C</p>
                    <p>Descripción: {weatherData.weather[0].description}</p>
                </div>
            ) : null}
            <br />
            <Navigation currentPage="/weather" />
        </div>
    );
};

export default WeatherPage;
