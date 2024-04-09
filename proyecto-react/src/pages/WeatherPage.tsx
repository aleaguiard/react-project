import Button from '../components/Button/Button';
import Navigation from '../components/Navigation/Navigation';
import useWeatherData from '../hooks/useWeatherData';

const WeatherApp = () => {
    const { city, weatherData, handleCityChange, handleButtonClick } =
        useWeatherData();

    return (
        <div>
            <h1>Tiempo actual</h1>
            <div className="input-container">
                <input
                    className="input-field"
                    type="text"
                    placeholder="Nombre de la ciudad"
                    value={city}
                    onChange={(e) => handleCityChange(e.target.value)}
                />
            </div>
            <Button onClick={handleButtonClick}> Clima </Button>
            <br />
            {weatherData && (
                <div>
                    <h2>{weatherData.name}</h2>
                    <p>Temperatura: {weatherData.main.temp.toFixed(0)}°C</p>
                    <p>Descripción: {weatherData.weather[0].description}</p>
                </div>
            )}
            <br />
            <Navigation currentPage="weather" />
        </div>
    );
};

export default WeatherApp;
