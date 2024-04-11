import { vi } from 'vitest';
import axios from 'axios';

export const mockedQuoteData = () => [
    {
        quote: 'Humor can be an incredible lacerating and effective weapon. And that is the way I use it.',
        author: 'Carl Hiaasen',
        category: 'humor',
    },
    {
        quote: 'The will of man is his happiness.',
        author: 'Friedrich Schiller',
        category: 'happiness',
    },
];

export const setupMockQuote = () => {
    vi.mocked(axios, true).get.mockResolvedValueOnce({
        data: mockedQuoteData(),
    });
};
