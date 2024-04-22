import Quote from '../../../types/IQuote';
import { HttpClient, ApiResponse } from '../../IHttpClient';

export class NewHttpClient implements HttpClient<Quote[]> {
    constructor(private apiUrl: string) {}

    async get(): Promise<ApiResponse<Quote[]>> {
        try {
            const response = await fetch(this.apiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            return { data };
        } catch (error) {
            throw new Error(`Error fetching data: ${(error as Error).message}`);
        }
    }
}
