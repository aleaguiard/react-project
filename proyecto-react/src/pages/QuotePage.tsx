import React, { useState } from 'react';
import useFetchQuote from '../hooks/useFetchQuote';
import Button from '../components/Button/Button';
import Navigation from '../components/Navigation/Navigation';
import { QuotePageProps } from '../types/IQuotePageProps';
import { quoteService1, quoteService2 } from '../api/QuoteAPI/ApiQuoteService';

const QuotePage: React.FC<QuotePageProps> = () => {
    const [quoteService, setQuoteService] =
        useState<typeof quoteService1>(quoteService1);

    const { quote, isLoading, error, fetchNewQuote } =
        useFetchQuote(quoteService);

    const handleSwitchQuoteService = (
        selectedService: typeof quoteService1 | typeof quoteService2,
    ) => {
        setQuoteService(selectedService);
    };

    const handleClick = async (category?: string) => {
        await fetchNewQuote(category);
    };

    return (
        <div>
            <h1>Quote</h1>
            <div className="quote-service-switcher">
                <label htmlFor="quote-service-select">Quote Service:</label>
                <select
                    id="quote-service-select"
                    value={
                        quoteService === quoteService1
                            ? 'Service A'
                            : 'Service B'
                    }
                    onChange={(e) =>
                        handleSwitchQuoteService(
                            e.target.value === 'Service A'
                                ? quoteService1
                                : quoteService2,
                        )
                    }
                >
                    <option value="Service A">Service A</option>
                    <option value="Service B">Service B</option>
                </select>
            </div>
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
