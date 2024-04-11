import axios from 'axios';
import { it, vi } from 'vitest';
import QuotePage from '../pages/QuotePage';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

vi.mock('axios');

describe('QuoteAPI', () => {
    const renderApp = (initialEntries = ['/']) => {
        render(
            <MemoryRouter initialEntries={initialEntries}>
                <QuotePage />
            </MemoryRouter>,
        );
    };

    it('Should return valid value', async () => {
        const quoteData = [
            {
                quote: 'The will of man is his happiness.',
                author: 'Friedrich Schiller',
                category: 'happiness',
            },
        ];

        // Configurar el mock de axios con Vitest
        vi.mocked(axios, true).get.mockResolvedValueOnce({
            data: quoteData,
        });

        renderApp();

        console.log(quoteData);
        console.log(screen.debug());

        await act(async () => {
            const button = screen.getByText('Humor');
            fireEvent.click(button);
        });

        console.log(screen.debug());

        const quoteElement = screen.getByText(
            'The will of man is his happiness.',
        );
        expect(quoteElement).toBeInTheDocument();
    });
});
