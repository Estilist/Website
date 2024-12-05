import PageTitle from "../components/extras/PageTitle";
import LilacButton from '../components/buttons/LilacButton';
import SecondaryButton from '../components/buttons/SecondaryButton';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const PlanPage = () => {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedStyle, setSelectedStyle] = useState(null);

    const handleOptionSelect = (option, path) => {
        setSelectedOption({ option, path });
    };
    const handleStyleSelect = (style) => {
        setSelectedStyle(style);
    };

    const handleNext = () => {
        if (selectedOption && selectedStyle) {
            navigate(selectedOption.path, { 
                state: { 
                    selectedEvent: selectedOption.option, 
                    selectedStyle 
                }
            });
        } else {
            alert("Por favor selecciona un plan y un estilo.");
        }
    };

    const buttonClass = (option) => selectedOption?.option === option ? 'selected' : '';
    const buttonStyle = (style) => selectedStyle === style ? 'selected' : '';
    return (
        <div className="plan-page">
            <div className="title">
                <PageTitle>¿Cuál es el plan hoy?</PageTitle>
            </div>
            <div className="plan-content">
                <div className="plan-selection plan-option">
                    <LilacButton
                        className={`plan-select ${buttonClass('Formal/Gala')}`}
                        onClick={() => handleOptionSelect('Formal/Gala', '/recommendation')}
                    >
                        Formal/Gala
                    </LilacButton>
                    <LilacButton
                        className={`plan-select ${buttonClass('Casual')}`}
                        onClick={() => handleOptionSelect('Casual', '/recommendation')}
                    >
                        Casual
                    </LilacButton>
                    <LilacButton
                        className={`plan-select ${buttonClass('Festivo')}`}
                        onClick={() => handleOptionSelect('Festivo', '/recommendation')}
                    >
                        Festivo
                    </LilacButton>
                    <LilacButton
                        className={`plan-select ${buttonClass('Elegante')}`}
                        onClick={() => handleOptionSelect('Elegante', '/recommendation')}
                    >
                        Elegante
                    </LilacButton>
                    <LilacButton
                        className={`plan-select ${buttonClass('Semiformal Cocktail')}`}
                        onClick={() => handleOptionSelect('Semiformal Cocktail', '/recommendation')}
                    >
                        Semiformal Cocktail
                    </LilacButton>
                    <LilacButton
                        className={`plan-select ${buttonClass('Negocios Formal')}`}
                        onClick={() => handleOptionSelect('Negocios Formal', '/recommendation')}
                    >
                        Negocios Formal
                    </LilacButton>
                    <LilacButton
                        className={`plan-select ${buttonClass('Negocios Casual')}`}
                        onClick={() => handleOptionSelect('Negocios Casual', '/recommendation')}
                    >
                        Negocios Casual
                    </LilacButton>
                    <LilacButton
                        className={`plan-select ${buttonClass('Corbata Negra')}`}
                        onClick={() => handleOptionSelect('Corbata Negra', '/recommendation')}
                    >
                        Corbata Negra
                    </LilacButton>
                </div>
            </div>
            <div className="plan-subtitle">
                <p>Estilo de preferencia:</p>
            </div>
            <div className="plan-content">
                <div className="plan-selection plan-option">
                    {/* OPCIONES DE ESTILO */}
                    <LilacButton
                        className={`plan-select ${buttonStyle('MiEstilo')}`}
                        onClick={() => handleStyleSelect('MiEstilo')}
                    >
                        Mi estilo
                    </LilacButton>
                    <LilacButton
                        className={`plan-select ${buttonStyle('Experimentar')}`}
                        onClick={() => handleStyleSelect('Experimentar')}
                    >
                        Experimentar
                    </LilacButton>
                </div>
            </div>
            {/* Aceptar */}
            <div className="plan-SB">
                <SecondaryButton onClick={handleNext}>
                    Aceptar
                </SecondaryButton>
            </div>
        </div>
    );
};

export default PlanPage;
