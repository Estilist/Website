import PageTitle from "../components/extras/PageTitle";
import LilacButton from '../components/buttons/LilacButton';
import { useState } from 'react';

// fotos de ejempo para probar etiquetas
// Invierno
import Invierno1Image from '../assets/photos/ejemplos/invierno1.png';
import Invierno2Image from '../assets/photos/ejemplos/invierno2.png';
import Invierno3Image from '../assets/photos/ejemplos/invierno3.png';
import Invierno4Image from '../assets/photos/ejemplos/invierno4.png';
// Otoño
import Otono1Image from '../assets/photos/ejemplos/otono1.png';
import Otono2Image from '../assets/photos/ejemplos/otono2.png';
import Otono3Image from '../assets/photos/ejemplos/otono3.png';
import Otono4Image from '../assets/photos/ejemplos/otono4.png';
// Verano
import Verano1Image from '../assets/photos/ejemplos/verano1.png';
import Verano2Image from '../assets/photos/ejemplos/verano2.png';
import Verano3Image from '../assets/photos/ejemplos/verano3.png';
import Verano4Image from '../assets/photos/ejemplos/verano4.png';
// Primavera
import Primavera1Image from '../assets/photos/ejemplos/primavera1.png';
import Primavera2Image from '../assets/photos/ejemplos/primavera2.png';
import Primavera3Image from '../assets/photos/ejemplos/primavera3.png';
import Primavera4Image from '../assets/photos/ejemplos/primavera4.png';


const LastRankingsPage = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const imagesBySeason = {
        spring: [Primavera1Image, Primavera2Image, Primavera3Image, Primavera4Image],
        summer: [Verano1Image, Verano2Image, Verano3Image, Verano4Image],
        fall: [Otono1Image, Otono2Image, Otono3Image, Otono4Image],
        winter: [Invierno1Image, Invierno2Image, Invierno3Image, Invierno4Image],
    };

    const handleSeasonSelect = (event) => {
        setSelectedOption(event.target.value);
    };
    
    return (
        <div className="lastRankings-page">
            <div className="title">
                <PageTitle>Últimos Rankings</PageTitle>
            </div>
            <div className="lastRankings-tags">
                <div className="lastRankings-favorites">
                    <LilacButton>
                        Favoritos
                    </LilacButton>
                </div>
                <div className="lastRankings-season">
                    <select
                        id="season"
                        name="season"
                        className="lastRankings-select"
                        onChange={handleSeasonSelect}
                        defaultValue=""
                    >
                        <option value="" disabled>
                            Temporada ▼
                        </option>
                        <option value="spring">Primavera</option>
                        <option value="summer">Verano</option>
                        <option value="fall">Otoño</option>
                        <option value="winter">Invierno</option>
                    </select>
                </div>
            </div>
            <div className="season-images">
                {selectedOption && imagesBySeason[selectedOption]?.map((image, index) => (
                    <img 
                        key={index} 
                        src={image} 
                        alt={`${selectedOption} ${index + 1}`} 
                        className="season-image" 
                    />
                ))}
            </div>
        </div>
    );
};

export default LastRankingsPage;
