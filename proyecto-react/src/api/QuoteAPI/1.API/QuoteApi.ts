import Quote from '../../../types/IQuote';
import { HttpClient } from '../../IHttpClient';
import { QuoteService } from '../IQuoteService';

export class QuoteApi implements QuoteService {
    constructor(private httpClient: HttpClient<Quote[]>) {}

    async fetchQuote(category: string): Promise<Quote[]> {
        try {
            const response = await this.httpClient.get(category);
            return response.data;
        } catch (error: unknown) {
            throw new Error(`Error fetching data: ${(error as Error).message}`);
        }
    }
}
