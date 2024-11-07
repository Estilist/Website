import PageTitle from '../components/PageTitle';
import { useSession } from '../contexts/SessionContext';
import PrimaryButton from '../components/PrimaryButton';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const { session, logout } = useSession();
    const navigate = useNavigate();

    return (
        <>
            {/* Botón de Iniciar Sesión y Registrarme */}
            <PageTitle>Perfil</PageTitle>

            {/* Información del perfil */}
            <div>
                id: {session.id} <br />
                email: {session.email}
            </div>

            {/* Botón de Preferencias */}
            <div className="mt-3">
                <PrimaryButton onClick={() => navigate('/preferences')} type="button">
                    Preferencias
                </PrimaryButton>
            </div>

            {/* Botón de Resultados */}
            <div className="mt-3">
                <PrimaryButton onClick={() => navigate('/results')} type="button">
                    Resultados
                </PrimaryButton>
            </div>

            {/* Botón de Cerrar Sesión */}
            <div className="logout-button mt-3">
                <PrimaryButton onClick={logout} type="button">
                    Cerrar Sesión
                </PrimaryButton>
            </div>
        </>
    );
};

export default ProfilePage;