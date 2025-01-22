import TrendingCourseCard from '../../../components/CourseCard/TrendingCourseCard';
import CourseIntro from '../../../components/CourseIntro/CourseIntro';

const TrendingCourses = () => {
    return (
        <section className="py-12">
            <div className="container mx-auto px-3 md:px-2">
                <CourseIntro title={'Our Trending Courses'} des={'Check out most 🔥 courses in the market'} />

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