import { Link } from 'react-router-dom';
import Button from '../components/Button/Button';

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/date">
                <Button> Date </Button>
            </Link>
            <br />
            <br />
            <Link to="/quote">
                <Button> Quote </Button>
            </Link>
            <br />
            <br />
            <Button
                onClick={() => {
                    throw new Error('PRUEBA ERROR SENTRY');
                }}
            >
                Send Error to Sentry
            </Button>
        </div>
    );
}

export default Home;
