import React, { useState } from 'react';
import useFetchQuote from '../hooks/useFetchQuote';
import Button from '../components/Button/Button';
import Navigation from '../components/Navigation/Navigation';
import { QuotePageProps } from '../types/IQuotePageProps';
import { quoteService1, quoteService2 } from '../api/QuoteAPI/ApiQuoteService';

const QuotePage: React.FC<QuotePageProps> = () => {
    const [quoteService, setQuoteService] = useState<
        typeof quoteService1 | typeof quoteService2 | null
    >(null);

    const { quote, isLoading, error, fetchNewQuote } =
        useFetchQuote(quoteService);

    const handleSwitchQuoteService = (
        selectedService: typeof quoteService1 | typeof quoteService2 | null,
    ) => {
        setQuoteService(selectedService);
    };

    const handleClick = async (category?: string) => {
        if (quoteService) {
            await fetchNewQuote(category);
        } else {
            const randomService =
                Math.random() < 0.5 ? quoteService1 : quoteService2;
            setQuoteService(randomService);
            await fetchNewQuote();
        }
    };

    return (
        <div>
            <h1>Quote</h1>
            <div className="quote-service-switcher">
                <label htmlFor="quote-service-select">Elige API: </label>
                <select
                    id="quote-service-select"
                    value={
                        quoteService === quoteService1
                            ? 'Service A'
                            : quoteService === quoteService2
                              ? 'Service B'
                              : ''
                    }
                    onChange={(e) =>
                        handleSwitchQuoteService(
                            e.target.value === 'Service A'
                                ? quoteService1
                                : e.target.value === 'Service B'
                                  ? quoteService2
                                  : null,
                        )
                    }
                >
                    <option value=""></option>
                    <option value="Service A">Ninja Api</option>
                    <option value="Service B">Quotable</option>
                </select>
            </div>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {quote && (
                <div>
                    <p className="quote">
                        {quote && (quote.quote || quote.content)}
                    </p>
                    <p>{quote && quote.author}</p>
                </div>
            )}
            <div className="category-container">
                {quoteService === quoteService1 && (
                    <>
                        <br />
                        <Button onClick={() => handleClick('humor')}>
                            Humor
                        </Button>{' '}
                        <Button onClick={() => handleClick('movies')}>
                            Movies
                        </Button>{' '}
                        <Button onClick={() => handleClick('inspirational')}>
                            Inspirational
                        </Button>
                    </>
                )}
                {quoteService === quoteService2 && (
                    <>
                        <br />
                        <Button onClick={() => handleClick()}>New Quote</Button>
                    </>
                )}
                {quoteService === null && (
                    <>
                        <br />
                        <Button onClick={() => handleClick()}>
                            Random Quote
                        </Button>
                    </>
                )}
            </div>
            <br />
            <br />
            <Navigation currentPage="/quote" />
        </div>
    );
};
export default QuotePage;
