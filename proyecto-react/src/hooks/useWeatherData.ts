import { useState } from 'react';
import { Service } from '../api/Interfaces/IService';
import WeatherData from '../types/IWeatherData';

const useWeatherData = (weatherService: Service<WeatherData>) => {
    const [city, setCity] = useState<string>('');
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

    const handleButtonClick = async () => {
        if (city.trim() !== '') {
            try {
                const response = await weatherService.fetch(`?q=${city}`);
                setWeatherData(response);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        } else {
            console.error('Introduce el nombre de una ciudad');
        }
    };

    const handleCityChange = (newCity: string) => {
        setCity(newCity);
    };

    return { city, weatherData, handleCityChange, handleButtonClick };
};

export default useWeatherData;
