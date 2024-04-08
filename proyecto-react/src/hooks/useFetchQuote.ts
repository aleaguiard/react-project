import { useState, useEffect, useCallback } from 'react';
import Quote from '../types/IQuote';

const useFetchQuote = (): [Quote | null, () => void] => {
    const [quote, setQuote] = useState<Quote | null>(() => {
        const storedQuote = localStorage.getItem('quote');
        return storedQuote ? JSON.parse(storedQuote) : null;
    });

    const fetchQuote = useCallback(async () => {
        const apiKey = 'RvR5F0cmfFAguKH1LSi4Xg==AfIhrRIdSKGGZqCI';
        const requestOptions = {
            headers: {
                'X-Api-Key': apiKey,
            },
        };

        const res = await fetch(
            'https://api.api-ninjas.com/v1/quotes?category=humor',
            requestOptions,
        );
        const data: Quote[] = await res.json();

        return data[0];
    }, []);

    const fetchNewQuote = useCallback(async () => {
        try {
            const newQuote = await fetchQuote();
            setQuote(newQuote);
            localStorage.setItem('quote', JSON.stringify(newQuote));
        } catch (error) {
            console.error('Error fetching quote:', error);
        }
    }, [fetchQuote]);

    useEffect(() => {
        if (!quote) {
            fetchNewQuote();
        }
    }, [quote, fetchNewQuote]);

    return [quote, fetchNewQuote];
};

export default useFetchQuote;
