import React from 'react';
import Button from '../Button/Button';

interface CategoryButtonsProps {
    selectedOption: string;
    handleClick: (category?: string) => void;
}

const CategoryButtons: React.FC<CategoryButtonsProps> = ({
    selectedOption,
    handleClick,
}) => {
    return (
        <div className="category-container">
            {selectedOption === 'Service A' && (
                <>
                    <br />
                    <Button onClick={() => handleClick('humor')}>
                        Humor
                    </Button>{' '}
                    <Button onClick={() => handleClick('movies')}>
                        Movies
                    </Button>{' '}
                    <Button onClick={() => handleClick('inspirational')}>
                        Inspirational
                    </Button>
                </>
            )}
            {selectedOption === 'Service B' && (
                <>
                    <br />
                    <Button onClick={() => handleClick()}>New Quote</Button>
                </>
            )}
            {selectedOption === 'Random' && (
                <>
                    <br />
                    <Button onClick={() => handleClick()}>Random Quote</Button>
                </>
            )}
            <br />
            <br />
        </div>
    );
};

export default CategoryButtons;
