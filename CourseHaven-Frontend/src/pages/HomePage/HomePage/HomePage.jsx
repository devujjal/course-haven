import FeaturesSection from "../Sections/FeaturesSection";
import FeedBackSection from "../Sections/FeedBackSection";
import HeroSection from "../Sections/HeroSection";
import InstructorSection from "../Sections/InstructorSection";
import PopularCourses from "../Sections/PopularCourses";
import TrendingCourses from "../Sections/TrendingCourses";

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <FeaturesSection />
            <PopularCourses />
            <InstructorSection />
            <TrendingCourses />
            <FeedBackSection />

        </>
    );
};

export default HomePage;