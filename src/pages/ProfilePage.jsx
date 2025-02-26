import PageTitle from '../components/extras/PageTitle';
import PrimaryButton from '../components/buttons/PrimaryButton';
import LoadingPage from '../pages/LoadingPage';
import ProfileIcon from '../assets/icons/person-circle.svg'; 
import { useSession } from '../contexts/SessionContext';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import request from '../api';

const ProfilePage = () => {
    const { session, logout } = useSession();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const r = await request(`/users/${session.id}/`, 'GET', null, false);
                // console.log(r);

                session.name = r.nombre + " " + r.apellidopaterno;
                session.email = r.correo;
                setLoading(false);          
            } catch (error) {
                console.error(error);
                navigate('/login');
            }
        }
        fetchData();
    }, []);

    const handleDeleteAccount = async () => {
        try {
            const r = await request(`/delete-user/`, "POST", { "idusuario": session.id }, true);
            console.log(r);
            logout();
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    }

    if (loading) {
        return <LoadingPage />
    }

    return (
        <div className = "profile-content">
            {/* TITULO */}
            <PageTitle>Tu cuenta</PageTitle>
            {/* NOMBRE*/}
            <div className="profile-info">
                <img src={ProfileIcon} alt="Icono del perfil" className="profile-icon" />
                <div className="profile-text">
                    {/* Name with max 16 chars */
                        session.name.length > 16 ? session.name.slice(0, 16) + "..." : session.name
                    } <br />
                    <small style={{fontWeight: "400"}}>
                        Editar datos
                    </small>
                </div>
            </div>
            <div className = "profile-buttons">
                {/* ULTIMOS RANKINGS */}
                <div className = "option-button button">
                    <PrimaryButton onClick={() => navigate('/last-rankings')} type="button">
                        Últimos Rankings
                    </PrimaryButton>
                </div>
                {/* MODIFICAR MEDIDAS */}
                <div className = "option-button button">
                    <PrimaryButton onClick={() => navigate('/upload-image')} type="button">
                        Modificar Foto
                    </PrimaryButton>
                </div>
                {/* MODIFICAR MEDIDAS */}
                <div className = "option-button button">
                    <PrimaryButton onClick={() => navigate('/measurements')} type="button">
                        Modificar Medidas
                    </PrimaryButton>
                </div>
                {/* CERRAR SESIÓN */}
                <div className ="option-button button">
                    <PrimaryButton onClick={() => {logout(); navigate('/')}} type="button">
                        Cerrar Sesión
                    </PrimaryButton>
                </div>
                {/* ELIMINAR CUENTA */}
                <div className ="delete-button button">
                    {/* Lógica para cerrar la cuenta*/}
                    <PrimaryButton type="button" onClick={() => handleDeleteAccount()}>
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