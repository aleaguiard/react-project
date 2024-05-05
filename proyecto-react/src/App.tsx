import { Navbar } from './components/NavBar/Navbar';
import { AuthProvider } from './auth/context/AuthProvider';
import { AppRouter } from './router/AppRouter';

function App() {
    return (
        <AuthProvider>
            <Navbar />
            <AppRouter />
        </AuthProvider>
    );
}

export default App;
