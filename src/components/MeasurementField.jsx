import PropTypes from 'prop-types';

const MeasurementField = ({ label, name, type, placeholder, value, onChange, error }) => (
    <div className="form-group">
        <label htmlFor={name}>{label}:</label>
        <input
            type={type}
            id={name}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="form-control"
        />
        {error && <small className="error-message text-danger">{error}</small>}
    </div>
);

MeasurementField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
};

export default MeasurementField;