import { useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";
import SecondaryButton from '../components/SecondaryButton';
import { useNavigate } from "react-router-dom";
import { useSession } from "../contexts/SessionContext";
import LoadingPage from "./LoadingPage";

import body_atletico from '../assets/photos/body/atletico.jpg'
import body_ovalo from '../assets/photos/body/ovalo.png';
import body_rectangulo from '../assets/photos/body/rectangulo.png';
import body_reloj_arena from '../assets/photos/body/reloj-arena.png';
import body_triangulo_invertido from '../assets/photos/body/triangulo-invertido.png';
import body_triangulo from '../assets/photos/body/triangulo.png';

import face_redondo from '../assets/photos/face/redonda.jpg';
import face_cuadrado from '../assets/photos/face/cuadrada.jpg';
import face_alargado from '../assets/photos/face/alargada.jpg';
import face_corazon from '../assets/photos/face/corazon.jpg';
import face_ovalado from '../assets/photos/face/ovalada.jpg';
import request from "../api";

const bodyImages = {
    // Hombres
    "Reloj de arena": body_reloj_arena,
    "Rectángulo": body_rectangulo,
    "Triángulo invertido (V)": body_triangulo_invertido,
    "Ovalado (Manzana)": body_ovalo,
    "Trapecio (Triangular)": body_triangulo,
    "Átletico": body_atletico,

    // Mujeres
    // "Reloj de arena": body_reloj_arena,
    "Rectangular": body_rectangulo,
    "Triángulo (Pera)": body_triangulo,
    "Triángulo invertido": body_triangulo_invertido,
    // "Ovalado (Manzana)": body_ovalo,
    // "Átletico": body_atletico,
};

const faceImages = {
    "Redondo": face_redondo,
    "Cuadrado": face_cuadrado,
    "Alargado": face_alargado,
    "Corazón": face_corazon,
    "Ovalado": face_ovalado,
};

const ResultsPage = () => {
    const navigate = useNavigate();
    const { session } = useSession();
    const [results, setResults] = useState(null);

    // On page load, set initial values for the form
    useEffect(() => {
        async function fetchData() {
            const data = await request(`/users/${session.id}/`, 'GET');
            
            // if (data.tiporostro === null) {
            //     navigate('/upload-image');
            //     return;
            // }

            if (data.tipocuerpo === null) {
                navigate('/measurements');
                return;
            }

            setResults({
                bodyType: data.tipocuerpo,
                faceType: data.tiporostro,
                bodyImage: bodyImages[data.tipocuerpo],
                faceImage: faceImages[data.tiporostro],
            })
        }
        fetchData();
    }, []);

    if (results === null) {
        return (
            <LoadingPage />
        );
    }

    return (
        <div className="results-page">
            <PageTitle>¡Tus resultados!</PageTitle>

            <div className="results-content">
            {/* Tipo de cuerpo */}
            <div className="result-section">
                <label className="results-label">Tu tipo de cuerpo es:</label>
                    <div className="result-info">
                        <img src={results.bodyImage} alt={results.bodyType} className="result-image" />
                    </div>
                    <div className="result-info">
                        <p className="result-description">Debido a tus medidas y proporciones corporales asumimos que eres un:</p>
                        <div className="result-text-box">
                            <p className="result-type">{results.bodyType}</p>
                        </div>
                    </div>         
            </div>

            {/* Tipo de rostro */}
            <div className="result-section">
                <label className="results-label">Tu tipo de rostro es:</label>
                <div className="result-info">
                    <img src={results.faceImage} alt={results.faceType} className="result-image" />
                </div>
                <div className="result-info"> 
                    <p className="result-description">Tu fotografía nos indica que tienes un rostro de tipo:</p>
                    <div className="result-text-box">
                        <p className="result-type">{results.faceType}</p>
                    </div>
                </div>
            </div>
        </div>

            {/* Siguiente */}
            <div className="secondaryButton4">
                <SecondaryButton onClick={() => navigate('/measurements')}>
                    Siguiente
                </SecondaryButton>
            </div>
        </div>
    );
};

export default ResultsPage;
