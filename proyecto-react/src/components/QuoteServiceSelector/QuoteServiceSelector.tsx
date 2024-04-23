import React from 'react';

interface Props {
    quoteService: string;
    handleSwitchQuoteService: (service: string) => void;
}

const QuoteServiceSwitcherComponent: React.FC<Props> = ({
    quoteService,
    handleSwitchQuoteService,
}) => {
    return (
        <div className="quote-service-switcher">
            <label htmlFor="quote-service-select">Elige API: </label>
            <select
                id="quote-service-select"
                value={quoteService}
                onChange={(e) => handleSwitchQuoteService(e.target.value)}
            >
                <option value="Service A">Ninja Api</option>
                <option value="Service B">Quotable</option>
                <option value="Random">Aleatorio</option>
            </select>
        </div>
    );
};

export default QuoteServiceSwitcherComponent;
