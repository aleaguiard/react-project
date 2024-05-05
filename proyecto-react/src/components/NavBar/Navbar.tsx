import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';

export const Navbar = () => {
    const { user, logout, logged } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login', {
            replace: true,
        });
    };
    const handleClick = () => {
        if (location.pathname === '/login') {
            navigate('/', {
                replace: true,
            });
        } else {
            navigate('/login', {
                replace: true,
            });
        }
    };

    return (
        <nav className="nav-bar">
            <div className="elements-nav">
                <span className="name-login">{user?.name}</span>
                {logged ? (
                    <button className="btn-logout" onClick={handleLogout}>
                        Logout
                    </button>
                ) : (
                    <button className="btn-login" onClick={handleClick}>
                        {location.pathname === '/login' ? 'Home' : 'Login'}{' '}
                    </button>
                )}
            </div>
        </nav>
    );
};
