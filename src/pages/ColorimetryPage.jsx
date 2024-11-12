import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import PrimaryButton from '../components/PrimaryButton';

// Importar las imágenes de colorimetría
import ropaCalido from '../assets/photos/paletas/ROPA-CALIDO.png';
import ropaFrio from '../assets/photos/paletas/ROPA-FRIO.png';
import ropaNeutro from '../assets/photos/paletas/ROPA-NEUTRO.png';

import cabelloCalido from '../assets/photos/paletas/CABELLO-CALIDO.png';
import cabelloFrio from '../assets/photos/paletas/CABELLO-FRIO.png';
import cabelloNeutro from '../assets/photos/paletas/CABELLO-NEUTRO.png';

import accesoriosCalido from '../assets/photos/paletas/ACCESORIOS-CALIDO.png';
import accesoriosFrio from '../assets/photos/paletas/ACCESORIOS-FRIO.png';
import accesoriosNeutro from '../assets/photos/paletas/ACCESORIOS-NEUTRO.png';
import request from "../api";
import { useSession } from "../contexts/SessionContext";
import LoadingPage from "./LoadingPage";

const colorimetryImages = {
    ropa: {
        Calido: ropaCalido,
        Frio: ropaFrio,
        Neutro: ropaNeutro
    },
    cabello: {
        Calido: cabelloCalido,
        Frio: cabelloFrio,
        Neutro: cabelloNeutro
    },
    accesorios: {
        Calido: accesoriosCalido,
        Frio: accesoriosFrio,
        Neutro: accesoriosNeutro
    }
};

const ColorimetryPage = () => {
    const navigate = useNavigate();
    const { session } = useSession();
    const [skinTone, setSkinTone] = useState("Neutro");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        
        const fetchData = async () => {
            const response = await request(`/colorimetry/?idusuario=${session.id}`, 'GET', null, false);
            console.log(response);

            if (response.length === 0) {
                navigate('/upload-image');
                return;
            } else {
                setSkinTone(response[0].tono);
            }

            setLoading(false);
        };
        fetchData();
    }, [session.id, navigate]);

    if (loading) {
        return <LoadingPage />;
    }

    return (
        <div className="colorimetry-page">
            <div className="title">
                <PageTitle>Colorimetría</PageTitle>
            </div>

            <div className="colorimetry-subtitle">
                <label htmlFor="text" className="subtitle-label">¡Tus resultados!</label>
                <label htmlFor="text" className="subtitle1-label">Colores que te favorecen en:</label>
            </div>

            <div className="colorimetry-content">
                {/* Ropa */}
                <div className="color-section">
                    <label htmlFor="text" className="categories-label">Ropa:</label>
                    <div className="color-box">
                        <img src={colorimetryImages.ropa[skinTone]} alt="Colores para ropa" className="color-image" />
                    </div>
                </div>

                {/* Cabello */}
                <div className="color-section">
                    <label htmlFor="text" className="categories-label">Cabello:</label>
                    <div className="color-box">
                        <img src={colorimetryImages.cabello[skinTone]} alt="Colores para cabello" className="color-image" />
                    </div>
                </div>

                {/* Accesorios */}
                <div className="color-section">
                    <label htmlFor="text" className="categories-label">Accesorios:</label>
                    <div className="color-box">
                        <img src={colorimetryImages.accesorios[skinTone]} alt="Colores para accesorios" className="color-image" />
                    </div>
                </div>
            </div>
            {/* Aceptar */}
            <div className="secondaryButton4">
                <PrimaryButton onClick={() => navigate('/')}>
                    Aceptar
                </PrimaryButton>
            </div>
        </div>
    );
};

export default ColorimetryPage;
