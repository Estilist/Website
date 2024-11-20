import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StarRating from "./StarRating";
import request from "../api";
import { Spinner } from "react-bootstrap";
import PrimaryButton from "./buttons/PrimaryButton";

const recommendations = [
    { url: "src\\assets\\photos\\pantalon.png" },
    { url: "src\\assets\\photos\\cadera.png" },
    { url: "src\\assets\\photos\\rostro.png" },
];

const RecommendationContent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageUrl, setImageUrl] = useState("");
    const [starRating, setStarRating] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const r = recommendations[currentIndex];
            setImageUrl(r.url);
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
                            <img
                                src={imageUrl}
                                alt="contenido recomendado"
                                className="product-image"
                                />
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