import { NavLink } from "react-router";
import { MdDashboard } from "react-icons/md";
import { CiShoppingBasket } from "react-icons/ci";
import { GiSelfLove } from "react-icons/gi";
import { FaCartPlus } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { MdPayment } from "react-icons/md";


/* Student side bar */

const AsideBar = () => {
    return (
        <aside className="w-64 bg-[#24292d] text-white rounded-lg p-6">

            <NavLink
                className="flex items-center block px-4 py-2 mb-2 font-roboto text-base text-[#fff] font-normal rounded-md hover:bg-[#fff] hover:text-[#24292d] rounded transition delay-75">
                <MdDashboard className="mr-2" />
                Dashboard
            </NavLink>
            <NavLink
                className="flex items-center block px-4 py-2 mb-2 font-roboto text-base text-[#fff] font-normal rounded-md hover:bg-[#fff] hover:text-[#24292d] rounded transition delay-75">
                <CiShoppingBasket className="mr-2" />
                My Courses
            </NavLink>
            <NavLink
                className="flex items-center block px-4 py-2 mb-2 font-roboto text-base text-[#fff] font-normal rounded-md hover:bg-[#fff] hover:text-[#24292d] rounded transition delay-75">
                <FaCartPlus className="mr-2" />
                My Cart
            </NavLink>
            <NavLink
                className="flex items-center block px-4 py-2 mb-2 font-roboto text-base text-[#fff] font-normal rounded-md hover:bg-[#fff] hover:text-[#24292d] rounded transition delay-75">
                <GiSelfLove className="mr-2" />
                WishList
            </NavLink>
            <NavLink
                className="flex items-center block px-4 py-2 mb-2 font-roboto text-base text-[#fff] font-normal rounded-md hover:bg-[#fff] hover:text-[#24292d] rounded transition delay-75">
                <MdPayment className="mr-2" />
                Payment Info
            </NavLink>
            <NavLink
                className="flex items-center block px-4 py-2 mb-2 font-roboto text-base text-[#fff] font-normal rounded-md hover:bg-[#fff] hover:text-[#24292d] rounded transition delay-75">
                <FaEdit className="mr-2" />
                Edit Profile
            </NavLink>
            <NavLink
                className="flex items-center block px-4 py-2 mb-2 font-roboto text-base text-[#fff] font-normal rounded-md hover:bg-[#fff] hover:text-[#24292d] rounded transition delay-75">
                <LiaSignOutAltSolid className="mr-2" />
                Sign Out</NavLink>

        </aside>
    );
};

export default AsideBar;