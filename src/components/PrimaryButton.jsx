import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const PrimaryButton = ({ type, size, onClick, children }) => {
    const customStyles = {
        backgroundColor: 'var(--boton)',
        color: 'var(--blanco)',
        padding: '10px 10px',
        width: '100%',
        fontFamily: 'var(--boton-font)',
        border: 'none',
        fontSize: '21px',
        boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '18px',
    };

    return (
        <Button type={type} size={size} onClick={onClick} style={customStyles}>
            {children}
        </Button>
    );
};

PrimaryButton.propTypes = {
    type: PropTypes.string,
    size: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node,
};

export default PrimaryButton;