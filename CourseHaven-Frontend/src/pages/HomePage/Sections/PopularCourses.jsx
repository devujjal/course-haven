import PopularCourseCard from "../../../components/CourseCard/PopularCourseCard";
import CourseIntro from "../../../components/CourseIntro/CourseIntro";
import PopularCourseTab from "../../../components/Tab/PopularCourseTab";

const PopularCourses = () => {
    return (
        <section className="py-12">
            <div className="container mx-auto px-3 md:px-2">
                <div className="md:px-12">
                    <CourseIntro
                        title={'Most Popular Courses'}
                        des={'Choose from hundreds of courses from specialist organizations'} />
                    <PopularCourseTab />
                    <div className="flex flex-wrap justify-between mt-10">
                        {/* Here will be content show */}
                        <PopularCourseCard />
                        <PopularCourseCard />
                        <PopularCourseCard />
                        <PopularCourseCard />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PopularCourses;