import { useState, useEffect } from 'react';
import PageTitle from '../components/extras/PageTitle';
import StreakModal from '../components/extras/StreakModal';

const StreakPage = () => {
    const streakDays = 8;
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setShowModal(true);
    }, []);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="streak-page">
            <StreakModal show={showModal} onHide={handleCloseModal} />
            <div>
                <PageTitle>Mi Racha</PageTitle>
            </div>
            <div className="streak-subtitle">
                <p>Tienes una racha de:</p>
            </div>
            <div className="streak">
                <div className="streak-number">
                    {streakDays}
                </div>
                <div className="streak-days">
                    <p>días</p>
                </div>
            </div>
            <div className="streak-text">
                <p>Conéctate diario en Estilist para seguir con la racha.</p>
            </div>
        </div>
    );
};

export default StreakPage;