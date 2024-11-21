import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import PropTypes from 'prop-types';
import PrimaryButton from "../buttons/PrimaryButton";
import StarRating from "../StarRating";

const FeedbackModal = ({ show, onHide }) => { 
    const [filledStars, setFilledStars] = useState(0);

    useEffect(() => {
        if (!show) {
            setFilledStars(0);
        }
    }, [show]);

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
                <p className="feedback-text"> ¿Cómo te están pareciendo las recomendaciones de la app</p>
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
};

export default FeedbackModal;