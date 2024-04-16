// api/WeatherApiService.ts
import WeatherData from '../types/IWeatherData';
import { WeatherService } from '../types/IWeatherService';
import { HttpClient } from './IHttpClient';

export class WeatherApiService implements WeatherService {
    constructor(private httpClient: HttpClient) {}

    async fetchWeather(city: string): Promise<WeatherData> {
        const response = await this.httpClient.get(`?q=${city}`);
        return response;
    }
}
