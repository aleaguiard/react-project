import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

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
        // ARRANGE
        renderApp();

        // ACT
        const headingElement = screen.getByRole('heading', { level: 1 });

        // EXPECT
        expect(headingElement.textContent).toEqual('Home');
    });

    // Test #2: Verifica si se muestra la página NotFound al acceder a una ruta no válida.
    it('Renders NotFound if invalid path', () => {
        // ARRANGE
        renderApp(['/wrong-route']);

        // ACT
        const titleElement = screen.getByRole('heading', { level: 1 });

        // EXPECT
        expect(titleElement.textContent).toEqual('Not Found Page');
    });

    // Test #3: Verifica si se renderiza correctamente DateComponent con la fecha y la hora actuales.
    it('Renders DateComponent', () => {
        // ARRANGE
        renderApp(['/date']);

        // ACT
        const dateElement = screen.getByText(/Fecha:/i);
        const timeElement = screen.getByText(/Hora:/i);

        // EXPECT
        expect(dateElement).toBeInTheDocument();
        expect(timeElement).toBeInTheDocument();

        const currentDate = new Date().toLocaleDateString();
        const currentTime = new Date().toLocaleTimeString();

        expect(dateElement.textContent).toContain(currentDate);
        expect(timeElement.textContent).toContain(currentTime);
    });
});
