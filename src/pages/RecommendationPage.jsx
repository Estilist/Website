import PageTitle from "../components/extras/PageTitle";
import exampleImage from "../assets/photos/pantalon.png";
import starFill from "../assets/icons/star-fill.svg"; 
import starEmpty from "../assets/icons/star.svg";    
import PrimaryButton from "../components/buttons/PrimaryButton";
import SecondaryButton from "../components/buttons/SecondaryButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RecommendationPage = () => {
    const navigate = useNavigate();

    const [filledStars, setFilledStars] = useState(0);

    const handleStarClick = (index) => {
        if (index < filledStars) {
            setFilledStars(index);
        } else {
            setFilledStars(index + 1);
        }
    };

    return (
        <div className="recommendation-page">
            <div className="title">
                <PageTitle>¡Te tenemos esta opción!</PageTitle>
            </div>
            <div className = "recommendation-content">
                <img
                    src={exampleImage}
                    alt="contenido recomendado"
                    className="product-image"
                />
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
            </div>

            {/* Botones */}
            <div className="buttons">
                <div className="primaryButton">
                    <PrimaryButton onClick={() => {navigate("/")}}>
                        Aceptar
                    </PrimaryButton>
                </div>
                <div className="secondaryButton">
                    <SecondaryButton type="submit">
                        Reformular
                    </SecondaryButton>
                </div>
            </div>    
        </div>
    );
};

export default RecommendationPage;
