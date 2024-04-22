import { vi } from 'vitest';
import { FetchHttpClient } from '../../api/QuoteAPI/NinjaQuoteAPI/FetchHttpClient';

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
    const mockGet = vi.fn().mockResolvedValueOnce({ data: mockedQuoteData() });

    FetchHttpClient.prototype.get = mockGet;
};
