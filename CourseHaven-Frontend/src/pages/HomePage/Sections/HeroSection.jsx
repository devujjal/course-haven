import { BsFillPatchCheckFill } from "react-icons/bs";
import { FaPlayCircle } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoAngular } from "react-icons/io";
import { IoLogoFigma } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { IoIosCheckmarkCircle } from "react-icons/io";
import man from '../../../assets/hero/man.png';


const HeroSection = () => {
    return (
        <section>
            <div className="container mx-auto px-2">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center py-20">
                    <div>
                        <h1 className="font-heebo text-6xl font-bold text-[#24292d] mb-8">Limitless learning at your
                            <span> fingertips</span>
                            <span>
                                {/* Here willl be SVG */}
                            </span>
                        </h1>
                        <p className="w-[92%] font-roboto text-xl font-normal text-[#747579] mb-4">Online learning and teaching marketplace with 5K+ courses & 10M students. Taught by experts to help you acquire new skills.</p>
                        <ul className="flex items-center gap-3 text-[#747579] mb-8">
                            <li className="flex items-center font-roboto">
                                <BsFillPatchCheckFill color="#24292D" className="mr-1" />
                                Learn with experts
                            </li>
                            <li className="flex items-center font-roboto">
                                <BsFillPatchCheckFill color="#24292D" className="mr-1" />
                                Get certificate
                            </li>
                            <li className="flex items-center font-roboto">
                                <BsFillPatchCheckFill color="#24292D" className="mr-1" />
                                Get membership
                            </li>
                        </ul>
                        <div className="flex">
                            <a href="">Get Started</a>
                            <div className="flex items-center">
                                <FaPlayCircle />
                                <a href="">Watch Video</a>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div>
                            <svg className="pt-5 pt-sm-0" width="550px" height="538px" viewBox="0 0 554 544" fill="#1D3B53" xmlSpace="preserve"><path className="fill-blue" d="M423.3,77.2c49.5,32.5,100.4,67.2,118.4,114.5s3.5,107.1-15.4,165.7c-18.7,58.6-41.8,116.1-84,148.6 c-42.5,32.8-104.2,40.2-163.8,37.3c-59.5-3.2-116.8-17.1-164.7-47.9c-48.3-30.6-87.2-78.2-102-131.6C-3,310.5,6.6,251,25.3,194.7 C43.6,138,70.7,84.3,114.1,49.5C157.2,14.8,216.7-1,270.8,6.4C324.8,14.2,373.4,44.7,423.3,77.2z"></path></svg>
                        </div>
                        <div className="absolute top-48">
                            <FaReact />
                        </div>
                        <div className="absolute top-16 right-32">
                            <IoLogoAngular />
                        </div>
                        <div className="absolute bottom-56 right-20">
                            <IoLogoFigma color="#e70e0e" />
                        </div>
                        <div className="absolute z-10 bottom-32">
                            <div className="flex items-center gap-2 p-4 border rounded-xl backdrop-blur-sm shadow-md">
                                <span className="p-3 bg-[#F5C32F] rounded-full">
                                    <CgMail size={25} color="#FFFFFF" />
                                </span>
                                <div className="text-white">
                                    <h4 className="flex items-center gap-2 font-semibold font-heebo">
                                        Congratulations
                                        <span>
                                            <IoIosCheckmarkCircle color="#4CBC87" />
                                        </span>
                                    </h4>
                                    <span className="font-roboto text-sm">Your admission completed</span>
                                </div>
                            </div>
                        </div>

                        <div className="absolute top-36 right-14 bg-userBg bg-contain bg-[#0cbc87] z-10 px-4 py-4 rounded-xl">
                            <p className="font-roboto mb-4">Our daily new students</p>
                            <div className="flex -space-x-3 justify-center">
                                <img className="h-8 w-8 rounded-full ring-2 ring-white inline-block" src="https://readymadeui.com/team-1.webp" alt="avatar" />
                                <img className="h-8 w-8 rounded-full ring-2 ring-white inline-block" src="https://readymadeui.com/team-2.webp" alt="avatar" />
                                <img className="h-8 w-8 rounded-full ring-2 ring-white inline-block" src="https://readymadeui.com/team-3.webp" alt="avatar" />
                                <img className="h-8 w-8 rounded-full ring-2 ring-white inline-block" src="https://readymadeui.com/team-4.webp" alt="avatar" />
                                <span className="h-8 w-8 rounded-full ring-2 ring-white inline-block bg-[#346AC9] text-sm font-roboto flex justify-center items-center">1K+</span>
                            </div>
                        </div>
                        <div className="absolute z-0 -top-16 ml-14">
                            <img src={man} className="w-full" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;