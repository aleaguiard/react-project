import React from 'react';
import useFetchQuote from '../hooks/useFetchQuote';
import Button from '../components/Button/Button';
import Navigation from '../components/Navigation/Navigation';

const QuotePage: React.FC = () => {
    const { quote, isLoading, error, fetchNewQuote } = useFetchQuote();

    const handleClick = (category: string) => {
        fetchNewQuote(category);
    };

    return (
        <div>
            <div>
                <h1>Quote</h1>
                {isLoading && <p>Loading...</p>}
                {error && <p>Error: {error.message}</p>}
                {quote && (
                    <div>
                        <p className="quote">{quote.quote}</p>
                        <p>- {quote.author}</p>
                    </div>
                )}
                <div>
                    <Button onClick={() => handleClick('humor')}>Humor</Button>{' '}
                    <Button onClick={() => handleClick('movies')}>
                        Movies
                    </Button>{' '}
                    <Button onClick={() => handleClick('inspirational')}>
                        Inspirational
                    </Button>
                </div>
                <br />
                <br />
                <Navigation currentPage="/quote" />
            </div>
        </div>
    );
};

export default QuotePage;
