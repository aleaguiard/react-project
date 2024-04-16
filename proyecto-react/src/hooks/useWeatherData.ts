import { useState } from 'react';
import WeatherData from '../types/IWeatherData';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ApiKeys } from '../types/IApiKeys';
import { HttpClient } from '../types/IHttpClient';
import axios from 'axios';

const useWeatherData = (httpClient: HttpClient, apiKeys: ApiKeys) => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

    const fetchWeatherData = async () => {
        try {
            const response = await httpClient.get(
                `${import.meta.env.VITE_WEATHER_API_URL}?q=${city}&appid=${apiKeys.weatherApiKey}&units=metric&lang=es`,
            );
            setWeatherData(response.data || null);
        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.status === 404) {
                console.error('Ciudad no encontrada:', error);
                toast.error('Ciudad no encontrada', { position: 'top-center' });
            } else {
                toast.error('Error al obtener los datos del clima.', {
                    position: 'top-center',
                }); // Cierre de paréntesis añadido
            }
        } // Cierre de paréntesis añadido
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
