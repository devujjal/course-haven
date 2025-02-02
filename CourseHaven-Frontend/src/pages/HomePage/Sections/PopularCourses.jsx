import { useQuery } from "@tanstack/react-query";
import PopularCourseCard from "../../../components/CourseCard/PopularCourseCard";
import CourseIntro from "../../../components/CourseIntro/CourseIntro";
import PopularCourseTab from "../../../components/Tab/PopularCourseTab";
import { useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import toast from 'react-hot-toast'
import SkeletonLoader from "../../../components/SkeletonLoader/SkeletonLoader";
import ConfirmCart from "../../../components/Modal/ConfirmCart";
import useAuth from "../../../hooks/useAuth";

const PopularCourses = () => {

    const [category, setCategory] = useState('web-design');
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const [isOpen, setIsOpen] = useState(false);
    const loadingDatas = Array(8).fill(null)

    const categoryText = category.replace(' ', '-').toLowerCase();

    const { data: courses = [], isError, error, isLoading } = useQuery({
        queryKey: ['cate-courses', category],
        queryFn: async () => {
            const response = await axiosPublic.get(`/courses/${categoryText}`);
            return response.data;
        }
    })

    if (isError) {
        return toast.error(error.message);
    }


    const handleWishList = async (courseData) => {
        if (user && user?.email) {
            console.log('You are allowed', courseData)

        } else {
            setIsOpen(true)
        }
    }


    return (
        <section className="py-12">
            <div className="container mx-auto px-3 md:px-2">
                <div className="md:px-12">
                    <CourseIntro
                        title={'Most Popular Courses'}
                        des={'Choose from hundreds of courses from specialist organizations'} />
                    <PopularCourseTab setCategory={setCategory} />
                    <div className={`flex flex-col md:flex-row flex-wrap ${courses.length <= 3 ? 'justify-start gap-10' : 'justify-between'}  mt-10 gap-10`}>
                        {/* Here will be content show */}

                        {
                            isLoading ?

                                loadingDatas.map((unUsed, index) => (
                                    <SkeletonLoader key={index} />
                                )) :

                                courses.map(course => {
                                    return <PopularCourseCard
                                        key={course._id}
                                        course={course}
                                        isDes={true}
                                        handleWishList={handleWishList}
                                    />
                                })
                        }

                    </div>
                    <ConfirmCart isOpen={isOpen} setIsOpen={setIsOpen} isWishList={true} />
                </div>
            </div>
        </section>
    );
};

export default PopularCourses;