import React, { useState } from 'react';
import Button from '../Button/Button';

interface WeatherSearchProps {
    onButtonClick: (city: string) => void;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const WeatherSearch: React.FC<WeatherSearchProps> = ({ onButtonClick }) => {
    const [city, setCity] = useState('');

    const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCity(event.target.value);
    };

    const handleClick = () => {
        onButtonClick(city);
    };

    return (
        <div>
            <div className="input-container">
                <input
                    className="input-field"
                    type="text"
                    placeholder="Nombre de la ciudad"
                    value={city}
                    onChange={handleCityChange}
                />
            </div>
            <Button onClick={handleClick}>Clima</Button>
            <br />
            <br />
        </div>
    );
};

export default WeatherSearch;
