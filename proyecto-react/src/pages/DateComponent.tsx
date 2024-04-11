import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation/Navigation';

const DateComponent = () => {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const date = dateTime.toLocaleDateString();
    const time = dateTime.toLocaleTimeString();

    // Renderiza la fecha y la hora
    return (
        <div>
            <h1>Fecha: {date}</h1>
            <h1>Hora: {time}</h1>
            <Navigation currentPage="date" />
        </div>
    );
};

export default DateComponent;
