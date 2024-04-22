import { Service } from '../api/Interfaces/IService';
import Quote from './IQuote';

export interface QuotePageProps {
    quoteService: Service<Quote[]>;
}
