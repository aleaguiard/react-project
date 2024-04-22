import Quote from '../../../types/IQuote';
import { HttpClient } from '../../Interfaces/IHttpClient';
import { Service } from '../../Interfaces/IService';

export class NewQuoteAPI implements Service<Quote[]> {
    constructor(private httpClient: HttpClient<Quote[]>) {}

    async fetch(url: string): Promise<Quote[]> {
        try {
            const response = await this.httpClient.get(url);
            console.log(response.data);
            return response.data;
        } catch (error: unknown) {
            throw new Error(`Error fetching data: ${(error as Error).message}`);
        }
    }
}
