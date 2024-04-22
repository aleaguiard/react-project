import Quote from '../../../types/IQuote';
import { HttpClient } from '../../IHttpClient';
import { QuoteService } from '../IQuoteService';

export class NewQuoteAPI implements QuoteService {
    private static readonly apiUrl: string = 'https://zenquotes.io/api/today/';

    constructor(private httpClient: HttpClient<Quote[]>) {}

    async fetchQuote(): Promise<Quote[]> {
        try {
            const response = await this.httpClient.get(NewQuoteAPI.apiUrl);
            return response.data;
        } catch (error: unknown) {
            throw new Error(`Error fetching data: ${(error as Error).message}`);
        }
    }
}
