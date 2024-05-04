import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { users } from '../../mocks/usersData';
import Button from '../../components/Button/Button';
import toast, { Toaster } from 'react-hot-toast';

export const LoginPage = () => {
    const { login, logged } = useContext(AuthContext);
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user = users.users.find((u) => u.nombre === username);
        if (user && user.password === password) {
            login(username, password);
            navigate('/');
        } else {
            toast.error('Credenciales incorrectas.');
        }
    };

    return (
        <div className="container mt-5">
            <Toaster />
            <h1>Login</h1>
            <div></div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                        Username
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {!logged && <Button>Login</Button>}{' '}
            </form>
        </div>
    );
};
