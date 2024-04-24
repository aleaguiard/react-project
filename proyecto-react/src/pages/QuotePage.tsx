import React, { useState } from 'react';
import useFetchQuote from '../hooks/useFetchQuote';
import Navigation from '../components/Navigation/Navigation';
import { QuotePageProps } from '../types/IQuotePageProps';
import { quoteService1, quoteService2 } from '../api/QuoteAPI/ApiQuoteService';
import { Service } from '../api/Interfaces/IService';
import Quote from '../types/IQuote';
import QuoteServiceSelect from '../components/QuoteServiceSelector/QuoteServiceSelector';
import CategoryButtons from '../components/CategoryButtons/CategoryButtons';
import QuoteDisplay from '../components/QuoteDisplay/QuoteDisplay';

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

        const services = [
            { name: 'Service A', action: () => setQuoteService(quoteService1) },
            { name: 'Service B', action: () => setQuoteService(quoteService2) },
            { name: 'Random', action: setRandomService },
        ];

        const selectedService = services.find(
            (option) => option.name === selectedValue,
        );
        if (selectedService) {
            selectedService.action();
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
        }
        fetchNewQuote(category);
    };

    return (
        <div>
            <h1>Quote</h1>
            <QuoteServiceSelect
                selectedOption={selectedOption}
                handleOptionSelect={handleOptionSelect}
            />
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            <QuoteDisplay quote={quote} selectedOption={selectedOption} />
            <CategoryButtons
                selectedOption={selectedOption}
                handleClick={handleClick}
            />
            <Navigation currentPage="/quote" />
        </div>
    );
};

export default QuotePage;
