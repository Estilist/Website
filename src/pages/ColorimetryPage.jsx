import { useState } from "react";
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

const colorimetryImages = {
    ropa: {
        calido: ropaCalido,
        frio: ropaFrio,
        neutro: ropaNeutro
    },
    cabello: {
        calido: cabelloCalido,
        frio: cabelloFrio,
        neutro: cabelloNeutro
    },
    accesorios: {
        calido: accesoriosCalido,
        frio: accesoriosFrio,
        neutro: accesoriosNeutro
    }
};

const ColorimetryPage = () => {
    const navigate = useNavigate();
    const [skinTone, setSkinTone] = useState("calido"); // Cambia el valor a 'frio' o 'neutro'

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
                        <img src={ropaCalido} alt="Colores para ropa" className="color-image" />
                    </div>
                </div>

                {/* Cabello */}
                <div className="color-section">
                    <label htmlFor="text" className="categories-label">Cabello:</label>
                    <div className="color-box">
                        <img src={cabelloCalido} alt="Colores para cabello" className="color-image" />
                    </div>
                </div>

                {/* Accesorios */}
                <div className="color-section">
                    <label htmlFor="text" className="categories-label">Accesorios:</label>
                    <div className="color-box">
                        <img src={accesoriosCalido} alt="Colores para accesorios" className="color-image" />
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
