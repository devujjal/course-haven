import { BsFillPatchCheckFill } from "react-icons/bs";
import { FaPlayCircle } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoAngular } from "react-icons/io";
import { CgMail } from "react-icons/cg";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { SiAdobephotoshop } from "react-icons/si";
import { FaCircle } from "react-icons/fa";
import { MdOutlineStar } from "react-icons/md";
// import man from '../../../assets/hero/man.png';
import MainBg from '../../../assets/hero/main-bg.png';
import { Link } from "react-router";


const HeroSection = () => {
    return (
        <section>
            <div className="container mx-auto px-2">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center px-2 py-10 lg:px-12 lg:py-8">
                    <div className="relative">
                        <div className="absolute md:-top-10 md:left-5 lg:left-0 lg:-top-28 hidden md:block">
                            <FaCircle size={30} color="#F7CAA6" />
                        </div>
                        <div className="absolute -top-10 right-44">
                            <svg width="22px" fill="#4CBC87" height="21px"><path d="M10.717,4.757 L14.440,-0.001 L14.215,6.023 L20.142,4.757 L16.076,9.228 L21.435,12.046 L15.430,12.873 L17.713,18.457 L12.579,15.252 L10.717,20.988 L8.856,15.252 L3.722,18.457 L6.005,12.873 L-0.000,12.046 L5.359,9.228 L1.292,4.757 L7.220,6.023 L6.995,-0.001 L10.717,4.757 Z"></path></svg>
                        </div>
                        <div className="absolute -bottom-14 right-14">
                            <MdOutlineStar size={35} color="#F5C32F" />
                        </div>
                        <h1 className="font-heebo text-center text-3xl mb-12 md:text-5xl lg:text-6xl lg:text-left font-bold text-[#24292d] md:mb-8 z-10">Limitless learning at your
                            <span className="relative">
                                <span className="relative z-10"> fingertips</span>
                                <span className="absolute right-0 md:right-10 lg:left-0 z-0">
                                    {/* Here will be SVG */}
                                    <svg width={'300px'} height="62.1px" fill="#F5C32F" enableBackground="new 0 0 366 62.1" viewBox="0 0 366 62.1" xmlns="http://www.w3.org/2000/svg"><path d="m322.5 25.3c0 1.4 2.9 0.8 3.1 1.6 0.8 1.1-1.1 1.3-0.6 2.4 13.3 0.9 26.9 1.7 40.2 4-2.5 0.7-4.9 1.6-7.3 1.1-4-0.9-8.2-1-12.2-1.2-8.5-0.5-16.9-1.9-25.5-1.7h-3.1c2.6 0.6 4.8 0.4 5.7 2.2-7.3 0.4-14.1-0.8-21.2-1.1-0.2 0.6-0.5 1.2-0.8 1.8 21.3 0.7 42.5 1.6 64.3 4.6-4.2 1.6-7.7 1-10.8 0.8-6.8-0.5-13.5-1.3-20.3-1.9-0.9-0.1-2.3-0.1-2.9 0.2-2.2 1.6-4.3 0.6-7 0.4 1.4-1 2.5 0.5 3.9-0.8-5.6-1-10.7 0.6-15.9 0s-10.5-0.6-16.6-0.8c2 1.6 4.6 1.3 6.2 1.4 4.9 0 9.9 0.8 14.8 0.7 5.3-0.1 10.4 0.5 15.5 0.9 3.2 0.3 6.7-0.1 9.9-0.4 1.1-0.1 0.5 0.3 0.6 0.6 0.5 0.9 2.2 0.8 3.6 0.8 5.1-0.1 10.1 0.6 14.8 1.5 0.8 0.1 1.5 0 1.7 0.7 0 0.7-0.8 0.6-1.5 0.8-3.9 1.2-7.4-0.2-11.1-0.2-2 0-4.3-1.5-6 0.5-0.3 0.4-1.4 0.1-2.2-0.1-4.5-0.8-9.1-0.5-13.8-1.5-2.3-0.5-5.6 0.1-8.4 0.5-4 0.5-8-0.7-12.1-0.9-3.4-0.2-7.1-0.5-10.5-0.7-7.1-0.3-14.2-1.2-22.3-0.4 4.9 1.1 9.4 1.2 13.8 1.2 9.7 0 19.2 2.3 28.9 1.6 7.3 3.2 15.9 1.5 23.8 2.9 4.9 0.8 10.1 0.8 15.2 1.2 0.5 0 0.8 0.3 1.1 0.9-20-2.1-40.2-1.4-60.8-3 4.9 2.1 10.8-0.3 15.3 2.7-8 1.9-15.8-0.9-23.5-0.1 2.8 1.4 7.1 1.1 9.3 3.3 0.5 0.5 0.2 1.1-1.2 1.3 2.3 1 3.4-2.1 5.7-0.4 0.2-0.6 0.2-1 0.3-1.5 0.8-0.3 2 0.8 1.5 1.5-0.2 0.1 0 0.3 0 0.5 18.7 0.4 37.3 1.7 56.2 3.6-1.7 1.1-2.8 1.2-4.2 1.1-7.1-0.5-14.1-0.9-21.2-1.4-3.1-0.2-6.3-0.4-9.4-0.4-7.6-0.2-15-0.7-22.4-1-9-0.4-17.9-0.1-26.9-0.1-1.2 0-2.9-0.4-3.9 1 14.8 0.3 29.7 0.6 44.4 1.1 14.8 0.6 29.9 1.3 44.2 4.2-4.3 1-8.8 0.9-13 0.5-5.3-0.5-10.5-1.1-15.8-1.2-11.4-0.3-22.9-0.9-34.3-1.2-17.6-0.4-35.4-0.3-53.1-0.4-10.8-0.1-21.7-0.2-32.5 0-17.8 0.4-35.7 0.2-53.5 0.5-13.1 0.3-26.3 0.1-39.4 0.5-11.1 0.3-22.4 0.6-33.6 1-13.1 0.6-26.1 0.2-39.3 0.4-3.9 0.1-7.6 0.2-11.8-0.2 0.9-1.2 2.3-1.3 3.9-1.3 8.4 0.2 16.6-0.4 24.9-0.9 3.9-0.2 7.9-0.4 11.9 0.2 2.5 0.4 5.3-0.3 8-0.4 7.3-0.4 14.7-0.7 22-0.9 11.9-0.5 23.7-1.2 35.6-0.8 7.7 0.2 15.3-0.6 22.9-0.1 2.3 0.2 4.3-0.5 6.5-1h-17.6c-9.6 0-19-0.1-28.6 0-8 0.1-16.1 0.3-24 0.8-2.6 0.2-5.4 0.1-8.2 0.1-10.1 0.3-20.1 0.6-30.2 0.5-5.4 0-10.7-0.1-15.9 0.6-2.3 0.3-4-1.3-6.5-0.6 0.2 0.4 0.5 0.9 0.6 1.5-1.9 0-4 0.4-4.9-0.1-4.2-2.2-9.4-1.5-14.1-2.3-1.7-0.3-3.7-0.1-4.3-1.5-0.5-1.3 1.9-1.5 2.6-2.6-4.2-1.4-4.6-5-8.5-7.2-1.5 0.2-0.9 2.8-4.2 1.3 0.3 2.4 4.5 3.9 2.8 6.4-2.3 0.3-3.2-0.8-4.2-1.7-2.5-4-5.1-8.4-5.1-12.7 0.2-6.8 0.2-13.8 3.6-20.4 0.3-0.5 0.3-1 0.8-1.4 0.9-0.9 1.2-2.4 3.6-2.1 2.2 0.2 2.5 1.5 2.6 2.6 0.2 1.4 1.5 1.8 3.2 2.5 0.9-1.4 0.5-2.9 2.6-3.7 0.2-0.1 0.3-0.4 0.3-0.4-3.1-2.2 1.2-2.2 2.3-3.3-3.1-1.8-4-4.3-3.7-7-1.5-0.3-3.1-0.4-4.5 0-1.7 0.6-2.2-0.5-2.9-1 0.6-0.5 0.8-1.1 2.2-1.3 7.6-0.9 15.2-1.7 22.9-2 20-0.7 39.9-0.9 59.9-1 11.9-0.1 23.8 0.4 35.6 1.1 3.6 0.2 7.1-0.9 10.7-0.5 7.9 0.9 15.8 0.3 23.8 0.5 7.3 0.1 14.4-0.6 21.7-0.1 12.2 0.9 24.4 0.3 36.7 0.6 9.4 0.3 18.9 0.4 28.2 1 11.9 0.7 23.8 1.3 35.6 2 11.1 0.6 22.4 0.5 33.3 2 7.1 1 14.4 1.1 21.3 2.4 4 0.7 8.2 1.6 12.4 1.9 2.2 0.2 0.9 1 1.5 1.5-4-0.8-8-0.8-12.1-1.4-4.3-0.7-8.5-1-12.8 0.4-2.9 1-6.3 0.2-9.3-0.1-10.2-1.1-20.6-1.6-30.8-2.4-12.1-0.9-24.3-1.4-36.4-2.1-9.9-0.6-20-0.5-29.9-1-11.4-0.6-22.7 0-34.2-0.5-6.3-0.3-12.3-0.3-18.5-0.4-4.2-0.1-8.4 1.3-12.8 0.3 0.6 0.2 1.2 0.7 1.9 0.7 10.5 0 20.9 1.9 31.6 1.7 6.5-0.1 13.1 0.2 19.8 0.8 3.2 0.3 6.3-0.4 9.7-0.1 7.6 0.7 15.5 0.5 23 0.8 12.4 0.5 24.7 0.4 37.1 1.1 13.3 0.7 26.8 2.1 39.9 4.1 6.2 0.9 12.7 1.5 19.2 1.7 0.6 0 1.1 0.1 1.5 0.5-4.6 0.1-9.3 0-13.9-0.5-0.6 1.1 1.4 0.9 1.5 1.9-9.7 1.6-19.6-1.4-29.4-0.1 2.2 1.4 5.1 1 7.4 1 7.3 0.1 14.1 1.3 21.2 1.9 2.8 0.3 5.9 0 8.5 0.8 1.5 0.5 4.6-1.1 4.9 1.3 4-0.7 7.3 1.5 11.1 1.2 4-0.3 7.7 0.6 11.6 1.1 0.8 0.1 2.2 0.3 2.3 1.1 0.2 1-1.1 1.2-2 1.5-3.4 1-6.7-0.4-10.1-0.4-0.9 0-2-0.2-2.9-0.2-9.4 0.1-18.8-1.3-28.3-1.8-6-0.4-12.1-0.9-18.1-1.3 0 0.2 0 0.4-0.2 0.6 6.1 0.5 12.1 1.4 18.3 0.7z"></path></svg>
                                </span>
                            </span>
                        </h1>
                        <p className=" font-roboto text-center text-lg md:text-xl lg:text-left font-normal text-[#747579] mb-6">Online learning and teaching marketplace with 5K+ courses & 10M students. Taught by experts to help you acquire new skills.</p>
                        <ul className="flex items-center gap-3 text-[#747579] justify-center lg:justify-start flex-wrap mb-7">
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
                        <div className="flex items-cetner justify-center lg:justify-start">
                            <Link to={'/sign-in'} className="px-6 py-3 bg-[#F9E8EC] font-roboto text-base md:text-lg text-[#d6293e] font-medium rounded-lg hover:bg-[#d6293e] hover:text-white transition mr-6">Get Started</Link>
                            <div className="flex items-center font-heebo text-base gap-3 cursor-pointer group">
                                <FaPlayCircle
                                    size={40}
                                    color="#346AC9"
                                    className="outline outline-offset-0 outline-[6px] outline-[#A2C3EA] rounded-full transition-all duration-300 ease-in group-hover:outline-[8px] group-hover:outline-[#A2C3EA]"
                                />
                                Watch Video
                            </div>

                        </div>
                    </div>
                    <div className="relative mt-14">

                        {/* <div>
                            <svg className="pt-5 pt-sm-0" width="550px" height="538px" viewBox="0 0 554 544" fill="#1D3B53" xmlSpace="preserve"><path className="fill-blue" d="M423.3,77.2c49.5,32.5,100.4,67.2,118.4,114.5s3.5,107.1-15.4,165.7c-18.7,58.6-41.8,116.1-84,148.6 c-42.5,32.8-104.2,40.2-163.8,37.3c-59.5-3.2-116.8-17.1-164.7-47.9c-48.3-30.6-87.2-78.2-102-131.6C-3,310.5,6.6,251,25.3,194.7 C43.6,138,70.7,84.3,114.1,49.5C157.2,14.8,216.7-1,270.8,6.4C324.8,14.2,373.4,44.7,423.3,77.2z"></path></svg>
                        </div> */}

                        <div className="flex justify-center items-center">
                            <img src={MainBg} className="w-full" alt="" />
                        </div>
                        <div className="absolute top-40 px-3 py-2 bg-white rounded-lg">
                            <FaReact size={40} className="" />
                        </div>
                        <div className="absolute top-0 right-16 px-3 py-2 bg-slate-100 rounded-lg">
                            <IoLogoAngular size={40} color="#E23237" />
                        </div>
                        <div className="absolute bottom-44 right-5">
                            <SiAdobephotoshop size={40} />
                        </div>
                        <div className="absolute z-10 bottom-24 hidden md:block">
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

                        <div className="hidden md:block absolute top-36 right-4 bg-userBg bg-contain bg-[#0cbc87] z-10 px-4 py-4 rounded-xl">
                            <p className="font-roboto mb-4">Our daily new students</p>
                            <div className="flex -space-x-3 justify-center">
                                <img className="h-8 w-8 rounded-full ring-2 ring-white inline-block" src="https://readymadeui.com/team-1.webp" alt="avatar" />
                                <img className="h-8 w-8 rounded-full ring-2 ring-white inline-block" src="https://readymadeui.com/team-2.webp" alt="avatar" />
                                <img className="h-8 w-8 rounded-full ring-2 ring-white inline-block" src="https://readymadeui.com/team-3.webp" alt="avatar" />
                                <img className="h-8 w-8 rounded-full ring-2 ring-white inline-block" src="https://readymadeui.com/team-4.webp" alt="avatar" />
                                <span className="h-8 w-8 rounded-full ring-2 ring-white inline-block bg-[#346AC9] text-sm font-roboto flex justify-center items-center">1K+</span>
                            </div>
                        </div>

                        {/* <div className="absolute w-full -top-[56px] rounded-full overflow-hidden flex justify-center items-center">
                            <img src={man} alt="Student" className="relative -bottom-14" />
                        </div> */}



                        {/* <div className="absolute z-0 -top-20 ml-14">
                            <img src={man} className="w-full" alt="" />
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;