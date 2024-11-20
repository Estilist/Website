import { useState, useEffect } from "react";
import StarRating from "./StarRating";
import request from "../api";
import { Spinner } from "react-bootstrap";

const recommendations = [
    { url: "src\\assets\\photos\\pantalon.png" },
    { url: "src\\assets\\photos\\cadera.png" },
    { url: "src\\assets\\photos\\rostro.png" },
];

const RecommendationContent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageUrl, setImageUrl] = useState("");
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const r = recommendations[currentIndex];
            setImageUrl(r.url);
        };
        fetchData();
    }, [currentIndex]);

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        if (distance > 50) {
            setCurrentIndex((prev) => (prev < recommendations.length - 1 ? prev + 1 : prev));
        } else if (distance < -50) {
            setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
        }
        setTouchStart(null);
        setTouchEnd(null);
    };

    return (
        <div
            className="recommendation-content"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div className="recommendation-card">
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
            </div>

            <StarRating />
        </div>
    );
};

export default RecommendationContent;