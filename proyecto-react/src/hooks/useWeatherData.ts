import { useState } from 'react';
import WeatherData from '../types/IWeatherData';
import 'react-toastify/dist/ReactToastify.css';
import { WeatherService } from '../api/WeatherAPI/IWeatherService';

const useWeatherData = (weatherService: WeatherService) => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

    const fetchWeatherData = async () => {
        try {
            const response = await weatherService.fetchWeather(city);
            setWeatherData(response);
        } catch (error) {
            console.error('Error al obtener los datos del clima:', error);
        }
    };

    const handleButtonClick = () => {
        if (city.trim() !== '') {
            fetchWeatherData();
        }
    };

    const handleCityChange = (newCity: string) => {
        setCity(newCity);
    };

    return { city, weatherData, handleCityChange, handleButtonClick };
};

export default useWeatherData;
