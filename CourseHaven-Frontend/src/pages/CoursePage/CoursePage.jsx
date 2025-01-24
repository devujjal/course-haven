import { useQuery } from "@tanstack/react-query";
import FilterStuff from "./Sections/FilterStuff";
import SubscribeSection from "./Sections/SubscribeSection";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import PopularCourseCard from "../../components/CourseCard/PopularCourseCard";
import { Helmet } from 'react-helmet-async';
import { useState } from "react";
import PropTypes from "prop-types";


const CoursePage = () => {

    const [getValue, setGetValue] = useState('')
    const axiosPublic = useAxiosPublic();

    const category = getValue.replace(' ', '-').toLowerCase();

    const { data: courses = [] } = useQuery({
        queryKey: ['all-courses'],
        queryFn: async () => {
            const response = await axiosPublic.get(`/courses?category=${category}`);
            return response.data;
        }
    })


    console.log(courses)
    console.log(category)



    return (
        <>
            <Helmet>
                <title>All Courses - Course Haven</title>
            </Helmet>
            <section>
                <div className="container mx-auto px-3 md:px-2">
                    <div className="md:px-12 py-10">
                        {/* Search filter options */}
                        <FilterStuff setGetValue={setGetValue} />
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

CoursePage.propTypes = {
    setGetValue: PropTypes.func
}

export default CoursePage;