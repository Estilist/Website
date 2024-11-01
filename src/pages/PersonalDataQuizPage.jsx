import PageTitle from "../components/PageTitle";
import SecondaryButton from '../components/SecondaryButton';
import GuideMessureModal from "../components/GuideMessureModal"; // Asegúrate de importar tu componente modal
import QuestionIcon from '../assets/icons/question-circle.svg';
import { Form } from "react-bootstrap";
import { useState } from 'react';

const PersonalDataQuizPage = () => {
    const [chest, setChest] = useState(90); 
    const [waist, setWaist] = useState(75); 
    const [hips, setHips] = useState(90); 
    const [legs, setLegs] = useState(75); 
    const [modalShow, setModalShow] = useState(false); 
    const [modalContent, setModalContent] = useState("");

    {/* Sliders de cada parte */}
    const handleRangeChange = (event) => {
        const { name, value } = event.target; 
        switch (name) {
            case "chest":
                setChest(value);
                break;
            case "waist":
                setWaist(value);
                break;
            case "hips":
                setHips(value);
                break;
            case "legs":
                setLegs(value);
                break;
            default:
                break;
        }
    };

    {/* Contenido del modal depende la parte */}
    const handleIconClick = (content) => {
        setModalContent(content);
        setModalShow(true); 
    };

    return (
        <div>
            <div className="title">
                <PageTitle>Ingresa los siguientes datos:</PageTitle>   
            </div>
            <form className="DataForm">
                {/* Edad */}
                <div className="form-group">
                    <label htmlFor="age">Edad:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="age" 
                        placeholder="Ingresa tu edad"
                        aria-describedby="ageHelp" 
                    />
                </div>

                {/* Género */}
                <div className="form-group">
                    <label htmlFor="gender">Género:</label>
                    <Form.Select id="gender" aria-label="Selecciona tu género" className="form-control">
                    <option value="" disabled selected>Selecciona</option>
                        <option value="male">Masculino</option>
                        <option value="female">Femenino</option>
                        <option value="other">Otro</option>
                    </Form.Select>
                </div>
            </form>
            
            {/* Titulo de la siguiente seccion */}
            <div className="DataForm1 subtitle">Medidas Corporales</div>
            
            <form className="DataForm">
                {/* Altura */}
                <div className="form-group">
                    <label htmlFor="height">Altura:</label>
                    <input 
                        type="text" 
                        className="form-control align-right" 
                        id="height" 
                        placeholder="cm"
                        aria-describedby="heightHelp" 
                    />
                </div>

                {/* Peso */}
                <div className="form-group">
                    <label htmlFor="weight">Peso:</label>
                    <input 
                        type="text" 
                        className="form-control align-right" 
                        id="weight" 
                        placeholder="kg"
                        aria-describedby="weightHelp" 
                    />
                </div>
            </form>

            {/* Sliders */}
            <form className="DataForm2">
                {/* Pecho */}
                <div className="form-group">
                    <img 
                        src={QuestionIcon} 
                        alt="Icono de Pregunta" 
                        className="icon-question" 
                        onClick={() => handleIconClick("Instrucciones para medir el pecho...")}
                    />
                    <label htmlFor="chest" className="subtitle1">Pecho:</label>
                    <div className="range-container">
                        <input 
                            type="range" 
                            id="chest" 
                            name="chest" 
                            min="20" 
                            max="180"
                            value={chest} 
                            onChange={handleRangeChange} 
                            className="range-slider"
                        />
                        <span className="range-value">{chest} cm</span>
                    </div>
                </div>

                {/* Cintura */}
                <div className="form-group">
                    <img 
                        src={QuestionIcon} 
                        alt="Icono de Pregunta" 
                        className="icon-question" 
                        onClick={() => handleIconClick("Instrucciones para medir la cintura...")} 
                    />
                    <label htmlFor="waist" className="subtitle1">Cintura:</label>
                    <div className="range-container">
                        <input 
                            type="range" 
                            id="waist" 
                            name="waist" 
                            min="20" 
                            max="180" 
                            value={waist} 
                            onChange={handleRangeChange} 
                            className="range-slider"
                        />
                        <span className="range-value">{waist} cm</span>
                    </div>
                </div>

                {/* Cadera */}
                <div className="form-group">
                    <img 
                        src={QuestionIcon} 
                        alt="Icono de Pregunta" 
                        className="icon-question" 
                        onClick={() => handleIconClick("Instrucciones para medir la cadera...")}
                    />
                    <label htmlFor="hips" className="subtitle1">Cadera:</label>
                    <div className="range-container">
                        <input 
                            type="range" 
                            id="hips" 
                            name="hips" 
                            min="20" 
                            max="180" 
                            value={hips} 
                            onChange={handleRangeChange} 
                            className="range-slider"
                        />
                        <span className="range-value">{hips} cm</span>
                    </div>
                </div>

                {/* Entrepierna */}
                <div className="form-group">
                    <img 
                        src={QuestionIcon} 
                        alt="Icono de Pregunta" 
                        className="icon-question" 
                        onClick={() => handleIconClick("Instrucciones para medir la entrepierna...")}
                    />
                    <label htmlFor="legs" className="subtitle1">Entrepierna:</label>
                    <div className="range-container">
                        <input 
                            type="range" 
                            id="legs" 
                            name="legs" 
                            min="20" 
                            max="180" 
                            value={legs} 
                            onChange={handleRangeChange} 
                            className="range-slider"
                        />
                        <span className="range-value">{legs} cm</span>
                    </div>
                </div>
            </form>

            {/* Siguiente */}
            <div className="secondaryButton3">
                <SecondaryButton onClick={() => navigate('/personalDataQuiz')}>
                    Siguiente
                </SecondaryButton>
            </div>

            {/* Modal para Guia de Medidas */}
            <GuideMessureModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                content={modalContent}
            />
        </div>
    );
};

export default PersonalDataQuizPage;
