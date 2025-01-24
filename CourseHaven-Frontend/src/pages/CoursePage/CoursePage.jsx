import { useQuery } from "@tanstack/react-query";
import FilterStuff from "./Sections/FilterStuff";
import SubscribeSection from "./Sections/SubscribeSection";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import PopularCourseCard from "../../components/CourseCard/PopularCourseCard";

const CoursePage = () => {

    const axiosPublic = useAxiosPublic();

    const { data: courses = [] } = useQuery({
        queryKey: ['all-courses'],
        queryFn: async () => {
            const response = await axiosPublic.get('/courses');
            return response.data;
        }
    })

    console.log(courses)



    return (
        <>
            <section>
                <div className="container mx-auto px-3 md:px-2">
                    <div className="md:px-12 py-10">
                        {/* Search filter options */}
                        <FilterStuff />
                        <div className={`flex flex-col md:flex-row flex-wrap mt-10 gap-10 md:px-1`}>
                            {/* Show course Data */}
                            {
                                courses.map(course => (
                                    <PopularCourseCard
                                        key={course._id}
                                        course={course}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
            <SubscribeSection />

        </>
    );
};

export default CoursePage;