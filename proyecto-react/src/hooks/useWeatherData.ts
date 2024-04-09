import { useState } from 'react';
import axios from 'axios';
import WeatherData from '../types/IWeatherData';

const useWeatherData = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    const fetchWeatherData = async () => {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_WEATHER_API_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=es`,
            );
            setWeatherData(response.data);
        } catch (error) {
            console.error('Error al obtener los datos del clima:', error);
        }
    };

    const handleCityChange = (newCity: string) => {
        setCity(newCity);
    };

    const handleButtonClick = () => {
        if (city !== '') {
            fetchWeatherData();
        }
    };

    return { city, weatherData, handleCityChange, handleButtonClick };
};

export default useWeatherData;
