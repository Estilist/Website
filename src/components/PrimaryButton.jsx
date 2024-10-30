import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const PrimaryButton = ({ size, onClick, children }) => {
    const customStyles = {
        backgroundColor: 'var(--boton)',
        color: '#fff',
        padding: '10px 10px',
        fontFamily: 'var(--boton-font)',
        border: 'none',
        fontSize: '21px',
        boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)',
    };

    return (
        <Button size={size} onClick={onClick} style={customStyles}>
            {children}
        </Button>
    );
};

PrimaryButton.propTypes = {
    size: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node,
};

export default PrimaryButton;