import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

vi.mock('axios');

describe('App', () => {
    const renderApp = (initialEntries = ['/']) => {
        render(
            <MemoryRouter initialEntries={initialEntries}>
                <App />
            </MemoryRouter>,
        );
    };

    // Test #1: Verifica si el título "Home" se renderiza correctamente.
    it('Renders the title "Home"', () => {
        renderApp();
        const headingElement = screen.getByRole('heading', { level: 1 });
        expect(headingElement.textContent).toEqual('Home');
    });

    // Test #2: Verifica si se muestra la página NotFound al acceder a una ruta no válida.
    it('Renders NotFound if invalid path', () => {
        renderApp(['/wrong-route']);
        const titleElement = screen.getByRole('heading', { level: 1 });
        expect(titleElement.textContent).toEqual('Not Found Page');
    });

    // Test #3: Verifica si se renderiza correctamente DateComponent con la fecha y la hora actuales.
    it('Renders Date-Time', () => {
        renderApp(['/date']);

        const dateElement = screen.getByText(/Fecha:/i);
        const timeElement = screen.getByText(/Hora:/i);

        expect(dateElement).toBeInTheDocument();
        expect(timeElement).toBeInTheDocument();

        const currentDate = new Date().toLocaleDateString();
        const currentTime = new Date().toLocaleTimeString();

        expect(dateElement.textContent).toContain(currentDate);
        expect(timeElement.textContent).toContain(currentTime);
    });

    // Test #5: Verifica si se obtiene correctamente los datos del clima de una ciudad desde la API de OpenWeatherMap.
    // it('Should fetch weather data from OpenWeatherMap API', async () => {
    //     renderApp(['/weather']);

    //     vi.mock('axios', async () => {
    //         const mockedWeatherData = {
    //             name: 'Madrid',
    //             main: {
    //                 temp: 20,
    //                 humidity: 70,
    //             },
    //             weather: [
    //                 {
    //                     main: 'Clouds',
    //                     description: 'scattered clouds',
    //                 },
    //             ],
    //         };
    //         return {
    //             default: {
    //                 get: async () => ({ data: mockedWeatherData }),
    //             },
    //         };
    //     });

    //     await act(async () => {
    //         const input = screen.getByPlaceholderText('Nombre de la ciudad');
    //         fireEvent.change(input, { target: { value: MockAdapter.name } });

    //         const button = screen.getByText('Clima');
    //         fireEvent.click(button);
    //     });

    //     await waitFor(() => {
    //         const cityName = screen.getByRole('heading', { level: 2 });
    //         expect(cityName.textContent).toEqual('Madrid');
    //     });
    // });

    // TESTS CON PETICIONES REALES A LAS APIs
    // // Test #4: Verifica si se renderiza correctamente la quote después de hacer la petición a la API.
    // it('Renders "Quote" from API', async () => {
    //     renderApp(['/quote']);
    //     const apiKey = import.meta.env.VITE_QUOTE_API_KEY as string;
    //     const requestOptions = {
    //         headers: {
    //             'X-Api-Key': apiKey,
    //         },
    //     };

    //     await act(async () => {
    //         const apiUrl = import.meta.env.VITE_QUOTE_API_URL as string;
    //         await axios.get(apiUrl, requestOptions);
    //         await new Promise((resolve) => setTimeout(resolve, 100));
    //     });

    //     await act(async () => {
    //         const blockquoteElement = screen.getByTestId('quote-text');
    //         expect(blockquoteElement).toBeInTheDocument();
    //     });
    // });

    // // Test #5: Verifica si se obtiene correctamente los datos del clima de una ciudad desde la API de OpenWeatherMap.
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
});
