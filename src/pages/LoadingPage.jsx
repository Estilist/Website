import { Spinner } from 'react-bootstrap';

const LoadingPage = () => {
    const spinnerStyle = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) scale(1.5)',
        color: 'var(--iconos)'
    };
    
    return (
        <div className="spinner-container text-center" style={spinnerStyle}>
            <Spinner animation="border" />
        </div>
    )
}

export default LoadingPage;