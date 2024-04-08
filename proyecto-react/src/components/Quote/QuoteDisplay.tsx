import React from 'react';
import Quote from '../../types/IQuote';
import './QuoteDisplay.css';

interface Props {
    quote: Quote;
}

const QuoteDisplay: React.FC<Props> = ({ quote }) => {
    return (
        <>
            <blockquote>{quote.quote}</blockquote>
            <h3>{quote.author}</h3>
        </>
    );
};

export default QuoteDisplay;
