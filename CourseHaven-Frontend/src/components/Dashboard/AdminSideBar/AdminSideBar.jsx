import NavLinkMenu from "../NavLink/NavLink";
import { CiShoppingBasket } from "react-icons/ci";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { PiNotebookFill } from "react-icons/pi";

const AdminSideBar = () => {
    return (
        <>
            <NavLinkMenu title={'My Courses'} icon={CiShoppingBasket} />
            <NavLinkMenu title={'Earnings'} icon={FaArrowTrendUp} />
            <NavLinkMenu title={'Students'} link={'/dashboard/students'} icon={FaUserFriends} />
            <NavLinkMenu title={'Orders'} link={'/dashboard/orders'} icon={PiNotebookFill} />

        </>
    );
};

export default AdminSideBar;