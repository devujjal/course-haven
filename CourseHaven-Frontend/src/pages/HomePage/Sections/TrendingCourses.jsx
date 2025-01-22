import TrendingCourseCard from '../../../components/CourseCard/TrendingCourseCard';

const TrendingCourses = () => {
    return (
        <section className="py-12">
            <div className="container mx-auto px-3 md:px-2">
                <div className="text-center pb-10">

                    <h2 className="text-3xl lg:text-5xl font-heebo font-bold text-gray-800">
                        Our Trending Courses
                    </h2>

                    <p className="text-gray-500 mt-2 flex items-center justify-center gap-2">
                        Check out most
                        <span className="text-orange-500 text-xl">🔥</span>
                        courses in the market
                    </p>
                </div>

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