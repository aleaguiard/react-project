import React from 'react';
import useFetchQuote from '../hooks/useFetchQuote';
import Button from '../components/Button/Button';
import Navigation from '../components/Navigation/Navigation';
import { QuoteApi } from '../api/QuoteAPI/QuoteApi';
import { FetchHttpClient } from '../api/QuoteAPI/FetchHttpClient';

const QuotePage: React.FC = () => {
    const urlApi = import.meta.env.VITE_QUOTE_API_URL;
    const apiKey = import.meta.env.VITE_QUOTE_API_KEY;
    const httpClient = new FetchHttpClient(urlApi, apiKey);
    const quoteService = new QuoteApi(httpClient);

    const { quote, isLoading, error, fetchNewQuote } =
        useFetchQuote(quoteService);

    const handleClick = (category: string) => {
        fetchNewQuote(category);
    };

    return (
        <div>
            <h1>Quote</h1>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {quote && (
                <div>
                    <p className="quote">{quote.quote}</p>
                    <p> {quote.author}</p>
                </div>
            )}
            <div className="category-container">
                <Button onClick={() => handleClick('humor')}>Humor</Button>{' '}
                <Button onClick={() => handleClick('movies')}>Movies</Button>{' '}
                <Button onClick={() => handleClick('inspirational')}>
                    Inspirational
                </Button>
            </div>
            <br />
            <br />
            <Navigation currentPage="/quote" />
        </div>
    );
};

export default QuotePage;
