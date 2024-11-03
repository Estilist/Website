import { useNavigate } from 'react-router-dom';
import PageTitle from "../components/PageTitle";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from '../components/SecondaryButton';

const RegisterPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <PageTitle>Registrarme</PageTitle>
            <form className="TextForms">
                {/* Nombre */}
                <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        placeholder="Ingresa tu nombre"
                        aria-describedby="nameHelp" 
                    />
                </div>

                {/* Apellido Paterno */}
                <div className="form-group">
                    <label htmlFor="lastName1">Apellido Paterno</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="lastName1" 
                        placeholder="Ingresa tu apellido paterno"
                    />
                </div>

                {/* Apellido Materno */}
                <div className="form-group">
                    <label htmlFor="lastName2">Apellido Materno</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="lastName2" 
                        placeholder="Ingresa tu apellido materno"
                    />
                </div>

                {/* Correo Electrónico */}
                <div className="form-group">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        placeholder="nombre@ejemplo.com"
                        aria-describedby="emailHelp" 
                    />
                </div>

                {/* Contraseña */}
                <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Crea una contraseña"
                    />
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
