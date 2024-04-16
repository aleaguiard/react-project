import { useState } from 'react';
import { ApiKeys } from '../types/IApiKeys';
import { FetchError } from '../types/IFetchError';
import { HttpClient } from '../types/IHttpClient';
import Quote from '../types/IQuote';

const useFetchQuote = (httpClient: HttpClient, apiKeys: ApiKeys) => {
    const [quote, setQuote] = useState<Quote | null>(null);
    const [error, setError] = useState<FetchError | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchNewQuote = async (category: string) => {
        setIsLoading(true);
        try {
            const { data } = await httpClient.get(
                `${import.meta.env.VITE_QUOTE_API_URL}${category}`,
                {
                    headers: {
                        'X-Api-Key': apiKeys.quoteApiKey,
                    },
                },
            );
            setQuote(data[0]);
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
