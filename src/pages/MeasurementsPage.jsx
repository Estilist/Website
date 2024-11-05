import { useState, useEffect } from "react";
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
import { useSession } from "../contexts/SessionContext";
import { useNavigate } from "react-router-dom";
import request from "../api";
import LoadingPage from "./LoadingPage";

const MeasurementsPage = () => {
    const [modalShow, setModalShow] = useState(false);
    const [modalContent, setModalContent] = useState("");
    const [modalImage, setModalImage] = useState("");
    const [loading, setLoading] = useState(true);

    const { session } = useSession();
    const navigate = useNavigate();

    const handleIconClick = (content, imagePath) => {
        setModalContent(content);
        setModalImage(imagePath);
        setModalShow(true);
    };

    // On page load, set initial values for the form
    useEffect(() => {
        async function fetchData() {
            const measurements = await request(`/measurements/${session.id}/`, 'GET');
            formik.setValues({
                peso: Math.round(measurements.peso),
                altura: Math.round(measurements.altura),
                chest: Math.round(measurements.pecho),
                waist: Math.round(measurements.cintura),
                hips: Math.round(measurements.cadera),
                legs: Math.round(measurements.entrepierna),
            });
            setLoading(false);
        }
        fetchData();
    }, []);

    const formik = useFormik({
        initialValues: {
            peso: '',
            altura: '',
            chest: 0,
            waist: 0,
            hips: 0,
            legs: 0,
        },
        validationSchema: Yup.object({
            altura: Yup.number()
                .min(20, "Altura debe estar entre 20 y 300 cm.")
                .max(300, "Altura debe estar entre 20 y 300 cm.")
                .required("Altura es requerida."),
            peso: Yup.number()
                .min(1, "Peso debe ser mayor a 0.")
                .max(500, "Peso debe ser menor a 500.")
                .required("Peso es requerido."),
            chest: Yup.number()
                .min(20, 'Ingresa una medida válida.')
                .max(180, 'Ingresa una medida válida.')
                .required('Ingresa la medida de tu pecho.'),
            waist: Yup.number()
                .min(20, 'Ingresa una medida válida.')
                .max(180, 'Ingresa una medida válida.')
                .required('Ingresa la medida de tu cintura.'),
            hips: Yup.number()
                .min(20, 'Ingresa una medida válida.')
                .max(180, 'Ingresa una medida válida.')
                .required('Ingresa la medida de tu cadera.'),
            legs: Yup.number()
                .min(20, 'Ingresa una medida válida.')
                .max(180, 'Ingresa una medida válida.')
                .required('Ingresa la medida de tu entrepierna.'),
        }),
        onSubmit: async (values) => {
            await request('/user-measurements/', 'POST', {
                idusuario: session.id,
                altura: values.altura,
                peso: values.peso,
                pecho: values.chest,
                cintura: values.waist,
                cadera: values.hips,
                entrepierna: values.legs,
            });

            navigate('/results');
        },
    });

    if (loading) {
        return (
            <LoadingPage />
        );
    }

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