import Quote from '../types/IQuote';

export interface QuoteService {
    fetchQuote(category: string): Promise<Quote[]>;
}
