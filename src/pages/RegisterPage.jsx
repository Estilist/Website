// RegisterPage.jsx
import { useState, useEffect, useContext } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Register1 from "../pages/Register/Register1";
import Register2 from "../pages/Register/Register2";
import Register3 from "../pages/Register/Register3";
import Register4 from "../pages/Register/Register4";
import Register5 from '../pages/Register/Register5';
import { request, uploadToBlobStorage } from "../api";
import { useNavigate } from "react-router-dom";
import { SessionContext, useSession } from "../contexts/SessionContext";

const nameRegex = /^[a-záéíóúüñ ]+$/i;

const validationSchemas = [
    // Step 1
    Yup.object({
        nombre: Yup.string()
            .required("Nombre es requerido.")
            .matches(nameRegex, "Solo caracteres alfabéticos permitidos."),
        apellidopaterno: Yup.string()
            .required("Apellido Paterno es requerido.")
            .matches(nameRegex, "Solo caracteres alfabéticos permitidos."),
        apellidomaterno: Yup.string()
            .required("Apellido Materno es requerido.")
            .matches(nameRegex, "Solo caracteres alfabéticos permitidos."),
        correo: Yup.string()
            .email("Correo inválido.")
            .required("Correo es requerido.")
            .test(
                "check-email-exists",
                "El correo ya está en uso.",
                async (value) => {
                    try {
                        await request('/check-user/', 'POST', { correo: value, contrasena: "" });
                        return false;
                    } catch (error) {
                        if (error.status === 401)
                            return error.message === "Usuario deshabilitado" ? true : false;
                        else if (error.status === 404) return true;
                        return false;
                    }
                }
            ),
        contrasena: Yup.string()
            .required("Contraseña es requerida."),
        pais: Yup.string()
            .required("País es requerido."),
    }),
    // Step 2
    Yup.object({}),
    // Step 3
    Yup.object({
        edad: Yup.number()
            .min(1, "Edad debe ser mayor a 0.")
            .max(120, "Edad debe ser menor a 120.")
            .required("Edad es requerida."),
        genero: Yup.string()
            .required("Género es requerido."),
        altura: Yup.number()
            .min(20, "Altura debe estar entre 20 y 300 cm.")
            .max(300, "Altura debe estar entre 20 y 300 cm.")
            .required("Altura es requerida."),
        peso: Yup.number()
            .min(1, "Peso debe ser mayor a 0.")
            .max(500, "Peso debe ser menor a 500.")
            .required("Peso es requerido."),
        shoulder: Yup.number()
            .min(20, 'Ingresa una medida válida.')
            .max(180, 'Ingresa una medida válida.')
            .required('Ingresa la medida de tu hombros.'),
        waist: Yup.number()
            .min(20, 'Ingresa una medida válida.')
            .max(180, 'Ingresa una medida válida.')
            .required('Ingresa la medida de tu cintura.'),
        hips: Yup.number()
            .min(20, 'Ingresa una medida válida.')
            .max(180, 'Ingresa una medida válida.')
            .required('Ingresa la medida de tu cadera.'),
    }),
    // Step 4 - Image Upload
    Yup.object({
        file: Yup.mixed()
            .required("La imagen es requerida."),
    }),
    // Step 5 - Preferences
    Yup.object({
        recomendaciones: Yup.string().required('Required'),
        ropa: Yup.string().required('Required'),
        accesorios: Yup.string().required('Required'),
        joyeria: Yup.string().required('Required'),
        cortecabello: Yup.string().required('Required'),
        tintecabello: Yup.string().required('Required'),
        maquillaje: Yup.string().when('recomendaciones', (recomendaciones, schema) => {
            return recomendaciones === 'Femenina'
                ? schema.required('Required')
                : schema.notRequired();
        }),
    }),
];

