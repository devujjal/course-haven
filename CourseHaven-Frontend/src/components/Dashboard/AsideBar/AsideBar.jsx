import { MdDashboard } from "react-icons/md";
import useRole from "../../../hooks/useRole";
import AdminRoute from "../../../routes/AdminRoute";
import StudentRoute from "../../../routes/StudentRoute";
import AdminSideBar from "../AdminSideBar/AdminSideBar";
import NavLinkMenu from "../NavLink/NavLink";
import StudentSideBar from "../StudentSideBar/StudentSideBar";
import PropTypes from "prop-types";


/* Student side bar */

const AsideBar = ({ isOpen }) => {
    const { userRole } = useRole();

    console.log(userRole)

    // ${isOpen ? 'block absolute top-0 right-0 ' : 'hidden'} xl:block

    return (

        <aside className={`${isOpen ? 'overflow-scroll w-full h-full' : 'w-64'} bg-[#24292d] text-white rounded-lg p-6 flex flex-col justify-start`}>

            <NavLinkMenu title={'Dashboard'} icon={MdDashboard} />

            {
                userRole === 'student' && <StudentRoute><StudentSideBar /></StudentRoute>
            }
            {
                userRole === 'admin' && <AdminRoute><AdminSideBar /></AdminRoute>
            }

        </aside>

    );
};

AsideBar.propTypes = {
    isOpen: PropTypes.bool
}

export default AsideBar;