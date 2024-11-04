import { useState } from "react";
import PageTitle from "../../components/PageTitle";
import GuideMessureModal from '../../components/GuideMessureModal';
import QuestionIcon from '../../assets/icons/question-circle.svg';
import chestImage from '../../assets/photos/pecho.png';
import waistImage from '../../assets/photos/cintura.png';
import hipsImage from '../../assets/photos/cadera.png';
import legsImage from '../../assets/photos/entrepierna.png';
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";
import PrimaryButton from "../../components/PrimaryButton";

const Register3 = ({ formData, errors, handleChange, handleNext }) => {
    const [modalShow, setModalShow] = useState(false);
    const [modalContent, setModalContent] = useState("");
    const [modalImage, setModalImage] = useState("");

    const handleIconClick = (content, imagePath) => {
        setModalContent(content);
        setModalImage(imagePath);
        setModalShow(true);
    };

    return (
        <>
            <PageTitle>Ingresa los siguientes datos:</PageTitle>

            <form onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
                <div className="DataForm">
                    <div className="form-group">
                        <label htmlFor="age">Edad:</label>
                        <input 
                            type="number"
                            min={0}
                            max={120}
                            className="form-control right-placeholder" 
                            id="age" 
                            name="edad"
                            onChange={handleChange}
                        />
                    </div>
                    {errors.edad && <small className="invalid-feedback">{errors.edad}</small>}

                    <div className="form-group">
                        <label htmlFor="gender">Género:</label>
                        <Form.Select
                            id="gender"
                            aria-label="Selecciona tu género"
                            className="form-control"
                            name="genero"
                            value={formData.genero}
                            onChange={handleChange}
                        >
                            <option value="" disabled>
                                Selecciona
                            </option>
                            <option value="male">Masculino</option>
                            <option value="female">Femenino</option>
                            <option value="other">Otro</option>
                        </Form.Select>
                    </div>
                    {errors.genero && <small className="invalid-feedback">{errors.genero}</small>}
                </div>

                {/* Subsección */}
                <div className="DataForm1 subtitle">Medidas Corporales</div>

                <div className="DataForm">
                    <div className="form-group">
                        <label htmlFor="weight">Peso:</label>
                        <input 
                            type="number"
                            min={0}
                            max={500}
                            className="form-control right-placeholder" 
                            id="weight" 
                            name="peso"
                            placeholder="kg"
                            aria-describedby="weightHelp" 
                            onChange={handleChange}
                        />
                    </div>
                    {errors.weight && <small className="invalid-feedback">{errors.weight}</small>}

                    <div className="form-group">
                        <label htmlFor="height">Altura:</label>
                        <input 
                            type="number"
                            min={0} 
                            max={300}
                            className="form-control right-placeholder" 
                            id="height" 
                            name="altura"
                            placeholder="cm"
                            aria-describedby="heightHelp" 
                            onChange={handleChange}
                        />
                    </div>
                    {errors.height && <small className="invalid-feedback">{errors.height}</small>}
                </div>

                {/* Modal */}
                <GuideMessureModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    content={modalContent}
                    imagePath={modalImage}
                />

                <div className="DataForm2">
                    {/* Pecho */}
                    <div className="form-group">
                        <img 
                            src={QuestionIcon} 
                            alt="Icono de Pregunta" 
                            className="icon-question" 
                            onClick={() => handleIconClick("Manera de medir el pecho:", chestImage)} 
                        />
                        <label htmlFor="chest" className="subtitle1">Pecho:</label>
                        <div className="range-container">
                            <input
                                type="range"
                                id="chest"
                                name="chest"
                                min={20}
                                max={180}
                                value={formData.chest}
                                onChange={handleChange}
                                className="range-slider"
                            />
                            <span style={{minWidth: "40px"}}>{formData.chest} cm</span>
                        </div>
                        {errors.chest && <small className="invalid-feedback">{errors.chest}</small>}
                    </div>

                    {/* Cintura */}
                    <div className="form-group">
                        <img 
                            src={QuestionIcon} 
                            alt="Icono de Pregunta" 
                            className="icon-question" 
                            onClick={() => handleIconClick("Manera de medir la cintura:", waistImage)} 
                        />
                        <label htmlFor="waist" className="subtitle1">Cintura:</label>
                        <div className="range-container">
                            <input
                                type="range"
                                id="waist"
                                name="waist"
                                min={20}
                                max={180}
                                value={formData.waist}
                                onChange={handleChange}
                                className="range-slider"
                            />
                            <span style={{minWidth: "40px"}}>{formData.waist} cm</span>
                        </div>
                        {errors.waist && <small className="invalid-feedback">{errors.waist}</small>}
                    </div>

                    {/* Cadera */}
                    <div className="form-group">
                        <img 
                            src={QuestionIcon} 
                            alt="Icono de Pregunta" 
                            className="icon-question" 
                            onClick={() => handleIconClick("Manera de medir la cadera:", hipsImage)}
                        />
                        <label htmlFor="hips" className="subtitle1">Cadera:</label>
                        <div className="range-container">
                            <input
                                type="range"
                                id="hips"
                                name="hips"
                                min={20}
                                max={180}
                                value={formData.hips}
                                onChange={handleChange}
                                className="range-slider"
                            />
                            <span style={{minWidth: "40px"}}>{formData.hips} cm</span>
                        </div>
                        {errors.hips && <small className="invalid-feedback">{errors.hips}</small>}
                    </div>

                    {/* Entrepierna */}
                    <div className="form-group">
                    <img 
                            src={QuestionIcon} 
                            alt="Icono de Pregunta" 
                            className="icon-question" 
                            onClick={() => handleIconClick("Manera de medir la entrepierna:", legsImage)}
                        />
                        <label htmlFor="legs" className="subtitle1">Entrepierna:</label>
                        <div className="range-container">
                            <input
                                type="range"
                                id="legs"
                                name="legs"
                                min={20}
                                max={180}
                                value={formData.legs}
                                onChange={handleChange}
                                className="range-slider"
                            />
                            <span style={{minWidth: "40px"}}>{formData.legs} cm</span>
                        </div>
                        {errors.legs && <small className="invalid-feedback">{errors.legs}</small>}
                    </div>
                        
                    {/* Botones */}
                    <div className="secondaryButton1">
                        <PrimaryButton type="submit">
                            Siguiente
                        </PrimaryButton>
                    </div>
                </div>
            </form>
        </>
    );
};

Register3.propTypes = {
    formData: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleNext: PropTypes.func.isRequired,
};

export default Register3;