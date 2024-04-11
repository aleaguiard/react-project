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
// TESTS CON PETICIONES REALES A LA API
// it('Should fetch weather data from OpenWeatherMap API', async () => {
//     renderApp(['/weather']);

//     const city = 'Madrid';
//     const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
//     const apiUrl = `${import.meta.env.VITE_WEATHER_API_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=es`;

//     const input = screen.getByPlaceholderText('Nombre de la ciudad');
//     fireEvent.change(input, { target: { value: city } });

//     const button = screen.getByText('Clima');
//     fireEvent.click(button);

//     await act(async () => {
//         const response = await axios.get(apiUrl);
//         const data = response.data;
//         expect(response.status).toBe(200);
//         expect(data.name).toBe(city);
//         await new Promise((resolve) => setTimeout(resolve, 100));
//     });

//     await act(async () => {
//         const h2Element = screen.getByTestId('city-title');
//         expect(h2Element).toBeInTheDocument();
//     });
// });
