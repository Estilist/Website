import PageTitle from "../components/PageTitle";
import SecondaryButton from '../components/SecondaryButton';
import FaceImage from '../assets/photos/rostro.png';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const UploadImagePage = () => {
    const navigate = useNavigate();

    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('Ningún archivo seleccionado');

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            setFileName(selectedFile.name);
        }
    };

    const handleRemoveFile = () => {
        setFile(null);
        setFileName('Ningún archivo seleccionado');
        document.getElementById('formFile').value = null;
    };

    return (
        <div className="upload-image-page">
            <div className="title">
                <PageTitle>Ingresa tu rostro</PageTitle>   
            </div>
            <form className = "UploadImageForm">
                <label htmlFor="recomendation" className="recommendation-label">Recomendación:</label>

                {/* RECOMENDATION IMAGE */}
                <img src={FaceImage} alt="Rostro" className="face-image" />

                <label htmlFor="uploadimage" className="uploadimage-label">Subir Imagen:</label>

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control 
                        type="file" 
                        onChange={handleFileChange}
                        className="file-input" 
                        style={{ display: 'none' }} 
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
                <hr />
            </form>
            {/* Analizar */}
            <div className="secondaryButton3">
                <SecondaryButton onClick={() => navigate('/results')}>
                    Analizar
                </SecondaryButton>
            </div>
        </div>
    );
};

export default UploadImagePage;
