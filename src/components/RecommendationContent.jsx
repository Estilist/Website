import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StarRating from "./StarRating";
import request from "../api";
import { Spinner } from "react-bootstrap";
import FeedbackModal from "./extras/FeedbackModal";
import PrimaryButton from "./buttons/PrimaryButton";
import { useSession } from "../contexts/SessionContext";
import { useLocation, useNavigate } from "react-router-dom";

const feedbackThreshold = 30;

const RecommendationContent = ({ refreshKey }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const selectedEvent = location.state?.selectedEvent || null;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageUrl, setImageUrl] = useState("");
    const [imageTags, setImageTags] = useState([]);
    const [starRating, setStarRating] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [currentRecommendationId, setCurrentRecommendationId] = useState(null);
    const { session } = useSession();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const payload = { 
                idusuario: session.id,
                evento: selectedEvent
            };
            console.log(payload);

            const r = await request(`/user-recomendation/`, "POST", payload, true);
            console.log(r);

            setImageUrl(r.img);
            setCurrentRecommendationId(r.id);

            const estilo = r.etiquetas.Estilo[0];
            const temporada = r.etiquetas.Temporada[0];
            const tags = [];
            if (estilo) tags.push(estilo);
            if (temporada) tags.push(temporada);
            setImageTags(tags);
            setLoading(false);
        };
        fetchData();
    }, [currentIndex, session.id, selectedEvent, refreshKey]);

    const hideModal = () => {
        setShowModal(false);
    };

    const handleAccept = async () => {
        if (starRating === 0) {
            return;
        }

        if (currentRecommendationId) {
            try {
                await request("/rank-recomendation/", "POST", {
                    "idusuario": session.id,
                    "idrecomendacion": currentRecommendationId,
                    "ranking": starRating
                }, true);
            } catch (error) {
                console.error("Error ranking recommendation:", error);
            }
        }

        setStarRating(0);
        if ((currentIndex + 1) % feedbackThreshold === 0)
            setShowModal(true);

        if (selectedEvent) {
            navigate('/');
        } else {
            setCurrentIndex(prevIndex => prevIndex + 1);
        }
        
    };

    return (
        <>  
            <div className="recommendation-content">
                <AnimatePresence>
                    {!loading && (
                        <motion.div
                            key={currentIndex}
                            className="recommendation-card"
                            initial={{ x: 250, opacity: 0, rotate: 20 }}
                            animate={{ x: 0, opacity: 1, rotate: 0 }}
                            exit={{ x: -250, opacity: 0, rotate: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="image-wrapper">
                                <img
                                    src={imageUrl}
                                    alt="contenido recomendado"
                                    className="product-image"
                                />
                            </div>
                            <div className="carousel-caption-below">
                                <div className="carousel-divider"></div>
                                {imageTags.map((tag, index) => (
                                    <p key={index} className="carousel-tag">{tag}</p>
                                ))}
                            </div>
                        </motion.div>
                    )}
                    {loading && (
                        <div className="loading-spinner">
                            <Spinner animation="border" />
                        </div>
                    )}
                </AnimatePresence>
            </div>

            <StarRating starRating={starRating} setStarRating={setStarRating} />
        
            <div className="recommendation-buttons">
                <div className="recommendation-PB">
                    <PrimaryButton onClick={imageUrl && !loading ? handleAccept : undefined}>
                        Aceptar
                    </PrimaryButton>
                </div>
            </div>

            <FeedbackModal 
                show={showModal}
                onHide={hideModal}
                idusuario={`${session.id}`}
            />
        </>
    );
};

export default RecommendationContent;