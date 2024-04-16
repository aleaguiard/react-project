import axios, { AxiosInstance } from 'axios';
import Quote from '../types/IQuote';

export class QuoteApi {
    private axiosInstance: AxiosInstance;

    constructor(
        private apiUrl: string,
        private apiKey?: string,
    ) {
        this.axiosInstance = axios.create();

        if (this.apiKey) {
            this.axiosInstance.defaults.headers.common['X-Api-Key'] =
                this.apiKey;
        }
    }

    async fetchQuote(category: string): Promise<Quote[]> {
        const url = `${this.apiUrl}${category}`;
        const response = await this.axiosInstance.get(url);
        return response.data;
    }
}
