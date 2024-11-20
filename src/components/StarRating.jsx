import { useState } from "react";
import starFill from "../assets/icons/star-fill.svg"; 
import starEmpty from "../assets/icons/star.svg";

const StarRating = () => {
    const [filledStars, setFilledStars] = useState(0);

    const handleStarClick = (index) => {
        if (index < filledStars) {
            setFilledStars(index);
        } else {
            setFilledStars(index + 1);
        }
    };

    return (
        <div className="stars">
            {[...Array(5)].map((_, index) => (
                <img
                    key={index}
                    src={index < filledStars ? starFill : starEmpty}
                    alt={`Estrella ${index + 1}`}
                    className="star-icon"
                    onClick={() => handleStarClick(index)}
                />
            ))}
        </div>
    );
};

export default StarRating;