const RegisterPage = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(0);
    const [loading, setLoading] = useState(false);
    const { setSession } = useContext(SessionContext);
    const { session } = useSession();

    const initialValues = {
        nombre: "",
        apellidopaterno: "",
        apellidomaterno: "",
        correo: "",
        contrasena: "",
        edad: "",
        genero: "",
        altura: "",
        peso: "",
        pais: "",
        shoulder: 90,
        waist: 90,
        hips: 90,
        file: null,
        recomendaciones: '',
        ropa: '',
        accesorios: '',
        joyeria: '',
        cortecabello: '',
        tintecabello: '',
        maquillaje: '',
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentStep]);

    const handleSubmit = async (values, actions) => {
        actions.setSubmitting(true);
        setLoading(true);

        try {
            if (currentStep === 0) {
                // No POST after step 1
                setCurrentStep(currentStep + 1);
            } else if (currentStep === 1) {
                // No POST after step 2
                setCurrentStep(currentStep + 1);
            } else if (currentStep === 2) {
                // After step 3: create-user and user-measurements
                const response = await request('/create-user/', 'POST', {
                    correo: values.correo,
                    contrasena: values.contrasena,
                    nombre: values.nombre,
                    apellidopaterno: values.apellidopaterno,
                    apellidomaterno: values.apellidomaterno,
                    edad: values.edad,
                    genero: values.genero,
                    pais: values.pais,
                });

                setSession({ 'id': response.idUsuario }); // Store idUsuario in session

                const user_measurements = {
                    idusuario: response.idUsuario,
                    altura: values.altura,
                    peso: values.peso,
                    hombros: values.shoulder,
                    cintura: values.waist,
                    cadera: values.hips,
                };
                setCurrentStep(currentStep + 1);
                await request('/user-measurements/', 'POST', user_measurements);
            } else if (currentStep === 3) {
                // After step 4: upload image
                const idUsuario = session.id;
                if (!idUsuario) {
                    throw new Error("idUsuario no está disponible.");
                }

                const imageUrl = await uploadToBlobStorage(values.file);
                const formData = new FormData();
                formData.append('url', imageUrl);
                formData.append('idusuario', idUsuario); // Use idUsuario from session
                request('/facial-recognition/', 'POST', formData, false);
                setCurrentStep(currentStep + 1);
            } else if (currentStep === 4) {
                // After step 5: preferences
                const idUsuario = session.id;
                if (!idUsuario) {
                    throw new Error("idUsuario no está disponible.");
                }

                const preferences = {
                    idusuario: idUsuario, // Use idUsuario from session
                    recomendaciones: values.recomendaciones,
                    ropa: values.ropa,
                    accesorios: values.accesorios,
                    joyeria: values.joyeria,
                    cortecabello: values.cortecabello,
                    tintecabello: values.tintecabello,
                    maquillaje: values.maquillaje,
                };
                await request('/user-preferences/', 'POST', preferences);
                setCurrentStep(currentStep + 1);
                navigate('/');
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            actions.setSubmitting(false);
            setLoading(false);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchemas[currentStep]}
            onSubmit={handleSubmit}
            validateOnChange={false}
            validateOnBlur={false}
        >
            {formik => (
                <Form>
                    {currentStep === 0 && (
                        <Register1
                            formData={formik.values}
                            errors={formik.errors}
                            handleChange={formik.handleChange}
                        />
                    )}
                    {currentStep === 1 && (
                        <Register2 />
                    )}
                    {currentStep === 2 && (
                        <Register3
                            formData={formik.values}
                            errors={formik.errors}
                            handleChange={formik.handleChange}
                        />
                    )}
                    {currentStep === 3 && (
                        <Register4
                            setFieldValue={formik.setFieldValue}
                            file={formik.values.file}
                            setFile={file => formik.setFieldValue('file', file)}
                            error={formik.errors.file}
                        />
                    )}
                    {currentStep === 4 && (
                        <Register5
                            values={formik.values}
                            setFieldValue={formik.setFieldValue}
                            errors={formik.errors}
                            touched={formik.touched}
                            loading={loading}
                            setLoading={setLoading}
                        />
                    )}
                </Form>
            )}
        </Formik>
    );
};

export default RegisterPage;