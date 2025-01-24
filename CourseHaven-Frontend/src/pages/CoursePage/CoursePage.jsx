import { useQuery } from "@tanstack/react-query";
import FilterStuff from "./Sections/FilterStuff";
import SubscribeSection from "./Sections/SubscribeSection";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import PopularCourseCard from "../../components/CourseCard/PopularCourseCard";
import { Helmet } from 'react-helmet-async';
import { useState } from "react";
import PropTypes from "prop-types";
import toast from 'react-hot-toast'
import SkeletonLoader from "../../components/SkeletonLoader/SkeletonLoader";


const CoursePage = () => {

    const [getValue, setGetValue] = useState('')
    const axiosPublic = useAxiosPublic();
    const loadingArrays = Array(12).fill(null);


    const { data: courses = [], isError, error, isLoading } = useQuery({
        queryKey: ['all-courses', getValue],
        queryFn: async () => {
            const response = await axiosPublic.get(`/courses?category=${getValue}`);
            return response.data;
        }
    })


    if (isError) {
        return toast.error(error.message)
    }


    console.log(courses)
    console.log(getValue)



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
                                isLoading ?
                                    loadingArrays.map((unUsed, index) => (
                                        <SkeletonLoader key={index} />
                                    )) :
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