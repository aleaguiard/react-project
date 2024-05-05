import { Routes, Route } from 'react-router-dom';
import { getWeatherService, getImageService } from '../api/ApiWeatherService';
import { getQuoteService1 } from '../api/QuoteAPI/ApiQuoteService';
import { LoginPage } from '../auth/pages/LoginPage';
import { LazyQuotePage, LazyWeatherPage } from '../constants';
import DateComponent from '../pages/DateComponent';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<PublicRoute element={<Home />} />} />
            <Route
                path="/login"
                element={<PublicRoute element={<LoginPage />} />}
            />
            <Route
                path="/date"
                element={<PublicRoute element={<DateComponent />} />}
            />
            <Route
                path="/quote"
                element={
                    <PrivateRoute>
                        <LazyQuotePage quoteService={getQuoteService1()} />
                    </PrivateRoute>
                }
            />
            <Route
                path="/weather"
                element={
                    <PrivateRoute>
                        <LazyWeatherPage
                            weatherService={getWeatherService()}
                            imageService={getImageService()}
                        />
                    </PrivateRoute>
                }
            />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
