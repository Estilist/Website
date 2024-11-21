import { useState, useEffect, useRef } from "react";
import { Modal } from "react-bootstrap";
import PropTypes from 'prop-types';
import PrimaryButton from "../buttons/PrimaryButton";
import StarRating from "../StarRating";
import request from "../../api";

const FeedbackModal = ({ show, onHide, idusuario }) => {
    const [filledStars, setFilledStars] = useState(0);
    const prevShow = useRef(show);

    useEffect(() => {
        if (prevShow.current && !show) {
            // Post feedback when modal is closed
            const postFeedback = async () => {
                if (filledStars > 0) {
                    try {
                        console.log("Posting feedback with " + filledStars + " stars");
                        await request("/feedback/", "POST", {
                            "idusuario": idusuario,
                            "ranking": filledStars,
                        }, true);
                    } catch (error) {
                        console.error("Error posting feedback:", error);
                    }
                }
                setFilledStars(0);
            };
            postFeedback();
        }
        prevShow.current = show;
    }, [show, idusuario, filledStars]);

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            dialogClassName="custom-modal"
        >
            <Modal.Header closeButton />
            <Modal.Body>
                <p className="feedback-text"> ¿Cómo te están pareciendo las recomendaciones de la app?</p>
                <StarRating starRating={filledStars} setStarRating={setFilledStars} />
                <p className="feedback-thanks">
                    ¡Gracias!
                </p>
            </Modal.Body>
            <Modal.Footer style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="feedback-PB">
                    <PrimaryButton type="close" onClick={onHide}>
                        Cerrar
                    </PrimaryButton>
                </div>
            </Modal.Footer>
        </Modal>
    );
};

FeedbackModal.propTypes = {
    show: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired,
    idusuario: PropTypes.string.isRequired,
};

export default FeedbackModal;