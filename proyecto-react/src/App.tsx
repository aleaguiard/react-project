import { Routes, Route } from 'react-router-dom';
import DateComponent from './pages/DateComponent';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import QuotePage from './pages/QuotePage';
import WeatherPage from './pages/WeatherPage';
import { weatherService, imageService } from './api/ApiWeatherService';
import { quoteService1, quoteService2 } from './api/QuoteAPI/ApiQuoteService';
import { Service } from './api/Interfaces/IService';
import Quote from './types/IQuote';

function App() {
    const quoteServices: Service<Quote[]>[] = [quoteService1, quoteService2];
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/date" element={<DateComponent />} />
            <Route
                path="/quote"
                element={<QuotePage quoteService={quoteServices} />}
            />
            <Route
                path="/weather"
                element={
                    <WeatherPage
                        weatherService={weatherService}
                        imageService={imageService}
                    />
                }
            />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
