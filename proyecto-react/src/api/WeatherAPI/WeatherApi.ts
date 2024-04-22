import WeatherData from '../../types/IWeatherData';
import { HttpClient } from '../Interfaces/IHttpClient';
import { Service } from '../Interfaces/IService';

export class WeatherApi implements Service<WeatherData> {
    constructor(private httpClient: HttpClient<WeatherData>) {}

    async fetch(url: string): Promise<WeatherData> {
        try {
            const response = await this.httpClient.get(url);
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
