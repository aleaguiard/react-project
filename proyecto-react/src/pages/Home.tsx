import Button from '../components/Button/Button';
import Navigation from '../components/Navigation/Navigation';

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Button
                onClick={() => {
                    throw new Error('PRUEBA ERROR SENTRY');
                }}
            >
                Send Error to Sentry
            </Button>
            <br />
            <br />
            <Navigation currentPage="/" />
        </div>
    );
}

export default Home;
