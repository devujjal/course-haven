import TrendingCourseCard from "../../../components/CourseCard/TrendingCourseCard";

const TrendingCourses = () => {
    return (
        <section className="py-12">
            <div className="container mx-auto px-3 md:px-2">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between md:px-12">
                    <TrendingCourseCard />
                    <TrendingCourseCard />
                    <TrendingCourseCard />
                    
                </div>
            </div>
        </section>
    );
};

export default TrendingCourses;