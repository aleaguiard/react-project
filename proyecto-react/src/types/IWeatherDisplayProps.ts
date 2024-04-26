import WeatherData from './IWeatherData';

export interface WeatherDisplayProps {
    weatherData: WeatherData | null;
    cityImage: string | null;
    description: string | null;
    isLoading: boolean;
}
