import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';

export const Navbar = () => {
    const { user, logout, login, logged } = useContext(AuthContext);
    console.log(user);

    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login', {
            replace: true,
        });
    };

    const handleLogin = () => {
        login('User');
        navigate('/', {
            replace: true,
        });
    };

    return (
        <nav className="navBar">
            <div className="elementsNav">
                <span className="nameLogin">{user?.name}</span>
                {logged ? (
                    <button className="btnLogout" onClick={handleLogout}>
                        Logout
                    </button>
                ) : (
                    <button className="btnLogin" onClick={handleLogin}>
                        Login
                    </button>
                )}
            </div>
        </nav>
    );
};
