import { Modal } from "react-bootstrap";
import PageTitle from "./PageTitle";
import PropTypes from 'prop-types';
import SecondaryButton from "../buttons/SecondaryButton";

const GuideMessureModal = ({ show, onHide, content, imagePath }) => { 
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton />
            <Modal.Body>
                <PageTitle> Guía de Medidas </PageTitle>
                <p>{content}</p>
                {imagePath && <img src={imagePath} alt="Guía de Medida" style={{ width: '100%' }} />}
            </Modal.Body>
            <Modal.Footer style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="modal-SB">
                    <SecondaryButton type="close" onClick={onHide}>
                        Regresar
                    </SecondaryButton>
                </div>
            </Modal.Footer>
        </Modal>
    );
};

GuideMessureModal.propTypes = {
    show: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired,
    content: PropTypes.string.isRequired,
    imagePath: PropTypes.string,
};

export default GuideMessureModal;
