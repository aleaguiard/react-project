import Button from '../Button/Button';
import React from 'react';

interface CategoryButtonsProps {
    onClick: (category?: string) => void;
}

export const CategoryButtons: React.FC<CategoryButtonsProps> = ({
    onClick,
}) => {
    return (
        <div className="category-container">
            <Button onClick={() => onClick('humor')}>Humor</Button>
            <Button onClick={() => onClick('movies')}>Movies</Button>
            <Button onClick={() => onClick('inspirational')}>
                Inspirational
            </Button>
            <Button onClick={() => onClick()}>Quote of the Day</Button>
        </div>
    );
};
