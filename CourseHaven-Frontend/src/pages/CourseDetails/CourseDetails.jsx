import CourseDescription from "./Divs/CourseDescription";
import IntroDiv from "./Divs/IntroDiv";
import VideoPlay from "./Divs/VideoPlay";
import { FaBookOpen } from "react-icons/fa";
import { AiFillClockCircle } from "react-icons/ai";
import { TbAntennaBars5 } from "react-icons/tb";
import { TbWorld } from "react-icons/tb";
import { FaUserClock } from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";
import { FaShareNodes } from "react-icons/fa6";
import toast from 'react-hot-toast'
import { useParams } from "react-router";


const CourseDetails = () => {

    const { id } = useParams();
    console.log(id)

    // URL Copy Function
    const handleShare = async () => {
        try {
            const currentURL = window.location.href;
            await navigator.clipboard.writeText(currentURL);
            toast.success('Link copied to clipboard!')
        } catch (error) {
            toast.error('Failed to copy URL:', error.message)
        }
    }


    return (
        <section>
            <div className="container mx-auto px-3 md:px-2">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:px-14 md:py-16">
                    {/* <!-- Left Side --> */}
                    <div className="md:col-span-2 p-2">
                        <div>
                            <IntroDiv />
                            <VideoPlay />
                            <CourseDescription />
                        </div>
                    </div>

                    {/* <!-- Right Side --> */}
                    <div className="px-4">
                        <div className="border rounded-lg">
                            <div className="px-5 py-6">
                                <div className="flex items-center justify-between text-3xl text-[#24292d] font-bold font-heebo mb-5">
                                    <span>$295.55</span>
                                    <span
                                        onClick={handleShare}
                                        className="px-4 py-3 bg-[#EFF1F2] rounded-md hover:bg-[#e1e5e7] transition duration-400 cursor-pointer"><FaShareNodes size={14} /></span>
                                </div>
                                <button className="border border-[#066ac9] text-[#066ac9] w-full py-2 text-base font-medium font-roboto rounded-md mb-2 hover:bg-[#066ac9] hover:text-white transition duration-300">Add to cart</button>
                                <button className="border bg-[#0cbc87] text-[#fff] font-roboto text-[15px] w-full py-2 rounded-md font-medium hover:bg-[#0aa073] transition duration-300">Buy now</button>
                                <hr className="mt-7 mb-5" />

                                <div>
                                    <h4 className="text-[#24292d] font-bold text-[21px] font-heebo">This course includes</h4>
                                    <ul className=" mt-4 text-[17px] text-[#24292d] font-heebo font-normal">
                                        <li className="flex justify-between py-1">
                                            <span className="flex items-center gap-2">
                                                <FaBookOpen color="#066ac9" />
                                                Lectures
                                            </span>
                                            <span>30</span>
                                        </li>
                                        <li className="flex justify-between py-1">
                                            <span className="flex items-center gap-2">
                                                <AiFillClockCircle color="#066ac9" />
                                                Duration
                                            </span>
                                            <span>4h 50m</span>
                                        </li>
                                        <li className="flex justify-between py-1">
                                            <span className="flex items-center gap-2">
                                                <TbAntennaBars5 color="#066ac9" />
                                                Skills
                                            </span>
                                            <span>Beginner</span>
                                        </li>
                                        <li className="flex justify-between py-1">
                                            <span className="flex items-center gap-2">
                                                <TbWorld color="#066ac9" />
                                                Language
                                            </span>
                                            <span>English</span>
                                        </li>
                                        <li className="flex justify-between py-1">
                                            <span className="flex items-center gap-2">
                                                <FaUserClock color="#066ac9" />
                                                Deadline
                                            </span>
                                            <span>Nov 30 2021</span>
                                        </li>
                                        <li className="flex justify-between py-1">
                                            <span className="flex items-center gap-2">
                                                <LiaCertificateSolid color="#066ac9" />
                                                Certificate
                                            </span>
                                            <span>Yes</span>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseDetails;