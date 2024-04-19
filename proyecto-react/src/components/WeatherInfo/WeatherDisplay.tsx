import React from 'react';
import WeatherData from '../../types/IWeatherData';
import WeatherInfo from './WeatherInfo';

interface WeatherDisplayProps {
    weatherData: WeatherData | null;
    cityImage: string | null;
    description: string | null;
    isLoading: boolean;
}

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
                                    className="imageCity"
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
