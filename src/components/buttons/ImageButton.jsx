import PropTypes from 'prop-types';

const ImageButton = ({ imageSrc, isSelected, onClick, title }) => {
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
            alt={title} 
            style={buttonStyle}
            onClick={onClick}
            title={title}
        />
    );
};

ImageButton.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    isSelected: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,  
};

export default ImageButton;
