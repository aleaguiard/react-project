import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

vi.mock('axios');

describe('App', () => {
    const renderApp = (initialEntries = ['/']) => {
        render(
            <MemoryRouter initialEntries={initialEntries}>
                <App />
            </MemoryRouter>,
        );
    };

    // Test #1: Verifica si el título "Home" se renderiza correctamente.
    it('Renders the title "Home"', () => {
        renderApp();
        const headingElement = screen.getByRole('heading', { level: 1 });
        expect(headingElement.textContent).toEqual('Home');
    });

    // Test #2: Verifica si se muestra la página NotFound al acceder a una ruta no válida.
    it('Renders NotFound if invalid path', () => {
        renderApp(['/wrong-route']);
        const titleElement = screen.getByRole('heading', { level: 1 });
        expect(titleElement.textContent).toEqual('Not Found Page');
    });

    // Test #3: Verifica si se renderiza correctamente DateComponent con la fecha y la hora actuales.
    it('Renders Date-Time', () => {
        renderApp(['/date']);

        const dateElement = screen.getByText(/Fecha:/i);
        const timeElement = screen.getByText(/Hora:/i);

        expect(dateElement).toBeInTheDocument();
        expect(timeElement).toBeInTheDocument();

        const currentDate = new Date().toLocaleDateString();
        const currentTime = new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
        });

        expect(dateElement.textContent).toContain(currentDate);
        // expect(timeElement.textContent).toContain(currentTime);
        expect(timeElement.textContent).toContain(currentTime.substring(0, 5));
    });
});
