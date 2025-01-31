import { MdDashboard } from "react-icons/md";
import useRole from "../../../hooks/useRole";
import AdminRoute from "../../../routes/AdminRoute";
import StudentRoute from "../../../routes/StudentRoute";
import AdminSideBar from "../AdminSideBar/AdminSideBar";
import NavLinkMenu from "../NavLink/NavLink";
import StudentSideBar from "../StudentSideBar/StudentSideBar";


/* Student side bar */

const AsideBar = () => {
    const { userRole } = useRole();

    console.log(userRole)
    return (
        <aside className="hidden xl:block w-64 bg-[#24292d] text-white rounded-lg p-6 flex flex-col justify-start h-full">

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

export default AsideBar;