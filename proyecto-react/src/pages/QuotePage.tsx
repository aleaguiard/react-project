import React from 'react';
import { Link } from 'react-router-dom';
import useFetchQuote from '../hooks/useFetchQuote';
import QuoteDisplay from '../components/Quote/QuoteDisplay';
import Button from '../components/Button/Button';

const QuotePage: React.FC = () => {
    const [quote, fetchNewQuote] = useFetchQuote();

    return (
        <div>
            <h1>Quote</h1>
            {quote && <QuoteDisplay quote={quote} />}
            <br />
            <br />
            <Button onClick={fetchNewQuote}>Next Quote</Button>
            <br />
            <br />
            <Link to="/">
                <Button>Go Home</Button>
            </Link>
        </div>
    );
};

export default QuotePage;
