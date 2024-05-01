import { useState } from 'react';
import { FetchError } from '../types/IFetchError';
import Quote from '../types/IQuote';
import { Service } from '../api/Interfaces/IService';

/**
 * Custom Hook for fetching a new quote from a service.
 * @param quoteService - The service to fetch the quote from.
 * @returns An object containing the fetched quote, any error that occurred during the fetch, and a boolean indicating whether the fetch is currently in progress.
 */
const useQuoteData = <T>(
    quoteService: Service<T>,
): {
    quote: Quote | null;
    error: FetchError | null;
    isLoading: boolean;
    fetchNewQuote: (category?: string) => Promise<void>;
} => {
    const [quote, setQuote] = useState<Quote | null>(null);
    const [error, setError] = useState<FetchError | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    /**
     * Fetches a new quote from the provided quoteService.
     * @param category - An optional category parameter to filter the quote.
     */
    const fetchNewQuote = async (category?: string) => {
        setIsLoading(true);
        try {
            if (quoteService) {
                const newQuote = await quoteService.fetch(category ?? '');
                if (Array.isArray(newQuote) && newQuote.length > 0) {
                    setQuote(newQuote[0]);
                } else {
                    setError({ message: 'Response data is empty' });
                }
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

export default useQuoteData;
