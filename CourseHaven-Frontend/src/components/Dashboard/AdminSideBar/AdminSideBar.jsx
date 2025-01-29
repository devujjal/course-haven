import NavLinkMenu from "../NavLink/NavLink";
import { CiShoppingBasket } from "react-icons/ci";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { PiNotebookFill } from "react-icons/pi";
import { FaEdit } from "react-icons/fa";
import { LiaSignOutAltSolid } from "react-icons/lia";

const AdminSideBar = () => {
    return (
        <>
            <NavLinkMenu title={'My Courses'} icon={CiShoppingBasket} />
            <NavLinkMenu title={'Earnings'} icon={FaArrowTrendUp} />
            <NavLinkMenu title={'Students'} icon={FaUserFriends} />
            <NavLinkMenu title={'Orders'} icon={PiNotebookFill} />
            <NavLinkMenu title={'Edit Profile'} icon={FaEdit} />
            <NavLinkMenu title={'Sign Out'} icon={LiaSignOutAltSolid} />
        </>
    );
};

export default AdminSideBar;