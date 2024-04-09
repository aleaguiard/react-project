import React from 'react';
import useFetchQuote from '../hooks/useFetchQuote';
import QuoteDisplay from '../components/Quote/QuoteDisplay';
import Button from '../components/Button/Button';
import Navigation from '../components/Navigation/Navigation';

const QuotePage: React.FC = () => {
    const [quote, fetchNewQuote] = useFetchQuote();

    return (
        <div>
            <div>
                <h1>Quote</h1>
                {quote && <QuoteDisplay quote={quote} />}
                <Button onClick={fetchNewQuote}>Next Quote</Button>
                <br />
                <br />
                <Navigation currentPage="quote" />
            </div>
        </div>
    );
};

export default QuotePage;
