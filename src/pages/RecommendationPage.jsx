import { useState } from 'react';
import PageTitle from "../components/extras/PageTitle";
import RecommendationContent from "../components/RecommendationContent";
import SecondaryButton from "../components/buttons/SecondaryButton";

const RecommendationPage = () => {
    const [refreshKey, setRefreshKey] = useState(0);

    const handleReformulate = () => {
        setRefreshKey(prevKey => prevKey + 1);
    };

    return (
        <div className="recommendation-page">
            <PageTitle>¡Te tenemos esta opción!</PageTitle>

            <RecommendationContent refreshKey={refreshKey} />
            <div className="recommendation-buttons">
                <div className="recommendation-SB">
                    <SecondaryButton type="submit" onClick={handleReformulate}>
                        Reformular
                    </SecondaryButton>
                </div>
            </div>
        </div>
    )
};

export default RecommendationPage;