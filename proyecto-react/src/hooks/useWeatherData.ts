import { useState } from 'react';
import { Service } from '../api/Interfaces/IService';
import WeatherData from '../types/IWeatherData';

/**
 * Custom React Hook to manage weather data fetching and state.
 * @param weatherService - The weather service instance to fetch weather data.
 * @returns An object containing the current city, weather data, and event handlers.
 */
const useWeatherData = (weatherService: Service<WeatherData>) => {
    const [city, setCity] = useState<string>('');
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

    /**
     * Event handler for fetching weather data when the button is clicked.
     * @param event - The event object from the button click.
     */
    const handleButtonClick = async (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
        event.preventDefault();

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

    /**
     * Event handler for updating the current city.
     * @param newCity - The new city to be searched for weather data.
     */
    const handleCityChange = (newCity: string) => {
        setCity(newCity);
    };

    return { city, weatherData, handleCityChange, handleButtonClick };
};

export default useWeatherData;
