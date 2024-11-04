import PageTitle from "../components/PageTitle";
import SecondaryButton from '../components/SecondaryButton';
import BodyImage from "../assets/photos/body/reloj-arena.png";
import FaceImage from "../assets/photos/face/ovalada.png";
import { useNavigate } from "react-router-dom";

// datos simulados
const simulatedResults = {
    bodyType: "Reloj de arena",
    faceType: "Ovalada",
    bodyImage: BodyImage,
    faceImage: FaceImage
};

const ResultsPage = () => {
    const navigate = useNavigate();

    return (
        <div className="results-page">
            <PageTitle>¡Tus resultados!</PageTitle>
            
            <div className="results-content">
            {/* Tipo de cuerpo */}
            <div className="result-section">
                <label className="results-label">Tu tipo de cuerpo es:</label>
                    <div className="result-info">
                        <img src={simulatedResults.bodyImage} alt={simulatedResults.bodyType} className="result-image" />
                    </div>
                    <div className="result-info">
                        <p className="result-description">Debido a tus medidas y proporciones corporales asumimos que eres un:</p>
                        <div className="result-text-box">
                            <p className="result-type">{simulatedResults.bodyType}</p>
                        </div>
                    </div>         
            </div>

            {/* Tipo de rostro */}
            <div className="result-section">
                <label className="results-label">Tu tipo de rostro es:</label>
                <div className="result-info">
                    <img src={simulatedResults.faceImage} alt={simulatedResults.faceType} className="result-image" />
                </div>
                <div className="result-info"> 
                    <p className="result-description">Tu fotografía nos indica que tienes un rostro de tipo:</p>
                    <div className="result-text-box">
                        <p className="result-type">{simulatedResults.faceType}</p>
                    </div>
                </div>
            </div>
        </div>

            {/* Siguiente */}
            <div className="secondaryButton4">
                <SecondaryButton onClick={() => navigate('/')}>
                    Siguiente
                </SecondaryButton>
            </div>
        </div>
    );
};

export default ResultsPage;
