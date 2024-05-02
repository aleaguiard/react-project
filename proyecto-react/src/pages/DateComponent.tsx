import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation/Navigation';

const DateComponent = () => {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDateTime(new Date());
        }, 200);

        return () => clearInterval(intervalId);
    }, []);

    const date = dateTime.toLocaleDateString();
    const time = dateTime.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });

    return (
        <div>
            <div className="date-container">
                <h1>Fecha: {date}</h1>
                <h1>Hora: {time}</h1>
            </div>
            <br />
            <Navigation currentPage="/date" />
        </div>
    );
};

export default DateComponent;
