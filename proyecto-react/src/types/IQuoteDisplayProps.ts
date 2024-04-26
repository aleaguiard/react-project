import Quote from './IQuote';

export interface QuoteDisplayProps {
    quote: Quote | null;
    selectedOption: string;
}
