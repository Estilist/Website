import PageTitle from "../components/extras/PageTitle";
import RecommendationContent from "../components/RecommendationContent";

const RecommendationPage = () => {
    return (
        <div className="recommendation-page">
            <div className="title">
                <PageTitle>Ideas</PageTitle>
            </div>

            <RecommendationContent />
        </div>
    )
};

export default RecommendationPage;