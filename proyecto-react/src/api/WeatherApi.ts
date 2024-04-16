import WeatherData from '../types/IWeatherData';
import { WeatherService } from './IWeatherService';
import { HttpClient } from './IHttpClient';

export class WeatherApi implements WeatherService {
    constructor(private httpClient: HttpClient<WeatherData>) {}

    async fetchWeather(city: string): Promise<WeatherData> {
        try {
            const response = await this.httpClient.get(`?q=${city}`);
            return response.data;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(
                    `Error fetching weather data: ${error.message}`,
                );
            } else {
                throw new Error(`Unknown error fetching weather data`);
            }
        }
    }
}
