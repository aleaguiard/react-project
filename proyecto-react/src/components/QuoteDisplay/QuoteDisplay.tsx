import React from 'react';
import Quote from '../../types/IQuote';

interface QuoteDisplayProps {
    quote: Quote | null;
    selectedOption: string;
}

const QuoteDisplay: React.FC<QuoteDisplayProps> = ({
    quote,
    selectedOption,
}) => {
    return (
        <div>
            {quote && selectedOption && (
                <div>
                    <p className="quote">
                        {quote && (quote.quote || quote.content)}
                    </p>
                    <p>{quote && quote.author}</p>
                </div>
            )}
        </div>
    );
};

export default QuoteDisplay;
