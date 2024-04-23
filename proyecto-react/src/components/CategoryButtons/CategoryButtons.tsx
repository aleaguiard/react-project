import Button from '../Button/Button';

import React from 'react';

interface Props {
    quoteService: string;
    handleClick: (category?: string) => void;
    handleSwitchQuoteService: (service: string) => void;
}

const CategoryButtons: React.FC<Props> = ({
    quoteService,
    handleClick,
    handleSwitchQuoteService,
}) => {
    return (
        <div className="category-container">
            {quoteService === 'Service A' && (
                <>
                    <Button onClick={() => handleClick('humor')}>Humor</Button>{' '}
                    <Button onClick={() => handleClick('movies')}>
                        Movies
                    </Button>{' '}
                    <Button onClick={() => handleClick('inspirational')}>
                        Inspirational
                    </Button>
                </>
            )}
            {quoteService === 'Service B' && (
                <Button onClick={() => handleClick()}>Get Quote</Button>
            )}
            {quoteService === 'random' && (
                <Button onClick={() => handleSwitchQuoteService('random')}>
                    Random Quote
                </Button>
            )}
        </div>
    );
};

export default CategoryButtons;
