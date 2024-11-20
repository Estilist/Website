import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StarRating from "./StarRating";
import request from "../api";
import { Spinner } from "react-bootstrap";
import PrimaryButton from "./buttons/PrimaryButton";

const recommendations = [
    { url: "src\\assets\\photos\\ejemplos\\bolsa.png", etiquetas: ["Clásico"] },
    { url: "src\\assets\\photos\\ejemplos\\camiseta.png", etiquetas: ["Casual", "Básico"] },
    { url: "src\\assets\\photos\\ejemplos\\chaqueta.png", etiquetas: ["Invierno"] },
    { url: "src\\assets\\photos\\ejemplos\\falda.png", etiquetas: ["Otoño", "Boho"] },
    { url: "src\\assets\\photos\\ejemplos\\pantalon.png", etiquetas: ["Casual"] },
];

const RecommendationContent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageUrl, setImageUrl] = useState("");
    const [imageTags, setImageTags] = useState([]);
    const [starRating, setStarRating] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const r = recommendations[currentIndex];
            setImageUrl(r.url);
            setImageTags(r.etiquetas);
        };
        fetchData();
    }, [currentIndex]);

    const handleAccept = () => {
        if (starRating === 0) {
            return;
        }

        setCurrentIndex((currentIndex + 1) % recommendations.length);
        setStarRating(0);
    };

    return (
        <>  
            <div className="recommendation-content">
                <AnimatePresence>
                    <motion.div
                        key={currentIndex}
                        className="recommendation-card"
                        initial={{ x: 250, opacity: 0, rotate: 20 }}
                        animate={{ x: 0, opacity: 1, rotate: 0 }}
                        exit={{ x: -250, opacity: 0, rotate: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {imageUrl ? (
                            <>
                            <img
                                src={imageUrl}
                                alt="contenido recomendado"
                                className="product-image"
                            />
                            <div className="carousel-caption-below">
                                <div className="carousel-divider"></div>
                                {imageTags.map((tag, index) => (
                                    <p key={index} className="carousel-tag">{tag}</p>
                                ))}
                            </div>
                            </>
                            ) : (
                                <div className="product-spinner">
                                <Spinner />
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

            </div>

            <StarRating starRating={starRating} setStarRating={setStarRating} />
        
            <div className="recommendation-buttons">
                <div className="recommendation-PB">
                    <PrimaryButton onClick={handleAccept}>
                        Aceptar
                    </PrimaryButton>
                </div>
            </div>
        </>
    );
};

export default RecommendationContent;