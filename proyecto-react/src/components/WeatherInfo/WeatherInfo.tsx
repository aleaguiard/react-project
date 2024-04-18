import React from 'react';
import WeatherData from '../../types/IWeatherData';

const WeatherInfo: React.FC<{ weatherData: WeatherData }> = ({
    weatherData,
}) => {
    const getWeatherIconURL = (weatherCode: string) => {
        return `https://openweathermap.org/img/wn/${weatherCode}.png`;
    };

    return (
        <div className="weather-info">
            <h2>{weatherData.name}</h2>
            <p>Temperatura: {weatherData.main.temp.toFixed(0)}°C</p>
            <div>
                <p className="weather-description">
                    Descripción: {weatherData.weather[0].description}
                </p>
                <img
                    className="weather-image"
                    src={getWeatherIconURL(weatherData.weather[0].icon)}
                    alt="Icono del clima"
                />
            </div>
        </div>
    );
};

export default WeatherInfo;
