import useRole from "../../../hooks/useRole";
import AdminSideBar from "../AdminSideBar/AdminSideBar";
import StudentSideBar from "../StudentSideBar/StudentSideBar";


/* Student side bar */

const AsideBar = () => {
    const { userRole } = useRole();

    console.log(userRole)
    return (
        <aside className="w-64 bg-[#24292d] text-white rounded-lg p-6">

            {
                userRole === 'student' && <StudentSideBar />
            }
            {
                userRole === 'admin' && <AdminSideBar />
            }

        </aside>
    );
};

export default AsideBar;