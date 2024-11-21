import PageTitle from "../components/extras/PageTitle";
import RecommendationContent from "../components/RecommendationContent";

const RecommendationPage = () => {
    return (
        <>
            <div className="recommendation-page">
                <PageTitle>Ideas</PageTitle>

                <RecommendationContent />
            </div>            
        </>
    )
};

export default RecommendationPage;