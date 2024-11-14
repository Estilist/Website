import PropTypes from 'prop-types';
import QuestionIcon from '../../assets/icons/question-circle.svg';

const MeasurementSlider = ({ label, name, value, onChange, error, onIconClick }) => (
    <div className="form-group">
        <img 
            src={QuestionIcon} 
            alt="Icono de Pregunta" 
            className="icon-question" 
            onClick={onIconClick} 
        />
        <label htmlFor={name} className="subtitle1">{label}:</label>
        <div className="range-container">
            <input
                type="range"
                id={name}
                name={name}
                min={20}
                max={180}
                value={value}
                onChange={onChange}
                className="range-slider"
            />
            <span style={{minWidth: "40px"}}>{value} cm</span>
        </div>
        {error && <small className="invalid-feedback">{error}</small>}
    </div>
);

MeasurementSlider.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
    onIconClick: PropTypes.func.isRequired,
};

export default MeasurementSlider;