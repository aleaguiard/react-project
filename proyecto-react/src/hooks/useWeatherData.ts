import { useState } from 'react';
import WeatherData from '../types/IWeatherData';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { WeatherService } from '../api/IWeatherService';

const useWeatherData = (weatherService: WeatherService) => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

    const fetchWeatherData = async () => {
        try {
            const response = await weatherService.fetchWeather(city);
            setWeatherData(response);
        } catch (error) {
            toast.error('No se encontró ninguna ciudad con ese nombre', {
                position: 'top-center',
                autoClose: 2000,
            });
            console.error('Error al obtener los datos del clima:', error);
        }
    };

    const handleButtonClick = () => {
        if (city.trim() !== '') {
            fetchWeatherData();
        } else {
            toast.error('Por favor ingrese el nombre de la ciudad', {
                position: 'top-center',
                autoClose: 2000,
            });
        }
    };

    const handleCityChange = (newCity: string) => {
        setCity(newCity);
    };

    return { city, weatherData, handleCityChange, handleButtonClick };
};

export default useWeatherData;
