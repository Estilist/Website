import PageTitle from "../components/PageTitle";
import exampleImage from "../assets/photos/pantalon.png";
import starFill from "../assets/icons/star-fill.svg"; 
import starEmpty from "../assets/icons/star.svg";    
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import { useState } from "react";

const RecommendationPage = () => {
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
                    <PrimaryButton type="submit">
                        Aceptar
                    </PrimaryButton>
                </div>
                <div className="secondaryButton">
                    <SecondaryButton onClick={() => {navigate("/login")}}>
                        Reformular
                    </SecondaryButton>
                </div>
            </div>    
        </div>
    );
};

export default RecommendationPage;
