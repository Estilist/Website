import { useState } from "react";
import PropTypes from "prop-types";
import PageTitle from "../../components/extras/PageTitle";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import MeasurementField from "../../components/extras/MeasurementField";
import MeasurementSlider from "../../components/extras/MeasurementSlider";

import shoulderImage from '../../assets/photos/hombros.jpeg';
import waistImage from '../../assets/photos/cintura.png';
import hipsImage from '../../assets/photos/cadera.png';
import GuideMessureModal from "../../components/extras/GuideMessureModal";

const Register3 = ({ formData, errors, handleChange }) => {
    const [modalShow, setModalShow] = useState(false);
    const [modalContent, setModalContent] = useState("");
    const [modalImage, setModalImage] = useState("");

    const handleIconClick = (content, imagePath) => {
        setModalContent(content);
        setModalImage(imagePath);
        setModalShow(true);
    };

    return (
        <div>
            <PageTitle>Ingresa los siguientes datos:</PageTitle>
            
            <div>
                <GuideMessureModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    content={modalContent}
                    imagePath={modalImage}
                />

                <div className="DataForm">
                    {/* Edad */}
                    <MeasurementField
                        label="Edad"
                        name="edad"
                        type="number"
                        value={formData.edad}
                        onChange={handleChange}
                        error={errors.edad}
                    />

                    {/* Género */}
                    <div className="form-group">
                        <label htmlFor="genero">Género</label>
                        <select
                            id="genero"
                            name="genero"
                            className={`form-control ${errors.genero ? 'is-invalid' : ''}`}
                            value={formData.genero}
                            onChange={handleChange}
                        >
                            <option value="">Selecciona tu género</option>
                            <option value="male">Masculino</option>
                            <option value="female">Femenino</option>
                        </select>
                        {errors.genero && <small className="invalid-feedback">{errors.genero}</small>}
                    </div>

                </div>

                <div className="DataForm1 subtitle">Medidas Corporales</div>
                <div className="DataForm">
                    {/* Altura */}
                    <MeasurementField
                        label="Altura"
                        name="altura"
                        type="number"
                        placeholder="cm"
                        value={formData.altura}
                        onChange={handleChange}
                        error={errors.altura}
                    />

                    {/* Peso */}
                    <MeasurementField
                        label="Peso"
                        name="peso"
                        type="number"
                        placeholder="kg"
                        value={formData.peso}
                        onChange={handleChange}
                        error={errors.peso}
                    />
                </div>

                <div className="DataForm2">
                    {/* Hombro */}
                    <MeasurementSlider
                        label="Hombro"
                        name="shoulder"
                        value={formData.shoulder}
                        onChange={handleChange}
                        error={errors.shoulder}
                        onIconClick={() => handleIconClick("Manera de medir hombros:", shoulderImage)}
                    />

                    {/* Cintura */}
                    <MeasurementSlider
                        label="Cintura"
                        name="waist"
                        value={formData.waist}
                        onChange={handleChange}
                        error={errors.waist}
                        onIconClick={() => handleIconClick("Manera de medir la cintura:", waistImage)}
                    />

                    {/* Cadera */}
                    <MeasurementSlider
                        label="Cadera"
                        name="hips"
                        value={formData.hips}
                        onChange={handleChange}
                        error={errors.hips}
                        onIconClick={() => handleIconClick("Manera de medir la cadera:", hipsImage)}
                    />
                    <div className="secondaryButton1">
                        <PrimaryButton type="submit">
                            Siguiente
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

Register3.propTypes = {
    formData: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default Register3;