import React from 'react';
import useWeatherData from '../hooks/useWeatherData';
import Button from '../components/Button/Button';
import Navigation from '../components/Navigation/Navigation';
import { ToastContainer } from 'react-toastify';
import { AxiosHttpClient } from '../api/WeatherAPI/AxiosHttpClient';
import { WeatherApi } from '../api/WeatherAPI/WeatherApi';
import WeatherInfo from '../components/WeatherInfo/WeatherInfo';
import useCityImage from '../hooks/useImageData';

const WeatherPage: React.FC = () => {
    const urlApiWeather = import.meta.env.VITE_WEATHER_API_URL;
    const apiKeyWeather = import.meta.env.VITE_WEATHER_API_KEY;
    const urlApiImage = import.meta.env.VITE_IMAGE_API_URL;
    const apiKeyImage = import.meta.env.VITE_IMAGE_API_KEY;

    const httpClient = new AxiosHttpClient(urlApiWeather, apiKeyWeather);
    const weatherService = new WeatherApi(httpClient);

    const { city, weatherData, handleCityChange, handleButtonClick } =
        useWeatherData(weatherService);
    const { cityImage, description, isLoading } = useCityImage(
        city,
        urlApiImage,
        apiKeyImage,
    );

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
            <br />
            {isLoading ? (
                <p>Cargando imagen...</p>
            ) : cityImage ? (
                <>
                    <img src={cityImage} alt={description || 'City'} />
                    {weatherData ? (
                        <WeatherInfo weatherData={weatherData} />
                    ) : (
                        <p>Cargando información del clima...</p>
                    )}
                </>
            ) : null}
            <br />
            <Navigation currentPage="/weather" />
        </div>
    );
};

export default WeatherPage;
