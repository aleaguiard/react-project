import React from 'react';
import Quote from '../../types/IQuote';

interface QuoteDisplayProps {
    quote: Quote | null;
    isLoading: boolean;
    error: Error | null;
}

const QuoteDisplay: React.FC<QuoteDisplayProps> = ({
    quote,
    isLoading,
    error,
}) => {
    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    if (!quote) {
        return null;
    }

    const quoteText = quote.quote || quote.content || 'No quote available';
    const author = quote.author || 'Unknown author';

    return (
        <div>
            <p className="quote">{quoteText}</p>
            <p>{author}</p>
        </div>
    );
};

export default QuoteDisplay;
