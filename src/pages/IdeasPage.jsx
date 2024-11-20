import PageTitle from "../components/extras/PageTitle";
import RecommendationContent from "../components/RecommendationContent";
import PrimaryButton from "../components/buttons/PrimaryButton";
import { useNavigate } from "react-router-dom";

const RecommendationPage = () => {
    const navigate = useNavigate();

    return (
        <div className="recommendation-page">
            <div className="title">
                <PageTitle>Ideas</PageTitle>
            </div>

            <RecommendationContent />
            <div className="recommendation-buttons">
                <div className="recommendation-PB">
                    <PrimaryButton onClick={() => navigate("/")}>
                        Aceptar
                    </PrimaryButton>
                </div>
            </div>
        </div>
    )
};

export default RecommendationPage;