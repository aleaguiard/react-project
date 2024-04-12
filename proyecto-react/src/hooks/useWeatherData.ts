import { useState } from 'react';
import axios from 'axios';
import WeatherData from '../types/IWeatherData';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useWeatherData = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    // En tu hook useWeatherData
    const fetchWeatherData = async () => {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_WEATHER_API_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=es`,
            );
            setWeatherData(response.data || null);
        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.status === 404) {
                console.error('Ciudad no encontrada:', error);
                toast.error('Ciudad no encontrada', { position: 'top-center' });
            } else {
                toast.error('Error al obtener los datos del clima.', {
                    position: 'top-center',
                });
            }
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
