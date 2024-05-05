import React from 'react';
import WeatherInfo from './WeatherInfo';
import { WeatherDisplayProps } from '../../types/IWeatherDisplayProps';

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({
    weatherData,
    cityImage,
    description,
    isLoading,
}) => {
    return (
        <div>
            {weatherData && (
                <div className="weather-image-container">
                    <WeatherInfo weatherData={weatherData} />
                    {isLoading ? (
                        <p>Cargando imagen...</p>
                    ) : (
                        cityImage && (
                            <div className="image-container">
                                <img
                                    className="image-city"
                                    src={cityImage}
                                    alt={description || 'Imagen de la ciudad'}
                                />
                            </div>
                        )
                    )}
                </div>
            )}
            <br />
        </div>
    );
};

export default WeatherDisplay;
