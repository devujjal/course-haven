import TrendingCourseCard from '../../../components/CourseCard/TrendingCourseCard';
import CourseIntro from '../../../components/CourseIntro/CourseIntro';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const TrendingCourses = () => {

    const axiosPublic = useAxiosPublic();

    const { data: trendingCourses = [] } = useQuery({
        queryKey: ['trending-courses'],
        queryFn: async () => {
            const response = await axiosPublic.get('/trending-courses');
            return response.data;
        }
    })

    // console.log(trendingCourses)


    return (
        <section className="py-12">
            <div className="container mx-auto px-3 md:px-2">
                <CourseIntro title={'Our Trending Courses'} des={'Check out most 🔥 courses in the market'} />

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between md:px-12">

                    {
                        trendingCourses.map(trendingCourse => (
                            <TrendingCourseCard key={trendingCourse?._id} trendingCourse={trendingCourse} />

                        ))
                    }

                </div>
            </div>
        </section>
    );
};

export default TrendingCourses;