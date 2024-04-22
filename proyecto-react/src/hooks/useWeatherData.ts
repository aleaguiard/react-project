import { useState } from 'react';
import WeatherData from '../types/IWeatherData';
import 'react-toastify/dist/ReactToastify.css';
import { Service } from '../api/Interfaces/IService';

const useWeatherData = (weatherService: Service<WeatherData>) => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

    const fetchWeatherData = async () => {
        try {
            const response = await weatherService.fetch(`?q=${city}`);
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
