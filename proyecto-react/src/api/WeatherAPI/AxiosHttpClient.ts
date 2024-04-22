import axios, { AxiosInstance } from 'axios';
import { ApiResponse, HttpClient } from '../Interfaces/IHttpClient';
import WeatherData from '../../types/IWeatherData';

export class AxiosHttpClient implements HttpClient<WeatherData> {
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

    async get(url: string): Promise<ApiResponse<WeatherData>> {
        try {
            const response = await this.axiosInstance.get(url);
            return { data: response.data };
        } catch (error: unknown) {
            throw new Error(`Error fetching data: ${(error as Error).message}`);
        }
    }
}
