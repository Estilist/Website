import PageTitle from "../components/extras/PageTitle";
import RecommendationContent from "../components/RecommendationContent";
import FeedbackModal from "../components/extras/FeedbackModal";

const RecommendationPage = () => {
    return (
        <>
            <div className="recommendation-page">
                <div className="title">
                    <PageTitle>Ideas</PageTitle>
                </div>

                <RecommendationContent />
            </div>

            <FeedbackModal 
                show={false} 
            />
        </>
    )
};

export default RecommendationPage;