import PageTitle from "../components/extras/PageTitle";
import LilacButton from '../components/buttons/LilacButton';
import SecondaryButton from '../components/buttons/SecondaryButton';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const PlanPage = () => {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionSelect = (option, path) => {
        setSelectedOption({ option, path });
    };

    const handleNext = () => {
        if (selectedOption) {
            navigate(selectedOption.path, { state: { selectedEvent: selectedOption.option } });
        }
    };

    const buttonClass = (option) => selectedOption?.option === option ? 'selected' : '';

    return (
        <div className="plan-page">
            <div className="title">
                <PageTitle>¿Cuál es el plan hoy?</PageTitle>
            </div>
            <div className="plan-content">
                <div className="plan-selection plan-option">
                    {/* OPCION 1 */}
                    <LilacButton
                        className={`plan-select ${buttonClass('Formal')}`}
                        onClick={() => handleOptionSelect('Formal/Gala', '/recommendation')}
                    >
                        Formal
                    </LilacButton>
                    {/* OPCION 2 */}
                    <LilacButton
                        className={`plan-select ${buttonClass('Gala')}`}
                        onClick={() => handleOptionSelect('Formal/Gala', '/recommendation')}
                    >
                        Gala
                    </LilacButton>
                    {/* OPCION 3 */}
                    <LilacButton
                        className={`plan-select ${buttonClass('Casual')}`}
                        onClick={() => handleOptionSelect('Casual', '/recommendation')}
                    >
                        Casual
                    </LilacButton>
                    {/* OPCION 4 */}
                    <LilacButton
                        className={`plan-select ${buttonClass('Festivo')}`}
                        onClick={() => handleOptionSelect('Festivo', '/recommendation')}
                    >
                        Festivo
                    </LilacButton>
                    {/* OPCION 5 */}
                    <LilacButton
                        className={`plan-select ${buttonClass('Elegante')}`}
                        onClick={() => handleOptionSelect('Elegante', '/recommendation')}
                    >
                        Elegante
                    </LilacButton>
                    {/* OPCION 6 */}
                    <LilacButton
                        className={`plan-select ${buttonClass('Semiformal Cocktail')}`}
                        onClick={() => handleOptionSelect('Semiformal Cocktail', '/recommendation')}
                    >
                        Semiformal Cocktail
                    </LilacButton>
                    {/* OPCION 7 */}
                    <LilacButton
                        className={`plan-select ${buttonClass('Negocios Formal')}`}
                        onClick={() => handleOptionSelect('Negocios Formal', '/recommendation')}
                    >
                        Negocios Formal
                    </LilacButton>
                    {/* OPCION 8 */}
                    <LilacButton
                        className={`plan-select ${buttonClass('Negocios Casual')}`}
                        onClick={() => handleOptionSelect('Negocios Casual', '/recommendation')}
                    >
                        Negocios Casual
                    </LilacButton>
                    {/* OPCION 9 */}
                    <LilacButton
                        className={`plan-select ${buttonClass('Casual Elegante')}`}
                        onClick={() => handleOptionSelect('Casual Elegante', '/recommendation')}
                    >
                        Casual Elegante
                    </LilacButton>
                    {/* OPCION 10 */}
                    <LilacButton
                        className={`plan-select ${buttonClass('Corbata Negra')}`}
                        onClick={() => handleOptionSelect('Corbata Negra', '/recommendation')}
                    >
                        Corbata Negra
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
