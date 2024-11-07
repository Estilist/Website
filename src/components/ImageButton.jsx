import PropTypes from 'prop-types';
import React from 'react';

const ImageButton = ({ imageSrc, isSelected, onClick }) => {
    const buttonStyle = {
        border: isSelected ? '3px solid var(--boton)' : '2px solid transparent', 
        borderRadius: '8px',
        padding: '5px',
        cursor: 'pointer',
        width: '100px',
        height: '100px',
        objectFit: 'cover',
        boxShadow: isSelected ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
    };

    return (
        <img
            src={imageSrc}
            alt="Estilo de ropa"
            style={buttonStyle}
            onClick={onClick}
        />
    );
};

ImageButton.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    isSelected: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
};

export default ImageButton;
