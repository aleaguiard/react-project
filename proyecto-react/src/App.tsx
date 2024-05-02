import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense } from 'react';
import Home from './pages/Home';
import { LazyWeatherPage, LazyQuotePage, isLogged } from './constants';
import NotFound from './pages/NotFound';
import DateComponent from './pages/DateComponent';
import { getQuoteService1 } from './api/QuoteAPI/ApiQuoteService';
import { getImageService, getWeatherService } from './api/ApiWeatherService';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/date" element={<DateComponent />} />
            <Route
                path="/quote"
                element={
                    isLogged ? (
                        <Suspense fallback={<p>Loading...</p>}>
                            <LazyQuotePage quoteService={getQuoteService1()} />
                        </Suspense>
                    ) : (
                        <Navigate to="/" />
                    )
                }
            />
            <Route
                path="/weather"
                element={
                    isLogged ? (
                        <Suspense fallback={<p>Loading...</p>}>
                            <LazyWeatherPage
                                weatherService={getWeatherService()}
                                imageService={getImageService()}
                            />
                        </Suspense>
                    ) : (
                        <Navigate to="/" />
                    )
                }
            />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
