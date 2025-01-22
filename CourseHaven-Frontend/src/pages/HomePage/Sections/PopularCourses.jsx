import PopularCourseCard from "../../../components/CourseCard/PopularCourseCard";
import PopularCourseTab from "../../../components/Tab/PopularCourseTab";

const PopularCourses = () => {
    return (
        <section className="py-12">
            <div className="container mx-auto px-3 md:px-2">
                <div className="md:px-12">
                    <div>

                    </div>
                    <PopularCourseTab />
                    <div className="flex flex-wrap justify-between">
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