import PageTitle from "../components/extras/PageTitle";
import RecommendationContent from "../components/RecommendationContent";
import SecondaryButton from "../components/buttons/SecondaryButton";

const RecommendationPage = () => {

    return (
        <div className="recommendation-page">
            <PageTitle>¡Te tenemos esta opción!</PageTitle>

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