import WeatherData from '../types/IWeatherData';

export interface WeatherService {
    fetchWeather(city: string): Promise<WeatherData>;
}
