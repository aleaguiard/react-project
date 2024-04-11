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
    vi.mock('axios', async () => ({
        default: {
            get: async () => ({ data: mockedWeatherData() }),
        },
    }));
};
