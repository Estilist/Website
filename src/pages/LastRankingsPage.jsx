import PageTitle from "../components/extras/PageTitle";
import LilacButton from '../components/buttons/LilacButton';
import { useState, useEffect } from 'react';
import { useSession } from "../contexts/SessionContext";
import request from "../api";

const LastRankingsPage = () => {
    const { session } = useSession();
    const [selectedOption, setSelectedOption] = useState(null);
    const [rankings, setRankings] = useState([]);

    const handleSeasonSelect = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleFavorites = async () => {
        const idusuario = session.id;
        const favoritos = '';
        setSelectedOption('');

        try {
            console.log(`Fetching /get-rankings/?idusuario=${idusuario}&favoritos=${favoritos}`);
            const response = await request(`/get-rankings/?idusuario=${idusuario}&favoritos=${favoritos}`, 'GET', null, false);
            setRankings(response.rankings[0]);
            console.log(response.rankings[0]);
        } catch (error) {
            console.error('Error fetching favorites rankings:', error);
        }
    };

    useEffect(() => {
        const fetchRankings = async () => {
            if (selectedOption) {
                const temporada = selectedOption;
                const idusuario = session.id;

                try {
                    console.log(`Fetching /get-rankings/?idusuario=${idusuario}&temporada=${temporada}`);
                    const response = await request(`/get-rankings/?idusuario=${idusuario}&temporada=${temporada}`, 'GET', null, false);
                    setRankings(response.rankings[0]);
                    console.log(response.rankings[0]);
                } catch (error) {
                    console.error('Error fetching rankings:', error);
                }
            }
        };

        fetchRankings();
    }, [selectedOption, session.id]);

    return (
        <div className="lastRankings-page">
            <div className="title">
                <PageTitle>Últimos Rankings</PageTitle>
            </div>
            <div className="lastRankings-tags">
                <div className="lastRankings-favorites">
                    <LilacButton onClick={handleFavorites}>
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
                        <option value="Primavera">Primavera</option>
                        <option value="Verano">Verano</option>
                        <option value="Otoño">Otoño</option>
                        <option value="Invierno">Invierno</option>
                    </select>
                </div>
            </div>
            {rankings.length > 0 && (
                <div className="season-images">
                    {rankings.map(([url], index) => (
                        <img
                            key={index}
                            src={url}
                            alt={`Ranking ${index + 1}`}
                            className="season-image"
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default LastRankingsPage;