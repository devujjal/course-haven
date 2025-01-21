import { BsFillPatchCheckFill } from "react-icons/bs";
import { FaPlayCircle } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoAngular } from "react-icons/io";
import { CgMail } from "react-icons/cg";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { SiAdobephotoshop } from "react-icons/si";
import { FaCircle } from "react-icons/fa";
import { MdOutlineStar } from "react-icons/md";
import man from '../../../assets/hero/man.png';


const HeroSection = () => {
    return (
        <section>
            <div className="container mx-auto px-2">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center px-12 py-20">
                    <div className="relative">
                        <div className="absolute -top-28">
                            <FaCircle size={30} color="#F7CAA6" />
                        </div>
                        <div className="absolute -top-10 right-44">
                            <svg width="22px" fill="#4CBC87" height="21px"><path d="M10.717,4.757 L14.440,-0.001 L14.215,6.023 L20.142,4.757 L16.076,9.228 L21.435,12.046 L15.430,12.873 L17.713,18.457 L12.579,15.252 L10.717,20.988 L8.856,15.252 L3.722,18.457 L6.005,12.873 L-0.000,12.046 L5.359,9.228 L1.292,4.757 L7.220,6.023 L6.995,-0.001 L10.717,4.757 Z"></path></svg>
                        </div>
                        <div className="absolute -bottom-14 right-14">
                            <MdOutlineStar size={35} color="#F5C32F" />
                        </div>
                        <h1 className="font-heebo text-6xl font-bold text-[#24292d] mb-8">Limitless learning at your
                            <span> fingertips</span>
                            <span>
                                {/* Here willl be SVG */}
                            </span>
                        </h1>
                        <p className=" font-roboto text-xl font-normal text-[#747579] mb-6">Online learning and teaching marketplace with 5K+ courses & 10M students. Taught by experts to help you acquire new skills.</p>
                        <ul className="flex items-center gap-3 text-[#747579] mb-7">
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
                            <a href="" className="px-6 py-3 bg-[#F9E8EC] font-roboto text-lg text-[#d6293e] font-medium rounded-lg hover:bg-[#d6293e] hover:text-white transition mr-6">Get Started</a>
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
                    <div className="relative">
                        <div>
                            <svg className="pt-5 pt-sm-0" width="550px" height="538px" viewBox="0 0 554 544" fill="#1D3B53" xmlSpace="preserve"><path className="fill-blue" d="M423.3,77.2c49.5,32.5,100.4,67.2,118.4,114.5s3.5,107.1-15.4,165.7c-18.7,58.6-41.8,116.1-84,148.6 c-42.5,32.8-104.2,40.2-163.8,37.3c-59.5-3.2-116.8-17.1-164.7-47.9c-48.3-30.6-87.2-78.2-102-131.6C-3,310.5,6.6,251,25.3,194.7 C43.6,138,70.7,84.3,114.1,49.5C157.2,14.8,216.7-1,270.8,6.4C324.8,14.2,373.4,44.7,423.3,77.2z"></path></svg>
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
                        <div className="absolute z-10 bottom-20">
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

                        <div className="absolute top-36 right-4 bg-userBg bg-contain bg-[#0cbc87] z-10 px-4 py-4 rounded-xl">
                            <p className="font-roboto mb-4">Our daily new students</p>
                            <div className="flex -space-x-3 justify-center">
                                <img className="h-8 w-8 rounded-full ring-2 ring-white inline-block" src="https://readymadeui.com/team-1.webp" alt="avatar" />
                                <img className="h-8 w-8 rounded-full ring-2 ring-white inline-block" src="https://readymadeui.com/team-2.webp" alt="avatar" />
                                <img className="h-8 w-8 rounded-full ring-2 ring-white inline-block" src="https://readymadeui.com/team-3.webp" alt="avatar" />
                                <img className="h-8 w-8 rounded-full ring-2 ring-white inline-block" src="https://readymadeui.com/team-4.webp" alt="avatar" />
                                <span className="h-8 w-8 rounded-full ring-2 ring-white inline-block bg-[#346AC9] text-sm font-roboto flex justify-center items-center">1K+</span>
                            </div>
                        </div>

                        <div className="absolute w-full -top-[56px] rounded-full overflow-hidden flex justify-center items-center">
                            <img src={man} alt="Student" className="relative -bottom-14" />
                        </div>



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