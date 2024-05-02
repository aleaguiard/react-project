import { lazy } from 'react';

// Importación de los componentes
const LazyWeatherPage = lazy(() => import('./pages/WeatherPage'));
const LazyQuotePage = lazy(() => import('./pages/QuotePage'));

// Exportar las constantes
export const isLogged = true;
export { LazyWeatherPage, LazyQuotePage };
