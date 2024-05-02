import { lazy } from 'react';
import { quoteService1, quoteService2 } from './api/QuoteAPI/ApiQuoteService';
import {
    weatherService as _weatherService,
    imageService as _imageService,
} from './api/ApiWeatherService';

// Importación de los componentes
const LazyWeatherPage = lazy(() => import('./pages/WeatherPage'));
const LazyQuotePage = lazy(() => import('./pages/QuotePage'));

// Exportar las constantes
export const isLogged = true;
export const quoteServices = [quoteService1, quoteService2];
export const weatherService = _weatherService;
export const imageService = _imageService;
export { LazyWeatherPage, LazyQuotePage };
