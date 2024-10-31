import PageTitle from "../components/PageTitle";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from '../components/SecondaryButton';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <PageTitle>Iniciar Sesión</PageTitle>
            <form className = "TextForms">
                {/* Correo Electrónico */}
                <div className="form-group">
                    <label htmlFor="inputEmail">Correo Electrónico</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="inputEmail" 
                        placeholder="nombre@ejemplo.com" 
                        aria-describedby="emailHelp" 
                    />
                    
                </div>

                {/* Contraseña */}
                <div className="form-group">
                    <label htmlFor="inputPassword">Contraseña</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="inputPassword" 
                        placeholder="Crea una contraseña" 
                    />
                    <small id="passwordRequires" className="text">Utiliza mayúsculas, números y simbolos.</small>
                </div>

                {/* Checkbox recordar contraseña */}
                <div className="form-group form-check">
                    <input 
                        type="checkbox" 
                        className="form-check-input" 
                        id="rememberPassword" 
                    />
                    <label className="form-check-label" htmlFor="rememberPassword">
                        Recordar contraseña
                    </label>
                </div>

                {/* Botones */}
                <div className="buttons">
                    {/* Boton de Registro */}
                    <div className = "primaryButton">
                        <PrimaryButton onClick={() => navigate('/login')}>
                            Iniciar Sesión
                        </PrimaryButton>
                    </div>

                    {/* Boton de Ya Tengo Una Cuenta */}
                    <div className = "secondaryButton2">
                        <SecondaryButton onClick={() => navigate('/register')}>
                            Olvidé mi contraseña
                        </SecondaryButton>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;