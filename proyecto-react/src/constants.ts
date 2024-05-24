import { lazy } from 'react';

const LazyWeatherPage = lazy(() => import('./pages/WeatherPage'));
const LazyQuotePage = lazy(() => import('./pages/QuotePage'));

export { LazyWeatherPage, LazyQuotePage };
