import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';

export const Navbar = () => {
    const { user } = useContext(AuthContext);
    console.log(user);

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login', {
            replace: true,
        });
    };

    return (
        <nav className="navBar">
            <div className="elementsNav">
                <span className="nameLogin">{user?.name}</span>
                <button className="btnLogout" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </nav>
    );
};
