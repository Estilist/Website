import PageTitle from "../components/PageTitle";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from '../components/SecondaryButton';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <PageTitle>Registrarme</PageTitle>
            <form className="TextForms">
                {/* Nombre */}
                <div className="form-group">
                    <label htmlFor="inputName">Nombre</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="inputName" 
                        placeholder="Ingresa tu nombre" 
                        aria-describedby="nameHelp" 
                    />
                </div>

                {/* Apellido Paterno */}
                <div className="form-group">
                    <label htmlFor="inputLastName1">Apellido Paterno</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="inputLastName1" 
                        placeholder="Ingresa tu apellido paterno" 
                    />
                </div>

                {/* Apellido Materno */}
                <div className="form-group">
                    <label htmlFor="inputLastName2">Apellido Materno</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="inputLastName2" 
                        placeholder="Ingresa tu apellido materno" 
                    />
                </div>

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

                {/* Botones */}
                <div className="buttons">
                    {/* Boton de Registro */}
                    <div className = "primaryButton">
                        <PrimaryButton onClick={() => navigate('/helpUs')}>
                            Registrarme e Iniciar
                        </PrimaryButton>
                    </div>

                    {/* Boton de Ya Tengo Una Cuenta */}
                    <div className = "secondaryButton">
                        <SecondaryButton onClick={() => navigate('/login')}>
                            Ya tengo una cuenta
                        </SecondaryButton>
                    </div>
                </div>
                
            </form>
        </div>
    );
};

export default RegisterPage;
