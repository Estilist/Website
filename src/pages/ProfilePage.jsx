import PageTitle from '../components/extras/PageTitle';
import PrimaryButton from '../components/buttons/PrimaryButton';
import ProfileIcon from '../assets/icons/person-circle.svg'; 
import { useSession } from '../contexts/SessionContext';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const { session, logout } = useSession();
    const navigate = useNavigate();

    // no supe si se guardaba el nombre 
    session.name = "Teresa";

    return (
        <div className = "profile-content">
            {/* TITULO */}
            <PageTitle>Tu cuenta</PageTitle>
            {/* NOMBRE*/}
            <div className = "profile-info">
                <img src={ProfileIcon} alt="Icono del perfil" className="profile-icon" />
                <div className="profile-text">
                    Nombre: {session.name} <br />
                    ID: {session.id}
                </div>
            </div>
            <div className = "profile-buttons">
                {/* MODIFICAR FOTO */}
                <div className = "option-button button">
                    <PrimaryButton onClick={() => navigate('/upload-image')} type="button">
                        Modificar foto
                    </PrimaryButton>
                </div>
                {/* MODIFICAR MEDIDAS */}
                <div className = "option-button button">
                    <PrimaryButton onClick={() => navigate('/measurements')} type="button">
                        Modificar medidas
                    </PrimaryButton>
                </div>
                {/* CERRAR SESIÓN */}
                <div className ="option-button button">
                    <PrimaryButton onClick={logout} type="button">
                        Cerrar Sesión
                    </PrimaryButton>
                </div>
                {/* ELIMINAR CUENTA */}
                <div className ="delete-button button">
                    {/*logica para cerrar la cuenta*/}
                    <PrimaryButton type="button">
                        Eliminar Cuenta
                    </PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;

/*
<div>
    id: {session.id} <br />
    email: {session.email}
</div>

<div className="mt-3">
    <PrimaryButton onClick={() => navigate('/preferences')} type="button">
        Preferencias
    </PrimaryButton>
</div>
*/