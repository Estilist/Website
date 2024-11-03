import PageTitle from '../components/PageTitle';
import { useSession } from '../contexts/SessionContext';
import PrimaryButton from '../components/PrimaryButton';

const ProfilePage = () => {
    const { session, logout } = useSession();

    return (
        <>
            {/* Botón de Iniciar Sesión y Registrarme */}
            <PageTitle>Perfil</PageTitle>

            {/* Información del perfil */}
            <div>
                id: {session.id} <br />
                email: {session.email}
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