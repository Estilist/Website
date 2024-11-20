import { useState, useEffect } from "react";
import StarRating from "./StarRating";
import request from "../api";
import { Spinner } from "react-bootstrap";

const RecommendationContent = () => {
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        const fetchData  = async () => {
            const r = {
                url: "src\\assets\\photos\\pantalon.png"
            }

            // r = await request("/get-recommendation/", "GET", null, false);
            setImageUrl(r.url);
        };
        fetchData();
    }, []);

    return (
        <div className="recommendation-content">
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