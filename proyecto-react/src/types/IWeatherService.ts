import WeatherData from './IWeatherData';

export interface WeatherService {
    fetchWeather(city: string): Promise<WeatherData>;
}
