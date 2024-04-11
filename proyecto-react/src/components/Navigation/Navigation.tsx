import './Navigation.css';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import NavigationProps from '../../types/INavigation';

const Navigation: React.FC<NavigationProps> = ({ currentPage }) => {
    const pages = [
        { path: '/', label: 'Home' },
        { path: '/weather', label: 'Weather' },
        { path: '/date', label: 'Date' },
        { path: '/quote', label: 'Quote' },
    ];

    return (
        <div className="navigation-container">
            {pages.map(
                ({ path, label }) =>
                    currentPage !== path && (
                        <Link
                            key={path}
                            to={path}
                            className={`nav-link ${currentPage === path ? 'active' : ''}`}
                        >
                            <Button>{label}</Button>
                        </Link>
                    ),
            )}
        </div>
    );
};

export default Navigation;
