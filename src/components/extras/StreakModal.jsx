import { Modal } from "react-bootstrap";
import PageTitle from "./PageTitle";
import PropTypes from "prop-types";
import SecondaryButton from "../buttons/SecondaryButton";

const StreakModal = ({ show, onHide }) => {
    const streakDays = 8;

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton />
            <Modal.Body className="streak-modal-body">
                <PageTitle>¡Felicidades!</PageTitle>
                <p className="streak-modal-subtitle">
                    Desbloqueaste una racha de
                </p>
                <div className="streak-modal">
                    <div className="streak-modal-number">
                        {streakDays}
                    </div>
                    <div className="streak-modal-days">
                        <p>días</p>
                    </div>
                </div>
                <p className="streak-modal-text">
                    Sigue conectándote diario para extender tu racha. ¡Estás haciendo un gran trabajo!
                </p>
            </Modal.Body>
            <Modal.Footer style={{ display: "flex", justifyContent: "center" }}>
                <div className="modal-SB">
                    <SecondaryButton type="close" onClick={onHide}>
                        Aceptar
                    </SecondaryButton>
                </div>
            </Modal.Footer>
        </Modal>
    );
};

StreakModal.propTypes = {
    show: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired,
};

export default StreakModal;