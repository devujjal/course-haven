import NavLinkMenu from "../NavLink/NavLink";
import { CiShoppingBasket } from "react-icons/ci";
import { GiSelfLove } from "react-icons/gi";
import { FaCartPlus } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { MdPayment } from "react-icons/md";

const StudentSideBar = () => {
    return (
        <>
            <NavLinkMenu title={'My Courses'} icon={CiShoppingBasket} />
            <NavLinkMenu title={'My Cart'} link={'/dashboard/my-cart'} icon={FaCartPlus} />
            <NavLinkMenu title={'WishList'} icon={GiSelfLove} />
            <NavLinkMenu title={'Payment Info'} icon={MdPayment} />
            <NavLinkMenu title={'Edit Profile'} icon={FaEdit} />
            <NavLinkMenu title={'Sign Out'} icon={LiaSignOutAltSolid} />
        </>

    );
};

export default StudentSideBar;