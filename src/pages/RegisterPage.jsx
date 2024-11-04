import { useState } from "react";
import Register1 from "../pages/Register/Register1";
import Register2 from "../pages/Register/Register2";
import Register3 from "../pages/Register/Register3";
import request from "../api";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
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
        chest: 90,
        waist: 75,
        hips: 90,
        legs: 75,
    });
    const [errors, setErrors] = useState({});

    const handleNext = async () => {
        setErrors({});
        const validation = validateStep(currentStep);
    
        if (Object.keys(validation).length === 0) {
            try {
                await request('/check-user/', 'POST', {
                    correo: formData.correo,
                    contrasena: ""
                });
            } catch (error) {
                if (error.status === 404)
                    setCurrentStep(currentStep + 1);
                else if (error.status === 401 || error.status === 400) 
                    setErrors({ correo: "El usuario ya existe." });
                else
                    setErrors({ correo: "Error al verificar el usuario." });
            }
        } else {
            setErrors(validation);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateStep = (step) => {
        const newErrors = {};
        const alphanumericRegex = /^[a-z0-9]+$/i;
    
        if (step === 1) {
            if (!formData.nombre) {
                newErrors.nombre = "Nombre es requerido.";
            } else if (!alphanumericRegex.test(formData.nombre)) {
                newErrors.nombre = "Solo caracteres alfanuméricos permitidos.";
            }
            
            if (!formData.apellidopaterno) {
                newErrors.apellidopaterno = "Apellido Paterno es requerido.";
            } else if (!alphanumericRegex.test(formData.apellidopaterno)) {
                newErrors.apellidopaterno = "Solo caracteres alfanuméricos permitidos.";
            }
    
            if (!formData.apellidomaterno) {
                newErrors.apellidomaterno = "Apellido Materno es requerido.";
            } else if (!alphanumericRegex.test(formData.apellidomaterno)) {
                newErrors.apellidomaterno = "Solo caracteres alfanuméricos permitidos.";
            }
    
            if (!formData.pais) {
                newErrors.pais = "País es requerido.";
            }

            if (!formData.correo) {
                newErrors.correo = "Correo es requerido.";
            } else {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(formData.correo)) {
                    newErrors.correo = "Correo inválido.";
                }
            }
    
            if (!formData.contrasena) {
                newErrors.contrasena = "Contraseña es requerida.";
            }
        } else if (step === 3) {
            if (!formData.edad) newErrors.edad = "Edad es requerida.";
            if (!formData.genero) newErrors.genero = "Género es requerido.";
            if (!formData.altura) newErrors.altura = "Altura es requerida.";
            if (!formData.peso) newErrors.peso = "Peso es requerido.";
            
            if (formData.chest < 20 || formData.chest > 180) {
                newErrors.chest = "Pecho debe estar entre 20 y 180 cm.";
            }
            if (formData.waist < 20 || formData.waist > 180) {
                newErrors.waist = "Cintura debe estar entre 20 y 180 cm.";
            }
            if (formData.hips < 20 || formData.hips > 180) {
                newErrors.hips = "Cadera debe estar entre 20 y 180 cm.";
            }
            if (formData.legs < 20 || formData.legs > 180) {
                newErrors.legs = "Entrepierna debe estar entre 20 y 180 cm.";
            }
        }
    
        return newErrors;
    };

    const handleSubmit = async () => {
        const validation = validateStep(currentStep);

        if (Object.keys(validation).length === 0) {
            try {
                const response = await request('/create-user/', 'POST',
                    {
                        correo: formData.correo,
                        contrasena: formData.contrasena,
                        nombre: formData.nombre,
                        apellidopaterno: formData.apellidopaterno,
                        apellidomaterno: formData.apellidomaterno,
                        edad: formData.edad,
                        genero: formData.genero,
                        pais: formData.pais,
                    }
                );
                console.log('Usuario creado exitosamente:', response);
                navigate('/login');
            } catch (error) {
                console.error('Error al crear usuario:', error);
            }
        } else {
            setErrors(validation);
        }
    };

    return (
        <div>
            {currentStep === 1 && (
                <Register1
                    formData={formData}
                    errors={errors}
                    handleChange={handleChange}
                    handleNext={handleNext}
                />
            )}
            {currentStep === 2 && (
                <Register2
                    handleNext={handleNext}
                />
            )}
            {currentStep === 3 && (
                <Register3
                    formData={formData}
                    errors={errors}
                    handleChange={handleChange}
                    handleNext={handleNext}
                />
            )}
            {currentStep === 4 && (
                <div>
                    <h2>¡Registro completado!</h2>
                    <button onClick={handleSubmit}>Enviar</button>
                </div>
            )}
        </div>
    );
};

export default RegisterPage;