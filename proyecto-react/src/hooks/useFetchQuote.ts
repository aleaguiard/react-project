import { useState } from 'react';
import { FetchError } from '../types/IFetchError';
import Quote from '../types/IQuote';
import { Service } from '../api/Interfaces/IService';

const useFetchQuote = <T>(quoteService: Service<T>) => {
    const [quote, setQuote] = useState<Quote | null>(null);
    const [error, setError] = useState<FetchError | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

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

export default useFetchQuote;
