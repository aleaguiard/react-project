import './Navigation.css';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import NavigationProps from '../../types/INavigation';

const Navigation: React.FC<NavigationProps> = ({ currentPage }) => {
    return (
        <div className="navigation-container">
            {currentPage !== '/' && (
                <Link to="/" className={`nav-link`}>
                    <Button>Home</Button>
                </Link>
            )}
            <Link
                to="/weather"
                className={`nav-link ${currentPage === 'weather' ? 'active' : ''}`}
            >
                <Button>Weather</Button>
            </Link>
            <Link
                to="/date"
                className={`nav-link ${currentPage === 'date' ? 'active' : ''}`}
            >
                <Button>Date</Button>
            </Link>
            <Link
                to="/quote"
                className={`nav-link ${currentPage === 'quote' ? 'active' : ''}`}
            >
                <Button>Quote</Button>
            </Link>
        </div>
    );
};

export default Navigation;
