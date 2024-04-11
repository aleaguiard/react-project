import axios from 'axios';
import { vi } from 'vitest';

export const mockedWeatherData = () => ({
    name: 'Madrid',
    main: {
        temp: 20,
    },
    weather: [
        {
            description: 'Nublado',
        },
    ],
});

export const setupMockWeather = () => {
    vi.mocked(axios, true).get.mockResolvedValueOnce({
        data: mockedWeatherData(),
    });
};
