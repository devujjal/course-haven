import { MdComputer } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import { MdDiamond } from "react-icons/md";
import StatisticsBox from '../../../../components/Dashboard/StatisticsBox/StatisticsBox';


const AdminStatistic = () => {
    return (
        <div>
            <div className="mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Total Courses Card */}
                    <StatisticsBox bgColor={'#FDF6E2'} icon={MdComputer} iconColor={'#f7c32e'} sizePx={74} title={25} des={'Total Courses'} />

                    <StatisticsBox bgColor={'#F0ECF9'} icon={FaUserGraduate} iconColor={'#6f42c1'} sizePx={60} title={250} des={'Total Students'} />

                    <StatisticsBox bgColor={'#E8F6F8'} icon={MdDiamond} iconColor={'#17a2b8'} sizePx={75} title={30} des={'Enrolled Students'} />

                </div>

                <div className='mb-4 grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3'>
                    {/* Total Sales Graph */}
                    <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2'>
                        {/* Render Chart Here */}


                    </div>
                    {/* Calender */}
                    <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden'>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminStatistic;