import { Outlet } from 'react-router';
import AsideBar from '../components/Dashboard/AsideBar/AsideBar';
import DashboardProfile from '../components/Dashboard/DashboardProfile/DashboardProfile';
import './DashBoard.css'

const Layout = () => {
    return (
        <main>
            <DashboardProfile />

            <section className='py-14'>
                <div className='container mx-auto px-3 lg:px-14'>
                    <div className="flex items-start">

                        <AsideBar />

                        <div className="flex-1 xl:px-5">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Layout;
