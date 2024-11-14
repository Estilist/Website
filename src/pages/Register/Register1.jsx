import PageTitle from "../../../extras/PageTitle";
import PrimaryButton from "../../../buttons/PrimaryButton";
import PropTypes from "prop-types";
import SecondaryButton from "../../../buttons/SecondaryButton";
import { useNavigate } from "react-router-dom";
import countryList from 'react-select-country-list';

const Register1 = ({ formData, errors, handleChange }) => {
    const navigate = useNavigate();
    const countries = countryList().getData();

    return (
        <div>
            <PageTitle>Registrarme</PageTitle>
            <div className="TextForms">
                {/* Nombre */}
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input 
                        type="text" 
                        className={`form-control ${errors.nombre ? 'is-invalid' : ''}`} 
                        id="nombre" 
                        name="nombre"
                        placeholder="Ingresa tu nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        aria-describedby="nombreHelp" 
                    />
                    {errors.nombre && <small className="invalid-feedback">{errors.nombre}</small>}
                </div>

                {/* Apellido Paterno */}
                <div className="form-group">
                    <label htmlFor="apellidopaterno">Apellido Paterno</label>
                    <input 
                        type="text" 
                        className={`form-control ${errors.apellidopaterno ? 'is-invalid' : ''}`} 
                        id="apellidopaterno" 
                        name="apellidopaterno"
                        placeholder="Ingresa tu apellido paterno"
                        value={formData.apellidopaterno}
                        onChange={handleChange}
                    />
                    {errors.apellidopaterno && <small className="invalid-feedback">{errors.apellidopaterno}</small>}
                </div>

                {/* Apellido Materno */}
                <div className="form-group">
                    <label htmlFor="apellidomaterno">Apellido Materno</label>
                    <input 
                        type="text" 
                        className={`form-control ${errors.apellidomaterno ? 'is-invalid' : ''}`} 
                        id="apellidomaterno" 
                        name="apellidomaterno"
                        placeholder="Ingresa tu apellido materno"
                        value={formData.apellidomaterno}
                        onChange={handleChange}
                    />
                    {errors.apellidomaterno && <small className="invalid-feedback">{errors.apellidomaterno}</small>}
                </div>

                {/* País */}
                <div className="form-group">
                    <label htmlFor="pais">País</label>
                    <select
                        id="pais"
                        name="pais"
                        className={`form-control ${errors.pais ? 'is-invalid' : ''}`}
                        value={formData.pais}
                        onChange={handleChange}
                    >
                        <option value="">Selecciona tu país</option>
                        {countries.map((country) => (
                            <option key={country.value} value={country.value}>
                                {country.label}
                            </option>
                        ))}
                    </select>
                    {errors.pais && <small className="invalid-feedback">{errors.pais}</small>}
                </div>

                {/* Correo Electrónico */}
                <div className="form-group">
                    <label htmlFor="correo">Correo Electrónico</label>
                    <input 
                        type="email" 
                        className={`form-control ${errors.correo ? 'is-invalid' : ''}`} 
                        id="correo" 
                        name="correo"
                        placeholder="nombre@ejemplo.com"
                        value={formData.correo}
                        onChange={handleChange}
                        aria-describedby="correoHelp" 
                    />
                    {errors.correo && <small className="invalid-feedback">{errors.correo}</small>}
                </div>

                {/* Contraseña */}
                <div className="form-group">
                    <label htmlFor="contrasena">Contraseña</label>
                    <input 
                        type="password" 
                        className={`form-control ${errors.contrasena ? 'is-invalid' : ''}`} 
                        id="contrasena" 
                        name="contrasena"
                        placeholder="Crea una contraseña"
                        value={formData.contrasena}
                        onChange={handleChange}
                    />
                    {errors.contrasena && <small className="invalid-feedback">{errors.contrasena}</small>}
                </div>

                {/* Botones */}
                <div className="buttons">
                    <div className="primaryButton">
                        <PrimaryButton type="submit">
                            Registrarme e Iniciar
                        </PrimaryButton>
                    </div>
                    <div className="secondaryButton">
                        <SecondaryButton onClick={() => {navigate("/login")}}>
                            Ya tengo una cuenta
                        </SecondaryButton>
                    </div>
                </div>                
            </div>
        </div>
    );
};

Register1.propTypes = {
    formData: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default Register1;