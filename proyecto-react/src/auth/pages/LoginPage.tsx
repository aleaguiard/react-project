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

    const handleClick = () => {
        navigate('/');
    };

    return (
        <div className="container-form">
            <Toaster />
            <h1 className="title">Login</h1>
            <form className="form-wrapper" onSubmit={handleSubmit}>
                <div className="input-group">
                    <label className="label-username" htmlFor="username">
                        Username
                    </label>
                    <input
                        className="input-username"
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        disabled={logged}
                    />
                </div>
                <div className="input-group">
                    <label className="label-pwd" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="input-pwd"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={logged}
                    />
                </div>
                {logged ? (
                    <Button onClick={handleClick}>Home</Button>
                ) : (
                    <Button>Login</Button>
                )}{' '}
            </form>
        </div>
    );
};
