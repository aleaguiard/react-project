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

vi.mock('axios');

describe('WeatherAPI', () => {
    const renderApp = (initialEntries = ['/']) => {
        render(
            <MemoryRouter initialEntries={initialEntries}>
                <WeatherPage />
            </MemoryRouter>,
        );
    };
    // Test #4: Verifica si se obtiene correctamente los datos del clima de una ciudad desde la API de OpenWeatherMap..
    test('Should fetch weather data from mockup', async () => {
        renderApp();

        // Simulación de respuesta exitosa de la API
        setupMockWeather();

        await act(async () => {
            const input = screen.getByPlaceholderText('Nombre de la ciudad');
            fireEvent.change(input, {
                target: { value: mockedWeatherData().name },
            });

            const button = screen.getByText('Clima');
            fireEvent.click(button);
        });

        // Verifica que se muestre correctamente la temperatura recibida
        await waitFor(() => {
            const temperatureElement = screen.getByText(/Temperatura:/i);
            expect(temperatureElement.textContent).toContain(
                mockedWeatherData().main.temp,
            );
        });
    });
});
