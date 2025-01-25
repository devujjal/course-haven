import { FaStar } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa6";
import { GiNetworkBars } from "react-icons/gi";
import { TbWorld } from "react-icons/tb";



const IntroDiv = () => {
    return (
        <div>
            <h2 className="text-lg md:text-[38px] leading-[48px] text-[#24292d] font-heebo font-bold mb-3">The Complete Digital Marketing Course - 12 Courses in 1</h2>
            <p className="text-base text-[#747579] font-roboto mb-5">Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do.</p>
            <ul className="flex flex-wrap items-center gap-2 md:gap-4 text-[#24292d] font-heebo text-base">
                <li className="flex items-center">
                    <FaStar size={17} className="mr-2" />
                    4.5/5.0
                </li>
                <li className="flex items-center">
                    <FaUserGraduate size={15} className="mr-2" />
                    12k Enrolled
                </li>
                <li className="flex items-center">
                    <GiNetworkBars className="mr-2" />
                    All levels
                </li>
                <li className="flex items-center">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" role="img" focusable="false" className="me-1 mr-2"><path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"></path></svg>
                    Last updated 09/2021
                </li>
                <li className="flex items-center">
                    <TbWorld size={18} className="mr-2" />
                    English
                </li>
            </ul>
        </div>
    );
};

export default IntroDiv;