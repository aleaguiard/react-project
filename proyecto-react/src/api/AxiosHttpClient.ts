import axios, { AxiosInstance } from 'axios';
import { HttpClient } from './IHttpClient';
import WeatherData from '../types/IWeatherData';

export class AxiosHttpClient implements HttpClient {
    private axiosInstance: AxiosInstance;

    constructor(
        private apiUrl: string,
        private apiKey: string,
    ) {
        this.axiosInstance = axios.create({
            baseURL: this.apiUrl,
            params: {
                appid: this.apiKey,
                units: 'metric',
                lang: 'es',
            },
        });
    }

    async get(url: string): Promise<WeatherData> {
        const response = await this.axiosInstance.get(url);
        return response.data;
    }
}
