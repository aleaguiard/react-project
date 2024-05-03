import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/', {
            replace: true,
        });
    };

    return (
        <nav className="navBar">
            <div className="elementsNav">
                <span className="nameLogin">Alejandro</span>
                <button className="btnLogout" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </nav>
    );
};
