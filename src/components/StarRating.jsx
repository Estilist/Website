import PropTypes from "prop-types";
import starFill from "../assets/icons/star-fill.svg"; 
import starEmpty from "../assets/icons/star.svg";

const StarRating = ({ starRating, setStarRating }) => {
    const handleStarClick = (index) => {
        setStarRating(index + 1);
    };

    return (
        <div className="stars">
            {[...Array(5)].map((_, index) => (
                <img
                    key={index}
                    src={index < starRating ? starFill : starEmpty}
                    alt={`Estrella ${index + 1}`}
                    className="star-icon"
                    onClick={() => handleStarClick(index)}
                />
            ))}
        </div>
    );
};

StarRating.propTypes = {
    starRating: PropTypes.number.isRequired,
    setStarRating: PropTypes.func.isRequired,
};

export default StarRating;