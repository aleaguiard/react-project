import { vi } from 'vitest';
import { AxiosHttpClient } from '../../api/WeatherAPI/AxiosHttpClient';

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
    const mockGet = vi
        .fn()
        .mockResolvedValueOnce({ data: mockedWeatherData() });

    AxiosHttpClient.prototype.get = mockGet;
};
