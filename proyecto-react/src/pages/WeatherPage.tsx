import React, { useState } from 'react';
import Button from '../components/Button/Button';
import Navigation from '../components/Navigation/Navigation';
import { ToastContainer } from 'react-toastify';
import { AxiosHttpClient } from '../api/WeatherAPI/AxiosHttpClient';
import { WeatherApi } from '../api/WeatherAPI/WeatherApi';
import WeatherInfo from '../components/WeatherInfo/WeatherInfo';
import { ImageHttpClient } from '../api/ImageAPI/ImageHttpClient';
import { ImageApi } from '../api/ImageAPI/ImageApi';
import WeatherData from '../types/IWeatherData';

const WeatherPage: React.FC = () => {
    const urlApiWeather = import.meta.env.VITE_WEATHER_API_URL;
    const apiKeyWeather = import.meta.env.VITE_WEATHER_API_KEY;
    const urlApiImage = import.meta.env.VITE_IMAGE_API_URL;
    const apiKeyImage = import.meta.env.VITE_IMAGE_API_KEY;

    const httpClientWeather = new AxiosHttpClient(urlApiWeather, apiKeyWeather);
    const weatherService = new WeatherApi(httpClientWeather);

    const httpClientImage = new ImageHttpClient(urlApiImage, apiKeyImage);
    const imageService = new ImageApi(httpClientImage);

    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [cityImage, setCityImage] = useState<string | null>(null);
    const [description, setDescription] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCity(event.target.value);
    };

    const handleButtonClick = async () => {
        if (city.trim() !== '') {
            try {
                setIsLoading(true);
                const response = await weatherService.fetchWeather(city);
                setWeatherData(response);

                const { results } = await imageService.fetchImage(city);
                if (results.length > 0) {
                    const { description, urls } = results[0];
                    setCityImage(urls.regular);
                    setDescription(description);
                }
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setIsLoading(false);
            }
        } else {
            console.error('Ingrese un nombre de ciudad válido');
        }
    };

    return (
        <div>
            <h1>Tiempo actual</h1>
            <div className="input-container">
                <input
                    className="input-field"
                    type="text"
                    placeholder="Nombre de la ciudad"
                    value={city}
                    onChange={handleCityChange}
                />
                <ToastContainer />
            </div>
            <Button onClick={handleButtonClick}>Clima</Button>
            <br />
            <br />
            {weatherData ? (
                <div className="weather-image-container">
                    <WeatherInfo weatherData={weatherData} />
                    {isLoading ? (
                        <p>Cargando imagen...</p>
                    ) : (
                        cityImage && (
                            <div className="image-container">
                                <img
                                    className="imageCity"
                                    src={cityImage}
                                    alt={description || 'Imagen de la ciudad'}
                                />
                            </div>
                        )
                    )}
                </div>
            ) : null}
            <br />
            <Navigation currentPage="/weather" />
        </div>
    );
};
export default WeatherPage;
