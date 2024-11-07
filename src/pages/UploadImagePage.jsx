import PageTitle from "../components/PageTitle";
import SecondaryButton from '../components/SecondaryButton';
import FaceImage from '../assets/photos/rostro.png';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { Spinner } from 'react-bootstrap';
import { useState } from 'react';
import * as faceapi from 'face-api.js';
import { request, uploadToBlobStorage } from "../api";
import { useSession } from "../contexts/SessionContext";

const UploadImagePage = () => {
    const navigate = useNavigate();
    const { session } = useSession();

    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('Ningún archivo seleccionado');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleFileChange = async (event) => {
        setError('');

        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setLoading(true);

            // Realizar validaciones
            try {
                // Validar tamaño de la imagen	
                if (selectedFile.size > 2 * 1024 * 1024) {
                    setError('El tamaño de la imagen no debe exceder 2MB.');
                    return;
                }
    
                const img = new Image();
                img.src = URL.createObjectURL(selectedFile);
                img.onload = async () => {
                    // Validar dimensiones de la imagen
                    if (img.width < 400 || img.height < 400) {
                        setError('Las dimensiones mínimas de la imagen deben ser 400x400 px.');
                        return;
                    }
    
                    // Validar que la imagen contenga un rostro
                    await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
    
                    const detections = await faceapi.detectAllFaces(img, new faceapi.TinyFaceDetectorOptions());
                    if (detections.length !== 1) {
                        setError('La imagen debe contener únicamente un rostro.');
                        return;
                    }
    
                    setFile(selectedFile);
                    setFileName(selectedFile.name);
                    setError('');
                };
            } catch (error) {
                setError('Ocurrió un error al procesar la imagen.');
                console.error('Error al procesar la imagen:', error);
            } finally {
                setLoading(false);
            }
        }
    };

    const handleRemoveFile = () => {
        setFile(null);
        setFileName('Ningún archivo seleccionado');
        setError('');
    };

    const handleSubmit = async () => {
        if (!file) {
            setError('Debes seleccionar un archivo.');
            return;
        }

        try {
            // Upload image to Blob Storage
            const imageUrl = await uploadToBlobStorage(file);

            const formData = new FormData();
            formData.append('url', imageUrl);
            formData.append('idusuario', session.id);
            await request('/facial-recognition/', 'POST', formData, false);
        } catch (error) {
            console.error('Error al subir la imagen:', error);
            setError('Ocurrió un error al subir la imagen.');
        } finally {
            navigate('/measurements');
        }
    };

    return (
        <div className="upload-image-page">
            <PageTitle>Modificar Imagen</PageTitle>

            <form className="UploadImageForm">
                <label htmlFor="recomendation" className="recommendation-label">Ingresa una imagen nueva o selecciona tu imagen actual</label>

                {/* RECOMENDATION IMAGE */}
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

                {loading && (
                    <div className="loading-spinner my-3">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Cargando...</span>
                        </Spinner>
                    </div>
                )}

                <hr />
            </form>
            <div className="secondaryButton3">
                <SecondaryButton onClick={handleSubmit}>
                    Analizar
                </SecondaryButton>
            </div>
        </div>
    );
};

export default UploadImagePage;