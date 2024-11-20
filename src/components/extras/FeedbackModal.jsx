import { useState } from "react";
import { Modal } from "react-bootstrap";
import PropTypes from 'prop-types';
import starFill from "../../assets/icons/star-fill.svg"; 
import starEmpty from "../../assets/icons/star.svg";  
import PrimaryButton from "../buttons/PrimaryButton";

const FeedbackModal = ({ show, onHide, }) => { 
    const [filledStars, setFilledStars] = useState(0);

    const handleStarClick = (index) => {
        if (index < filledStars) {
            setFilledStars(index);
        } else {
            setFilledStars(index + 1);
        }
    };
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby = "contained-modal-title-vcenter"
            centered
            dialogClassName = "custom-modal"
        >
            <Modal.Header closeButton />
            <Modal.Body>
                <p className="feedback-text"> ¿Cómo te están</p>
                <p className="feedback-text"> pareciendo las</p>
                <p className="feedback-text"> recomendaciones</p>
                <p className="feedback-text"> de la app?</p>
                <div className="feedback-stars">
                    {[...Array(5)].map((_, index) => (
                        <img
                            key={index}
                            src={index < filledStars ? starFill : starEmpty}
                            alt={`Estrella ${index + 1}`}
                            className="feedback-star-icon"
                            onClick={() => handleStarClick(index)}
                        />
                    ))}
                </div>
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