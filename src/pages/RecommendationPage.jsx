import PageTitle from "../components/extras/PageTitle";
import RecommendationContent from "../components/RecommendationContent";
import SecondaryButton from "../components/buttons/SecondaryButton";
import { useNavigate } from "react-router-dom";

const RecommendationPage = () => {
    const navigate = useNavigate();

    return (
        <div className="recommendation-page">
            <div className="title">
                <PageTitle>¡Te tenemos esta opción!</PageTitle>
            </div>

            <RecommendationContent />
            <div className="recommendation-buttons">
                <div className="recommendation-SB">
                    <SecondaryButton type="submit">
                        Reformular
                    </SecondaryButton>
                </div>
            </div>
        </div>
    )
};

export default RecommendationPage;