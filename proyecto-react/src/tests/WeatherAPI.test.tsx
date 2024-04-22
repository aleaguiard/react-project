import { describe, test, vi } from 'vitest';
import {
    act,
    fireEvent,
    render,
    screen,
    waitFor,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { mockedWeatherData, setupMockWeather } from './utils/setupMockWeather';
import WeatherPage from '../pages/WeatherPage';
import { weatherService, imageService } from '../api/ApiWeatherService';

vi.mock('axios');

describe('WeatherAPI', () => {
    const renderApp = (initialEntries = ['/']) => {
        render(
            <MemoryRouter initialEntries={initialEntries}>
                <WeatherPage
                    weatherService={weatherService}
                    imageService={imageService}
                />{' '}
            </MemoryRouter>,
        );
    };
    // Test #5: Verifica si se obtiene correctamente los datos del clima de una ciudad desde la API de OpenWeatherMap.
    test('Should render weather data from mockup', async () => {
        renderApp();
        setupMockWeather();

        await act(async () => {
            const input = screen.getByPlaceholderText('Nombre de la ciudad');
            fireEvent.change(input, {
                target: { value: mockedWeatherData().name },
            });

            const button = screen.getByText('Clima');
            fireEvent.click(button);
        });

        await waitFor(() => {
            const temperatureElement = screen.getByText(/Temperatura:/i);
            expect(temperatureElement.textContent).toContain(
                mockedWeatherData().main.temp,
            );
        });
    });
});
