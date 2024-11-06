import { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Register1 from "../pages/Register/Register1";
import Register2 from "../pages/Register/Register2";
import Register3 from "../pages/Register/Register3";
import request from "../api";
import { useNavigate } from "react-router-dom";

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
                        // (200)
                        return false;
                    } catch (error) {
                        // (401) El correo ya está tomado
                        if (error.status === 401) return false;
                        // (404) El correo no existe, está disponible
                        else if (error.status === 404) return true;
                        // Otros errores
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
    Yup.object(),
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
];

const RegisterPage = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(0);
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
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentStep]);      

    const handleSubmit = async (values, actions) => {
        if (currentStep < validationSchemas.length - 1) {
            setCurrentStep(currentStep + 1);
            actions.setTouched({}); 
            actions.setSubmitting(false);
        } else {
            try {
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

                const idUsuario = response.idUsuario;

                await request('/user-measurements/', 'POST', {
                    idusuario: idUsuario,
                    altura: values.altura,
                    peso: values.peso,
                    hombros: values.shoulder,
                    cintura: values.waist,
                    cadera: values.hips,
                });

                navigate('/login');
            } catch (error) {
                console.error('Error al crear usuario:', error);
                actions.setSubmitting(false);
            }
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
                </Form>
            )}
        </Formik>
    );
};

export default RegisterPage;