import React, { useState } from 'react';
import Navigation from '../components/Navigation/Navigation';
import { AxiosHttpClient } from '../api/WeatherAPI/AxiosHttpClient';
import { WeatherApi } from '../api/WeatherAPI/WeatherApi';
import { ImageHttpClient } from '../api/ImageAPI/ImageHttpClient';
import { ImageApi } from '../api/ImageAPI/ImageApi';
import WeatherData from '../types/IWeatherData';
import WeatherDisplay from '../components/WeatherInfo/WeatherDisplay';
import WeatherSearch from '../components/WeatherInfo/WeatherSearch';
import toast, { Toaster } from 'react-hot-toast';
import { Service } from '../api/Interfaces/IService';
import { UnsplashPhotoResponse } from '../types/IUnsplashphoto';

const WeatherPage: React.FC = () => {
    const urlApiWeather = import.meta.env.VITE_WEATHER_API_URL;
    const apiKeyWeather = import.meta.env.VITE_WEATHER_API_KEY;
    const urlApiImage = import.meta.env.VITE_IMAGE_API_URL;
    const apiKeyImage = import.meta.env.VITE_IMAGE_API_KEY;

    const httpClientWeather = new AxiosHttpClient(urlApiWeather, apiKeyWeather);
    const weatherService: Service<WeatherData> = new WeatherApi(
        httpClientWeather,
    );

    const httpClientImage = new ImageHttpClient(urlApiImage, apiKeyImage);
    const imageService: Service<UnsplashPhotoResponse> = new ImageApi(
        httpClientImage,
    );

    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [cityImage, setCityImage] = useState<string | null>(null);
    const [description, setDescription] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleButtonClick = async (city: string) => {
        if (city.trim() !== '') {
            try {
                setIsLoading(true);
                const response = await weatherService.fetch(`?q=${city}`);
                setWeatherData(response);

                const { results } = await imageService.fetch(
                    `search/photos?query=${city}`,
                );
                if (results.length > 0) {
                    const randomIndex = Math.floor(Math.random() * 11);

                    const { description, urls } = results[randomIndex];
                    setCityImage(urls.regular);
                    setDescription(description);
                }
            } catch (error) {
                toast.error('Ciudad no encontrada');
            } finally {
                setIsLoading(false);
            }
        } else {
            toast.error('Introduce el nombre de una ciudad');
        }
    };

    return (
        <div>
            <Toaster />
            <h1>Tiempo actual</h1>
            <WeatherSearch
                onButtonClick={handleButtonClick}
                setIsLoading={setIsLoading}
            />
            <WeatherDisplay
                weatherData={weatherData}
                cityImage={cityImage}
                description={description}
                isLoading={isLoading}
            />
            <Navigation currentPage="/weather" />
        </div>
    );
};

export default WeatherPage;
