import React from 'react';
import { QuoteServiceSelectProps } from '../../types/IQuoteServiceSelectProps';

const QuoteServiceSelect: React.FC<QuoteServiceSelectProps> = ({
    selectedOption,
    handleOptionSelect,
}) => {
    return (
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
    );
};

export default QuoteServiceSelect;
