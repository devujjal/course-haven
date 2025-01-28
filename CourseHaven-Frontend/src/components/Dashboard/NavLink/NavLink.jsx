import PropTypes from "prop-types";
import { NavLink } from "react-router";

const NavLinkMenu = ({ title, icon: Icon }) => {
    return (
        <NavLink
            className="flex items-center block px-4 py-2 mb-2 font-roboto text-base text-[#fff] font-normal rounded-md hover:bg-[#fff] hover:text-[#24292d] rounded transition delay-75">
            <Icon className="mr-2" />
            {title}
        </NavLink>
    );
};

NavLinkMenu.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.func
}

export default NavLinkMenu;