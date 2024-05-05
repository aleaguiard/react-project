import Navigation from '../components/Navigation/Navigation';

function NotFound() {
    return (
        <div>
            <h1>404 - Page not found</h1>
            <img
                decoding="async"
                id="gif"
                src="https://midu.dev/images/this-is-fine-404.gif"
                style={{
                    width: '300px',
                    height: 'auto',
                    borderRadius: '10px',
                    padding: '10px',
                }}
            ></img>
            <Navigation currentPage="/notfound" />
        </div>
    );
}

export default NotFound;
