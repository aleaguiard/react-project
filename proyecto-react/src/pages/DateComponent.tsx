import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation/Navigation';

const DateComponent = () => {
    // Estado para almacenar la fecha y hora actuales
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        // Actualiza el estado con la nueva fecha y hora cada segundo
        const intervalId = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        // Detiene el intervalo cuando el componente se actualiza
        return () => clearInterval(intervalId);
    }, []);

    // Obtiene la fecha y hora en formato de cadena de texto
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
