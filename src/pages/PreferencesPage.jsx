import { useState } from 'react';
import PageTitle from "../components/PageTitle";
import OptionButton from "../components/OptionButton";
import SecondaryButton from '../components/SecondaryButton';
import ImageButton from "../components/ImageButton";
import { clothes, accesories, accessoriesColors, manHaircut, womanHaircut, makeup, haircolor } from '../components/StylesData'; 

const PreferencesPage = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedStyle, setSelectedStyle] = useState(null);
    const [selectedAccessory, setSelectedAccessory] = useState(null);
    const [selectedAccessoryColor, setSelectedAccessoryColor] = useState(null);
    const [selectedManHaircut, setSelectedManHaircut] = useState(null);
    const [selectedWomanHaircut, setSelectedWomanHaircut] = useState(null);
    const [selectedMakeup, setSelectedMakeup] = useState(null);
    const [selectedHairColor, setSelectedHairColor] = useState(null);

    // Manejadores generales de click
    const handleSelection = (type, value) => {
        switch(type) {
            case 'option': setSelectedOption(value); break;
            case 'style': setSelectedStyle(value); break;
            case 'accessory': setSelectedAccessory(value); break;
            case 'accessoryColor': setSelectedAccessoryColor(value); break;
            case 'manHaircut': setSelectedManHaircut(value); break;
            case 'womanHaircut': setSelectedWomanHaircut(value); break;
            case 'makeup': setSelectedMakeup(value); break;
            case 'hairColor': setSelectedHairColor(value); break;
            default: break;
        }
    };
    const handleNext = () => {
        if (selectedOption) {
            navigate(selectedOption.path);
        }
    };
    const buttonClass = (option) => {
        return selectedOption === option ? 'selected' : '';
    };
    const scrollLeft = (id) => {
        const container = document.getElementById(id);
        container.scrollBy({ left: -150, behavior: 'smooth' });
    };
    const scrollRight = (id) => {
        const container = document.getElementById(id);
        container.scrollBy({ left: 150, behavior: 'smooth' });
    };

    return (
        <div className="preferences-page">
            <div className="title">
                <PageTitle>Preferencias</PageTitle>
            </div>
            <div className="preferences-content">
                {/* Estilo de recomendación */}
                <label htmlFor="subtitle" className="subtitle-preferences">Estilo de recomendación</label>
                <div className="page-button">
                    <OptionButton
                        className={buttonClass('Femenina')}
                        onClick={() => handleSelection('option', 'Femenina')}
                    >
                        Femeninas
                    </OptionButton>
                    <OptionButton
                        className={buttonClass('Masculino')}
                        onClick={() => handleSelection('option', 'Masculino')}
                    >
                        Masculinas
                    </OptionButton>
                </div>
                <hr />
                {/* Ropa */}
                <div className="style-section">
                    <label htmlFor="subtitle" className="subtitle-preferences">Estilo de ropa</label>
                    <button className="arrow-button left" onClick={() => scrollLeft('clothes')}>&lt;</button>
                    <div className="style-buttons-container" id="clothes">
                        <div className="style-buttons">
                            {clothes.map((style) => (
                                <ImageButton
                                    key={style.name}
                                    imageSrc={style.src}
                                    isSelected={selectedStyle === style.name}
                                    onClick={() => handleSelection('style', style.name)}
                                />
                            ))}
                        </div>
                    </div> 
                    <button className="arrow-button right" onClick={() => scrollRight('clothes')}>&gt;</button>
                </div>
                <hr />

                {/* Accesorios */}
                <div className="style-section">
                    <label htmlFor="subtitle" className="subtitle-preferences">Estilo de accesorios</label>
                    <button className="arrow-button left" onClick={() => scrollLeft('accesories')}>&lt;</button>
                    <div className="style-buttons-container" id="accesories">
                        <div className="style-buttons">
                            {accesories.map((accessory) => (
                                <ImageButton
                                    key={accessory.name}
                                    imageSrc={accessory.src}
                                    isSelected={selectedAccessory === accessory.name}
                                    onClick={() => handleSelection('accessory', accessory.name)}
                                />
                            ))}
                        </div>
                    </div>
                    <button className="arrow-button right" onClick={() => scrollRight('accesories')}>&gt;</button>
                </div>
                <hr />

                {/* Colores de accesorios */}
                <label htmlFor="subtitle" className="subtitle-preferences">Colores de accesorios</label>
                <div className="style-section">
                    <button className="arrow-button left v2" onClick={() => scrollLeft('accessoryColors')}> &lt; </button>
                    <div className="style-buttons-container" id="accessoryColors">
                        <div className="style-buttons">
                            {accessoriesColors.map((accessoryColor) => (
                                <ImageButton
                                    key={accessoryColor.name}
                                    imageSrc={accessoryColor.src}
                                    isSelected={selectedAccessoryColor === accessoryColor.name}
                                    onClick={() => handleSelection('accessoryColor', accessoryColor.name)}
                                />
                            ))}
                        </div>
                    </div>
                    <button className="arrow-button right v2" onClick={() => scrollRight('accessoryColors')}> &gt; </button>
                </div>
                <hr />

                {/* Cortes de cabello para hombres */}
                <label htmlFor="subtitle" className="subtitle-preferences">Cortes de cabello para hombres</label>
                <div className="style-section">
                    <button className="arrow-button left v2" onClick={() => scrollLeft('manHaircuts')}> &lt; </button>
                    <div className="style-buttons-container" id="manHaircuts">
                        <div className="style-buttons">
                            {manHaircut.map((manHair) => (
                                <ImageButton
                                    key={manHair.name}
                                    imageSrc={manHair.src}
                                    isSelected={selectedManHaircut === manHair.name}
                                    onClick={() => handleSelection('manHaircut', manHair.name)}
                                />
                            ))}
                        </div>
                    </div>
                    <button className="arrow-button right v2" onClick={() => scrollRight('manHaircuts')}> &gt; </button>
                </div>
                <hr />

                {/* Cortes de cabello para mujeres */}
                <label htmlFor="subtitle" className="subtitle-preferences">Cortes de cabello para mujeres</label>
                <div className="style-section">
                    <button className="arrow-button left v2" onClick={() => scrollLeft('womanHaircuts')}> &lt; </button>
                    <div className="style-buttons-container" id="womanHaircuts">
                        <div className="style-buttons">
                            {womanHaircut.map((womanHair) => (
                                <ImageButton
                                    key={womanHair.name}
                                    imageSrc={womanHair.src}
                                    isSelected={selectedWomanHaircut === womanHair.name}
                                    onClick={() => handleSelection('womanHaircut', womanHair.name)}
                                />
                            ))}
                        </div>
                    </div>
                    <button className="arrow-button right v2" onClick={() => scrollRight('womanHaircuts')}> &gt; </button>
                </div>
                <hr />

                {/* Maquillaje */}
                <label htmlFor="subtitle" className="subtitle-preferences">Estilo de maquillaje</label>
                <div className="style-section">
                    <button className="arrow-button left v2" onClick={() => scrollLeft('makeupStyles')}> &lt; </button>
                    <div className="style-buttons-container" id="makeupStyles">
                        <div className="style-buttons">
                            {makeup.map((makeUp) => (
                                <ImageButton
                                    key={makeUp.name}
                                    imageSrc={makeUp.src}
                                    isSelected={selectedMakeup === makeUp.name}
                                    onClick={() => handleSelection('makeup', makeUp.name)}
                                />
                            ))}
                        </div>
                    </div>
                    <button className="arrow-button right v2" onClick={() => scrollRight('makeupStyles')}> &gt; </button>
                </div>
                <hr />

                {/* Color de cabello */}
                <label htmlFor="subtitle" className="subtitle-preferences">Color de cabello</label>
                <div className="style-section">
                    <button className="arrow-button left v2" onClick={() => scrollLeft('hairColors')}> &lt; </button>
                    <div className="style-buttons-container" id="hairColors">
                        <div className="style-buttons">
                            {haircolor.map((hairColor) => (
                                <ImageButton
                                    key={hairColor.name}
                                    imageSrc={hairColor.src}
                                    isSelected={selectedHairColor === hairColor.name}
                                    onClick={() => handleSelection('hairColor', hairColor.name)}
                                />
                            ))}
                        </div>
                    </div>
                    <button className="arrow-button right v2" onClick={() => scrollRight('hairColors')}> &gt; </button>
                </div>
                <hr />

                {/* SIGUIENTE */}
                <div className="secondaryButton4">
                    <SecondaryButton onClick={handleNext}>
                        Siguiente
                    </SecondaryButton>
                </div>
            </div>
        </div>
    );
};

export default PreferencesPage;
