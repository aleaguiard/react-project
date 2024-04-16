import { useState } from 'react';
import WeatherData from '../types/IWeatherData';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios, { AxiosError } from 'axios';
import { WeatherService } from '../types/IWeatherService';

const useWeatherData = (weatherService: WeatherService) => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

    const fetchWeatherData = async () => {
        try {
            const response = await weatherService.fetchWeather(city);
            setWeatherData(response);
        } catch (error) {
            if (
                axios.isAxiosError(error) &&
                (error as AxiosError).response?.status === 404
            ) {
                console.error('Ciudad no encontrada:', error);
                toast.error('Ciudad no encontrada', { position: 'top-center' });
            } else {
                console.error('Error al obtener los datos del clima:', error);
                toast.error('Error al obtener los datos del clima', {
                    position: 'top-center',
                });
            }
        }
    };

    const handleButtonClick = () => {
        if (city.trim() !== '') {
            fetchWeatherData();
        } else {
            toast.error('Por favor ingrese el nombre de la ciudad', {
                position: 'top-center',
            });
        }
    };

    const handleCityChange = (newCity: string) => {
        setCity(newCity);
    };

    return { city, weatherData, handleCityChange, handleButtonClick };
};

export default useWeatherData;
