import Quote from '../types/IQuote';
import { HttpClient, ApiResponse } from './IHttpClient';

export class FetchHttpClient implements HttpClient<Quote[]> {
    constructor(
        private apiUrl: string,
        private apiKey: string,
    ) {}

    async get(url: string): Promise<ApiResponse<Quote[]>> {
        try {
            const response = await fetch(`${this.apiUrl}${url}`, {
                headers: {
                    'X-Api-Key': this.apiKey,
                },
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            return { data };
        } catch (error: unknown) {
            throw new Error(`Error fetching data: ${(error as Error).message}`);
        }
    }
}
