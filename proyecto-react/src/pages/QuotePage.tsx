import React, { useState } from 'react';
import useFetchQuote from '../hooks/useFetchQuote';
import Button from '../components/Button/Button';
import Navigation from '../components/Navigation/Navigation';
import { QuotePageProps } from '../types/IQuotePageProps';
import { quoteService1, quoteService2 } from '../api/QuoteAPI/ApiQuoteService';
import { Service } from '../api/Interfaces/IService';
import Quote from '../types/IQuote';

const QuotePage: React.FC<QuotePageProps> = () => {
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [quoteService, setQuoteService] =
        useState<Service<Quote>>(quoteService1);
    const { quote, isLoading, error, fetchNewQuote } =
        useFetchQuote(quoteService);

    const handleOptionSelect = (
        event: React.ChangeEvent<HTMLSelectElement>,
    ) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        if (selectedValue === 'Service A') {
            setQuoteService(quoteService1);
        } else if (selectedValue === 'Service B') {
            setQuoteService(quoteService2);
        } else if (selectedValue === 'Random') {
            setRandomService();
        }
    };

    const setRandomService = () => {
        const randomService =
            Math.random() < 0.5 ? quoteService1 : quoteService2;
        setQuoteService(randomService);
    };

    const handleClick = async (category?: string) => {
        if (selectedOption === 'Random') {
            setRandomService();
            fetchNewQuote();
        } else {
            await fetchNewQuote(category);
        }
    };

    return (
        <div>
            <h1>Quote</h1>
            <div className="quote-service-switcher">
                <label htmlFor="quote-service-select">Elige API: </label>
                <select
                    id="quote-service-select"
                    value={selectedOption}
                    onChange={handleOptionSelect}
                >
                    <option></option>
                    <option value="Random">Aleatorio</option>
                    <option value="Service A">Ninja Api</option>
                    <option value="Service B">Quotable</option>
                </select>
            </div>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {quote && selectedOption && (
                <div>
                    <p className="quote">
                        {quote && (quote.quote || quote.content)}
                    </p>
                    <p>{quote && quote.author}</p>
                </div>
            )}
            <div className="category-container">
                {selectedOption === 'Service A' && (
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
                {selectedOption === 'Service B' && (
                    <>
                        <br />
                        <Button onClick={() => handleClick()}>New Quote</Button>
                    </>
                )}
                {selectedOption === 'Random' && (
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
