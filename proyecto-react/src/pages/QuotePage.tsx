import React from 'react';
import useFetchQuote from '../hooks/useFetchQuote';
import Button from '../components/Button/Button';
import Navigation from '../components/Navigation/Navigation';
import { QuotePageProps } from '../types/IQuotePageProps';

const QuotePage: React.FC<QuotePageProps> = ({ quoteService }) => {
    const { quote, isLoading, error, fetchNewQuote } =
        useFetchQuote(quoteService);

    const handleClick = async (category?: string) => {
        await fetchNewQuote(category);
    };

    return (
        <div>
            <h1>Quote</h1>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {quote && (
                <div>
                    <p className="quote">
                        {quote && (quote.quote || quote.text)}
                    </p>
                    <p>{quote && quote.author}</p>
                </div>
            )}
            <div className="category-container">
                <Button onClick={() => handleClick('humor')}>Humor</Button>{' '}
                <Button onClick={() => handleClick('movies')}>Movies</Button>{' '}
                <Button onClick={() => handleClick('inspirational')}>
                    Inspirational
                </Button>{' '}
                <Button onClick={() => handleClick()}>Quote of the Day</Button>
            </div>
            <br />
            <br />
            <Navigation currentPage="/quote" />
        </div>
    );
};

export default QuotePage;
