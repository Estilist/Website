import { useState } from "react";
import PageTitle from "../components/PageTitle";
import GuideMessureModal from '../components/GuideMessureModal';
import chestImage from '../assets/photos/pecho.png';
import waistImage from '../assets/photos/cintura.png';
import hipsImage from '../assets/photos/cadera.png';
import legsImage from '../assets/photos/entrepierna.png';
import PrimaryButton from "../components/PrimaryButton";

import MeasurementField from "../components/MeasurementField";
import MeasurementSlider from "../components/MeasurementSlider";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const MeasurementsPage = () => {
    const [modalShow, setModalShow] = useState(false);
    const [modalContent, setModalContent] = useState("");
    const [modalImage, setModalImage] = useState("");

    const handleIconClick = (content, imagePath) => {
        setModalContent(content);
        setModalImage(imagePath);
        setModalShow(true);
    };

    const formik = useFormik({
        initialValues: {
            peso: '',
            altura: '',
            chest: 90,
            waist: 90,
            hips: 90,
            legs: 90,
        },
        validationSchema: Yup.object({
            peso: Yup.number().required('Ingresa tu peso.'),
            altura: Yup.number().required('Ingresa tu altura.'),
            chest: Yup.number().min(20, 'Ingresa una medida válida.').max(180, 'Ingresa una medida válida.').required('Ingresa la medida de tu pecho.'),
            waist: Yup.number().min(20, 'Ingresa una medida válida.').max(180, 'Ingresa una medida válida.').required('Ingresa la medida de tu cintura.'),
            hips: Yup.number().min(20, 'Ingresa una medida válida.').max(180, 'Ingresa una medida válida.').required('Ingresa la medida de tu cadera.'),
            legs: Yup.number().min(20, 'Ingresa una medida válida.').max(180, 'Ingresa una medida válida.').required('Ingresa la medida de tu entrepierna.'),
        }),
        onSubmit: values => {
            console.log('Datos válidos:', values);
        },
    });

    return (
        <>
            <PageTitle>Modificar Medidas</PageTitle>


            <form onSubmit={formik.handleSubmit}>
                <div className="DataForm">
                    {/* Peso */}
                    <MeasurementField
                        label="Peso"
                        name="peso"
                        type="number"
                        placeholder="kg"
                        value={formik.values.peso}
                        onChange={formik.handleChange}
                        error={formik.errors.peso}
                    />

                    {/* Altura */}
                    <MeasurementField
                        label="Altura"
                        name="altura"
                        type="number"
                        placeholder="cm"
                        value={formik.values.altura}
                        onChange={formik.handleChange}
                        error={formik.errors.altura}
                    />
                </div>

                <GuideMessureModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    content={modalContent}
                    imagePath={modalImage}
                />

                <div className="DataForm2">
                    <MeasurementSlider
                        label="Pecho"
                        name="chest"
                        value={formik.values.chest}
                        onChange={formik.handleChange}
                        error={formik.errors.chest}
                        onIconClick={() => handleIconClick("Manera de medir el pecho:", chestImage)}
                    />
                    <MeasurementSlider
                        label="Cintura"
                        name="waist"
                        value={formik.values.waist}
                        onChange={formik.handleChange}
                        error={formik.errors.waist}
                        onIconClick={() => handleIconClick("Manera de medir la cintura:", waistImage)}
                    />
                    <MeasurementSlider
                        label="Cadera"
                        name="hips"
                        value={formik.values.hips}
                        onChange={formik.handleChange}
                        error={formik.errors.hips}
                        onIconClick={() => handleIconClick("Manera de medir la cadera:", hipsImage)}
                    />
                    <MeasurementSlider
                        label="Entrepierna"
                        name="legs"
                        value={formik.values.legs}
                        onChange={formik.handleChange}
                        error={formik.errors.legs}
                        onIconClick={() => handleIconClick("Manera de medir la entrepierna:", legsImage)}
                    />

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

export default MeasurementsPage;