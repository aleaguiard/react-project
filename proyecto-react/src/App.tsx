import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { LazyWeatherPage, LazyQuotePage } from './constants';
import NotFound from './pages/NotFound';
import DateComponent from './pages/DateComponent';
import { getQuoteService1 } from './api/QuoteAPI/ApiQuoteService';
import { getImageService, getWeatherService } from './api/ApiWeatherService';
import { Navbar } from './components/NavBar/Navbar';
import { LoginPage } from './auth/pages/LoginPage';
import { AuthProvider } from './auth/context/AuthProvider';
import PrivateRoute from './router/PrivateRoute';

function App() {
    return (
        <>
            <AuthProvider>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/date" element={<DateComponent />} />
                    <Route
                        path="/quote"
                        element={
                            <PrivateRoute
                                children={
                                    <LazyQuotePage
                                        quoteService={getQuoteService1()}
                                    />
                                }
                            />
                        }
                    />
                    <Route
                        path="/weather"
                        element={
                            <PrivateRoute
                                children={
                                    <LazyWeatherPage
                                        weatherService={getWeatherService()}
                                        imageService={getImageService()}
                                    />
                                }
                            />
                        }
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </AuthProvider>
        </>
    );
}

export default App;
