import { it, vi } from 'vitest';
import QuotePage from '../pages/QuotePage';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { setupMockQuote } from './utils/setupMockQuote';

vi.mock('axios');

describe('QuoteAPI', () => {
    const renderApp = (initialEntries = ['/']) => {
        render(
            <MemoryRouter initialEntries={initialEntries}>
                <QuotePage />
            </MemoryRouter>,
        );
    };
    // Test #4: Verifica si se renderiza correctamente la quote después de hacer la petición a la API.

    it('Should render quote data from mockup', async () => {
        setupMockQuote();
        renderApp();

        await act(async () => {
            const button = screen.getByText('Humor');
            fireEvent.click(button);
        });

        const quoteElement = screen.getByText(
            'Humor can be an incredible lacerating and effective weapon. And that is the way I use it.',
        );
        expect(quoteElement).toBeInTheDocument();
    });
});
