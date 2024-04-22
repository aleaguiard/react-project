import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import DateComponent from './pages/DateComponent';
import QuotePage from './pages/QuotePage';
import WeatherPage from './pages/WeatherPage';
import { quoteService1 } from './api/QuoteAPI/services';
// import { quoteService2 } from './api/QuoteAPI/services';

function App() {
    return (
        // <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/date" element={<DateComponent />} />
            <Route
                path="/quote"
                element={<QuotePage quoteService={quoteService1} />}
            />
            <Route path="/weather" element={<WeatherPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        // </Router>
    );
}

export default App;
