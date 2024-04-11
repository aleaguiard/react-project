import { useState } from 'react';
import Quote from '../types/IQuote';
import axios from 'axios';

interface FetchError {
    message: string;
}

const useFetchQuote = () => {
    const [quote, setQuote] = useState<Quote | null>(null);
    const [error, setError] = useState<FetchError | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchNewQuote = async (category: string) => {
        setIsLoading(true);
        try {
            const { data } = await axios.get(
                `${import.meta.env.VITE_QUOTE_API_URL}${category}`,
                {
                    headers: {
                        'X-Api-Key': import.meta.env
                            .VITE_QUOTE_API_KEY as string,
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
