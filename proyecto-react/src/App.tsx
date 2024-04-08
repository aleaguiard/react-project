import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import DateComponent from './pages/DateComponent';
import QuotePage from './pages/QuotePage';

function App() {
    return (
        // <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/date" element={<DateComponent />} />
            <Route path="/quote" element={<QuotePage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        // </Router>
    );
}

export default App;
