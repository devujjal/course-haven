import FeaturesSection from "../Sections/FeaturesSection";
import FeedBackSection from "../Sections/FeedBackSection";
import HeroSection from "../Sections/HeroSection";
import InstructorSection from "../Sections/InstructorSection";
import TrendingCourses from "../Sections/TrendingCourses";

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <FeaturesSection />
            <InstructorSection />
            <TrendingCourses />
            <FeedBackSection />

        </>
    );
};

export default HomePage;