import { useQuery } from "@tanstack/react-query";
import FilterStuff from "./Sections/FilterStuff";
import SubscribeSection from "./Sections/SubscribeSection";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import PopularCourseCard from "../../components/CourseCard/PopularCourseCard";
import { Helmet } from 'react-helmet-async';

import toast from 'react-hot-toast'
import SkeletonLoader from "../../components/SkeletonLoader/SkeletonLoader";
import { useState } from "react";


const CoursePage = () => {

    const [getValue, setGetValue] = useState('')
    const [getSearch, setGetSearch] = useState('')
    const axiosPublic = useAxiosPublic();
    const loadingArrays = Array(12).fill(null);


    const { data: courses = [], isError, error, isLoading } = useQuery({
        queryKey: ['all-courses', getValue, getSearch],
        queryFn: async () => {
            const response = await axiosPublic.get(`/courses?category=${getValue}&search=${getSearch}`);
            return response.data;
        }
    })


    if (isError) {
        return toast.error(error.message)
    }

    const handleChange = (value) => {
        console.log(value)
        if (value) {
            setGetSearch('');
            setGetValue(value)
        }

    }

    const handleSearch = (e) => {
        e.preventDefault();
        setGetValue('');
        const form = e.target;
        const searchValue = form.search.value;
        setGetSearch(searchValue);
        console.log(searchValue)

    }


    console.log(getSearch)
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
                        <FilterStuff handleChange={handleChange} handleSearch={handleSearch} />
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


export default CoursePage;