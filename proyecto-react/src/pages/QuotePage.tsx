import React, { useState } from 'react';

import { quoteService1, quoteService2 } from '../api/QuoteAPI/ApiQuoteService';
import { QuotePageProps } from '../types/IQuotePageProps';
import Button from '../components/Button/Button';
import { CategoryButtons } from '../components/CategoryButtons/CategoryButtons';
import { QuoteServiceSelector } from '../components/QuoteServiceSelector/QuoteServiceSelector';
import useFetchQuote from '../hooks/useFetchQuote';
import Navigation from '../components/Navigation/Navigation';

const QuotePage: React.FC<QuotePageProps> = () => {
    const [quoteService, setQuoteService] = useState<
        typeof quoteService1 | typeof quoteService2 | 'random' | ''
    >('');
    const [showRandomButton, setShowRandomButton] = useState<boolean>(false);

    const { quote, isLoading, error, fetchNewQuote } =
        useFetchQuote(quoteService);

    const handleSwitchQuoteService = (selectedService) => {
        setQuoteService(selectedService);
        setShowRandomButton(false); // Reset random button visibility
    };

    const handleClick = async (category?: string) => {
        await fetchNewQuote(category);
        setShowRandomButton(false); // Hide random button after fetching a quote
    };

    const handleRandomClick = async () => {
        setQuoteService('random');
        await fetchNewQuote(); // Fetch quote from randomly selected API
        setShowRandomButton(false); // Hide random button after fetching a quote
    };

    return (
        <div>
            <h1>Quote</h1>
            <QuoteServiceSelector
                value={quoteService}
                onChange={(e) => handleSwitchQuoteService(e.target.value)}
            />
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
            {(quoteService === quoteService1 || quoteService === 'random') && (
                <CategoryButtons onClick={handleClick} />
            )}
            {quoteService === quoteService2 && (
                <Button onClick={handleClick}>Get Quote</Button>
            )}
            {quoteService === 'random' && (
                <Button onClick={handleRandomClick}>Random Quote</Button>
            )}
            {quoteService === '' && <p>Selecciona un servicio</p>}
            <br />
            <br />
            <Navigation currentPage="/quote" />
        </div>
    );
};

export default QuotePage;
