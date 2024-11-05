import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const LilacButton = ({ size, onClick, children, className }) => {
    const customStyles = {
        backgroundColor: 'var(--iconos)',
        color: 'var(--encabezado)',
        padding: '10px 10px',
        fontFamily: 'var(--texto-font)',
        border: 'none',
        fontSize: '21px',
        boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '18px',
        width: '280px',
        textAlign: 'center',
    };

    return (
        <Button size={size} onClick={onClick} style={customStyles} className={className}>
            {children}
        </Button>
    );
};

LilacButton.propTypes = {
    size: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node,
    className: PropTypes.string,
};

export default LilacButton;
