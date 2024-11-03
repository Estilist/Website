import { useState, useContext } from "react";
import PageTitle from "../components/PageTitle";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from '../components/SecondaryButton';
import { useNavigate } from "react-router-dom";
import { SessionContext } from "../contexts/SessionContext";

const LoginPage = () => {
    const navigate = useNavigate();
    const { setSession } = useContext(SessionContext);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberPassword: false,
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value, 
        });
    };

    const validate = () => {
        const newErrors = {};
        const alfanumericoRegex = /^[a-zA-Z0-9@.]+$/;

        // No campos nulos
        if (!formData.email) {
            newErrors.email = "El correo electrónico no puede estar vacío.";
        } else if (!alfanumericoRegex.test(formData.email)) {
            newErrors.email = "El correo electrónico debe ser alfanumérico.";
        }

        if (!formData.password) {
            newErrors.password = "La contraseña no puede estar vacía.";
        } else if (!alfanumericoRegex.test(formData.password)) {
            newErrors.password = "La contraseña debe ser alfanumérica.";
        }

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            try {
                const response = await fetch('/check-user/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        correo: formData.email,
                        contrasena: formData.password,
                    }),
                  });

                if (response.ok) {
                    const rJSON = await response.json();
                    console.log('Inicio de sesión exitoso', rJSON);

                    setSession({
                        id: rJSON.idUsuario,
                        email: formData.email
                    });

                    navigate('/');
                } else {
                    const errorData = await response.json();
                    setErrors({ form: errorData.error });
                }
            } catch (error) {
                setErrors({ form: 'Error al iniciar sesión' });
                console.error('Error al iniciar sesión:', error);
            }
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div>
            <PageTitle>Iniciar Sesión</PageTitle>
            <form className="TextForms" onSubmit={handleSubmit}>
                {/* Correo Electrónico */}
                <div className="form-group">
                    <label htmlFor="inputEmail">Correo Electrónico</label>
                    <input 
                        type="email" 
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
                        id="inputEmail" 
                        name="email"
                        placeholder="nombre@ejemplo.com" 
                        aria-describedby="emailHelp" 
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <small className="invalid-feedback">{errors.email}</small>}
                </div>

                {/* Contraseña */}
                <div className="form-group">
                    <label htmlFor="inputPassword">Contraseña</label>
                    <input 
                        type="password" 
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`} 
                        id="inputPassword" 
                        name="password"
                        placeholder="Crea una contraseña" 
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <small className="invalid-feedback">{errors.password}</small>}
                </div>

                {/* Checkbox recordar contraseña */}
                <div className="form-group form-check">
                    <input 
                        type="checkbox" 
                        className="form-check-input" 
                        id="rememberPassword" 
                        name="rememberPassword"
                        checked={formData.rememberPassword}
                        onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="rememberPassword">
                        Recordar contraseña
                    </label>
                </div>

                {/* Errores del formulario */}
                <div className="form-error">
                    {errors.form && <div className="alert alert-danger">{errors.form}</div>}
                </div>
                
                {/* Botones */}
                <div className="buttons">
                    {/* Boton de Registro */}
                    <div className="primaryButton">
                        <PrimaryButton type="submit" onClick={handleSubmit}>
                            Iniciar Sesión
                        </PrimaryButton>
                    </div>

                    {/* Boton de Olvidé mi Contraseña */}
                    <div className="secondaryButton">
                        <SecondaryButton onClick={() => {}}>
                            Olvidé mi contraseña
                        </SecondaryButton>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;