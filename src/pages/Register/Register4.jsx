import PageTitle from "../../components/extras/PageTitle";
import SecondaryButton from '../../components/buttons/SecondaryButton';
import FaceImage from '../../assets/photos/rostro.png';
import Form from 'react-bootstrap/Form';
import { FaTimes } from 'react-icons/fa';
import { Spinner } from 'react-bootstrap';
import { useState } from 'react';
import PropTypes from 'prop-types';
import * as faceapi from 'face-api.js';

const Register4 = ({ setFieldValue, file, setFile, error, loading, setLoading }) => {
    const [fileName, setFileName] = useState('Ningún archivo seleccionado');

    const handleFileChange = async (event) => {
        setFieldValue('file', null);
        setFile(null);
        const selectedFile = event.target.files[0];

        if (selectedFile) {
            setLoading(true);
            
            try {
                if (selectedFile.size > 2 * 1024 * 1024) {
                    setFieldValue('file', null);
                    setFile(null);
                    return;
                }

                const img = new Image();
                img.src = URL.createObjectURL(selectedFile);
                img.onload = async () => {
                    if (img.width < 400 || img.height < 400) {
                        setFieldValue('file', null);
                        setFile(null);
                        return;
                    }

                    await faceapi.nets.tinyFaceDetector.loadFromUri('/models');

                    const detections = await faceapi.detectAllFaces(img, new faceapi.TinyFaceDetectorOptions());
                    if (detections.length !== 1) {
                        setFieldValue('file', null);
                        setFile(null);
                        return;
                    }

                    setFile(selectedFile);
                    setFileName(selectedFile.name);
                    setFieldValue('file', selectedFile);
                };
            } catch (error) {
                console.error('Error al procesar la imagen:', error);
            } finally {
                setLoading(false);
            }
        }
    };

    const handleRemoveFile = () => {
        setFile(null);
        setFileName('Ningún archivo seleccionado');
        setFieldValue('file', null);
    };

    return (
        <div className="upload-image-page">
            <PageTitle>Ingresa tu rostro</PageTitle>

            <div className="UploadImageForm">
                <label htmlFor="recomendation" className="recommendation-label">Recomendación:</label>

                <img src={FaceImage} alt="Rostro" className="face-image" />

                <label htmlFor="uploadimage" className="uploadimage-label">Subir Imagen:</label>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control 
                        type="file" 
                        onChange={handleFileChange}
                        className="file-input" 
                        style={{ display: 'none' }} 
                        accept="image/*"
                    />
                    <button 
                        type="button" 
                        onClick={() => document.getElementById('formFile').click()}
                        className="form-control"
                    >
                        Seleccionar archivo
                    </button>
                </Form.Group>
                <div className="file-info">
                    <p className="file-name-text">{fileName}</p>
                    {file && (
                        <button 
                            type="button" 
                            onClick={handleRemoveFile}
                            className="remove-file-button"
                        >
                            <FaTimes />
                        </button>
                    )}
                </div>
                {error && <small className="error-message text-danger">{error}</small>}

                <hr />
            </div>
            <div className="secondaryButton3">
            {loading ? (
                    <SecondaryButton disabled>
                        <Spinner animation="border" size="sm" />
                    </SecondaryButton>
                ) : (
                    <SecondaryButton type="submit">
                        Analizar
                    </SecondaryButton>
                )}
            </div>
        </div>
    );
};

Register4.propTypes = {
    setFieldValue: PropTypes.func.isRequired,
    file: PropTypes.object,
    setFile: PropTypes.func.isRequired,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    setLoading: PropTypes.func.isRequired
};

export default Register4;