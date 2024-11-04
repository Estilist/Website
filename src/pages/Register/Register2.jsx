import PageTitle from "../../components/PageTitle";
import CameraIcon from '../../assets/icons/camera.svg'; 
import ImagesIcon from '../../assets/icons/images.svg';
import StarsIcon from '../../assets/icons/stars.svg';
import ChatHeartIcon from '../../assets/icons/chat-heart.svg';
import PrimaryButton from '../../components/PrimaryButton';

const Register2 = () => {
    return (
        <div className="help-us-page">
            <PageTitle>¡Ayúdanos a conocerte mejor!</PageTitle>
            <div className="help-us-container">
                <p className="description">Para una respuesta más personalizada, requerimos:</p>
                <div className="requirement">
                    <img src={StarsIcon} alt="Icono de mediciones" className="icon" />
                    <p>Medidas exactas de partes en específico de tu cuerpo, para obtener tipo y forma.</p>
                </div>
                <hr />
                <div className="requirement">
                    <img src={ImagesIcon} alt="Icono de galería" className="icon" />
                    <p>Permiso para acceder a tu galería de fotos, ya sea en tu dispositivo móvil u ordenador.</p>
                </div>
                <hr />
                <div className="requirement">
                    <img src={CameraIcon} alt="Icono de cámara" className="icon" />
                    <p>Compartir fotografías de tu rostro para obtener tono de piel, tipo de rostro y facciones.</p>
                </div>
                <hr />
                <div className="requirement">
                    <img src={ChatHeartIcon} alt="Icono de preferencias" className="icon" />
                    <p>Conocer tus preferencias en moda, gustos personales y cosas que no te gustan.</p>
                </div>
            </div>

            <div className="secondaryButton1">
                <PrimaryButton type="submit">
                    Aceptar
                </PrimaryButton>
            </div>
        </div>
    );
};

export default Register2;