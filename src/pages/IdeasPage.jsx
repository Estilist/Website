import PageTitle from "../components/extras/PageTitle";
import RecommendationContent from "../components/RecommendationContent";
import FeedbackModal from "../components/extras/FeedbackModal";

const RecommendationPage = () => {
    return (
        <>
            <div className="recommendation-page">
                <PageTitle>Ideas</PageTitle>

                <RecommendationContent />
            </div>

            <FeedbackModal 
                show={false} 
            />
        </>
    )
};

export default RecommendationPage;