import { Modal, Button } from "react-bootstrap";

const GuideMessureModal = ({ show, onHide, content }) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Guía de Medidas
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Instrucciones</h4>
                <p>{content}</p> {/* Aquí se muestra el contenido dinámico */}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Cerrar</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default GuideMessureModal;
