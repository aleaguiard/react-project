import React from 'react';

interface QuoteServiceSelectorProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const QuoteServiceSelector: React.FC<QuoteServiceSelectorProps> = ({
    value,
    onChange,
}) => {
    return (
        <div className="quote-service-switcher">
            <label htmlFor="quote-service-select">Elige API: </label>
            <select id="quote-service-select" value={value} onChange={onChange}>
                <option value=""></option>
                <option value="Service A">Ninja API</option>
                <option value="Service B">Quotable</option>
                <option value="Random">Aleatorio</option>
            </select>
        </div>
    );
};
