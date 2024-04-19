import { useState } from 'react';
import { FetchError } from '../types/IFetchError';
import Quote from '../types/IQuote';
import { QuoteService } from '../api/QuoteAPI/IQuoteService';

const useFetchQuote = (quoteService: QuoteService) => {
    const [quote, setQuote] = useState<Quote | null>(null);
    const [error, setError] = useState<FetchError | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchNewQuote = async (category: string) => {
        setIsLoading(true);
        try {
            const newQuote = await quoteService.fetchQuote(category);
            if (newQuote) {
                setQuote(newQuote[0]);
            } else {
                setError({ message: 'Response data is empty' });
            }
        } catch (err) {
            const errorObj: FetchError = {
                message: err instanceof Error ? err.message : String(err),
            };
            setError(errorObj);
        } finally {
            setIsLoading(false);
        }
    };

    return { quote, error, isLoading, fetchNewQuote };
};

export default useFetchQuote;
