import PageTitle from "../components/extras/PageTitle";
import LilacButton from '../components/buttons/LilacButton';
import SecondaryButton from '../components/buttons/SecondaryButton';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const StartPage = () => {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionSelect = (option, path) => {
        setSelectedOption({ option, path });
    };

    const handleNext = () => {
        if (selectedOption) {
            navigate(selectedOption.path);
        }
    };

    const buttonClass = (option) => selectedOption?.option === option ? 'selected' : '';

    return (
        <div className="start-page">
            <div className="title">
                <PageTitle>¿Con qué deseas iniciar?</PageTitle>
            </div>
            <div className="start-content">
                <label htmlFor="text" className="subtitle-label">Análisis de:</label>
                <div className="page-button">
                    {/* COLORIMETRIA */}
                    <LilacButton 
                        className={buttonClass('Colorimetría')} 
                        onClick={() => handleOptionSelect('Colorimetría', '/colorimetry')}
                    >
                        Colorimetría
                    </LilacButton>
                </div>
                <div className="page-button">
                    {/* TIPO DE CUERPO Y ROSTRO */}
                    <LilacButton 
                        className={buttonClass('Tipo de cuerpo y rostro')} 
                        onClick={() => handleOptionSelect('Tipo de cuerpo y rostro', '/body-face')}
                    >
                        Tipo de cuerpo y rostro
                    </LilacButton>
                </div>
            </div>

            <div className="start-content">
                <label htmlFor="text" className="subtitle-label">Mejorar mi:</label>
                <div className="page-button">
                    {/* CABELLO */}
                    <LilacButton 
                        className={buttonClass('Cabello')} 
                        onClick={() => handleOptionSelect('Cabello', '/hair')}
                    >
                        Cabello
                    </LilacButton>
                </div>
                <div className="page-button">
                    {/* BELLEZA */}
                    <LilacButton 
                        className={buttonClass('Belleza')} 
                        onClick={() => handleOptionSelect('Belleza', '/beauty')}
                    >
                        Belleza
                    </LilacButton>
                </div>
                <div className="page-button">
                    {/* ESTILO DE ROPA */}
                    <LilacButton 
                        className={buttonClass('Estilo de ropa')} 
                        onClick={() => handleOptionSelect('Estilo de ropa', '/clothing-style')}
                    >
                        Estilo de ropa
                    </LilacButton>
                </div>
                <div className="page-button">
                    {/* ACCESORIOS */}
                    <LilacButton 
                        className={buttonClass('Accesorios')} 
                        onClick={() => handleOptionSelect('Accesorios', '/accessories')}
                    >
                        Accesorios
                    </LilacButton>
                </div>
            </div>

            {/* SIGUIENTE */}
            <div className="secondaryButton4">
                <SecondaryButton onClick={handleNext}>
                    Siguiente
                </SecondaryButton>
            </div>
        </div>
    );
};

export default StartPage;
