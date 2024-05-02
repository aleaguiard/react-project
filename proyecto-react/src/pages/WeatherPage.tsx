import React, { useState } from 'react';
import WeatherDisplay from '../components/WeatherInfo/WeatherDisplay';
import WeatherSearch from '../components/WeatherInfo/WeatherSearch';
import Navigation from '../components/Navigation/Navigation';
import WeatherData from '../types/IWeatherData';
import { WeatherPageProps } from '../types/IWeatherPageProps';
// import toast, { Toaster } from 'react-hot-toast';

const WeatherPage: React.FC<WeatherPageProps> = ({
    weatherService,
    imageService,
}) => {
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
                // toast.error('Ciudad no encontrada');
            } finally {
                setIsLoading(false);
            }
        } else {
            // toast.error('Introduce el nombre de una ciudad');
        }
    };

    return (
        <div>
            {/* <Toaster /> */}
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
