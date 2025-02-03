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
            <NavLinkMenu title={'Students'} icon={FaUserFriends} />
            <NavLinkMenu title={'Orders'} icon={PiNotebookFill} />

        </>
    );
};

export default AdminSideBar;