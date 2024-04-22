import React from 'react';
import useFetchQuote from '../hooks/useFetchQuote';
import Button from '../components/Button/Button';
import Navigation from '../components/Navigation/Navigation';
import { QuoteService } from '../api/QuoteAPI/IQuoteService';

interface QuotePageProps {
    quoteService: QuoteService;
}

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
                    <p className="quote">{quote.quote}</p>
                    <p> {quote.author}</p>
                </div>
            )}
            <div className="category-container">
                <Button onClick={() => handleClick('humor')}>Humor</Button>{' '}
                <Button onClick={() => handleClick('movies')}>Movies</Button>{' '}
                <Button onClick={() => handleClick('inspirational')}>
                    Inspirational
                </Button>{' '}
                <Button onClick={() => handleClick()}>Inspirational</Button>
            </div>
            <br />
            <br />
            <Navigation currentPage="/quote" />
        </div>
    );
};

export default QuotePage;
