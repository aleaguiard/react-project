import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense } from 'react';
import Home from './pages/Home';
import {
    LazyWeatherPage,
    LazyQuotePage,
    isLogged,
    quoteServices,
} from './constants';
import { weatherService, imageService } from './api/ApiWeatherService';
import NotFound from './pages/NotFound';
import DateComponent from './pages/DateComponent';

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
                            <LazyQuotePage quoteService={quoteServices[0]} />
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
                                weatherService={weatherService}
                                imageService={imageService}
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
