import { useContext, useState } from "react";
import PageTitle from "../components/extras/PageTitle";
import PrimaryButton from "../components/buttons/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { SessionContext } from "../contexts/SessionContext";
import request from "../api";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Spinner } from "react-bootstrap";

const LoginPage = () => {
    const navigate = useNavigate();
    const { setSession } = useContext(SessionContext);
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberPassword: false,
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Correo electrónico inválido.')
                .matches(/^[a-zA-Z0-9@.]+$/, 'El correo electrónico debe ser alfanumérico.')
                .required('El correo electrónico no puede estar vacío.'),
            password: Yup.string()
                .matches(/^[a-zA-Z0-9@.]+$/, 'La contraseña debe ser alfanumérica.')
                .required('La contraseña no puede estar vacía.'),
        }),
        onSubmit: async (values, { setSubmitting, setErrors }) => {
            setLoading(true);
            try {
                const response = await request('/check-user/', 'POST', {
                    correo: values.email,
                    contrasena: values.password
                });
                
                console.log('Inicio de sesión exitoso', response);
                setSession({
                    id: response.idUsuario,
                    email: values.email
                });
                navigate('/');
            } catch (error) {
                setErrors({ form: error.message || 'Error al iniciar sesión' });
            } finally {
                setSubmitting(false);
                setLoading(false);
            }
        },
    });

    return (
        <div>
            <PageTitle>Iniciar Sesión</PageTitle>
            <form className="TextForms" onSubmit={formik.handleSubmit} autoComplete="on">
                <div className="form-group">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input 
                        type="email" 
                        className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`} 
                        id="email" 
                        name="email"
                        placeholder="nombre@ejemplo.com" 
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        autoComplete="email"
                    />
                    {formik.touched.email && formik.errors.email && (
                        <small className="invalid-feedback">{formik.errors.email}</small>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
                    <input 
                        type="password" 
                        className={`form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`} 
                        id="password" 
                        name="password"
                        placeholder="Contraseña"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        autoComplete="current-password"
                    />
                    {formik.touched.password && formik.errors.password && (
                        <small className="invalid-feedback">{formik.errors.password}</small>
                    )}
                </div>

                <div className="form-group form-check">
                    <input 
                        type="checkbox" 
                        className="form-check-input" 
                        id="rememberPassword" 
                        name="rememberPassword"
                        checked={formik.values.rememberPassword}
                        onChange={formik.handleChange}
                    />
                    <label className="form-check-label" htmlFor="rememberPassword">
                        Recordar contraseña
                    </label>
                </div>

                {/* Errores del formulario */}
                {formik.errors.form && (
                    <div className="form-error">
                        <div className="alert alert-danger">{formik.errors.form}</div>
                    </div>
                )}

                {/* Botones */}
                <div className="buttons">
                    <div className="primaryButton">
                        <PrimaryButton type="submit" disabled={formik.isSubmitting}>
                            { loading ? <Spinner style={{height: '20px', width: '20px'}} /> : 'Iniciar Sesión' }
                        </PrimaryButton>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;