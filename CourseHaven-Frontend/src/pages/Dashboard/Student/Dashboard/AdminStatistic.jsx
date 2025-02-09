import { FaChartLine, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { MdComputer } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import { MdDiamond } from "react-icons/md";
import StatisticsBox from '../../../../components/Dashboard/StatisticsBox/StatisticsBox';


const AdminSta = () => {
    return (
        <div>
            <div className="mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Total Courses Card */}
                    <StatisticsBox bgColor={'#FDF6E2'} icon={MdComputer} iconColor={'#f7c32e'} sizePx={74} title={25} des={'Total Courses'} />

                    <StatisticsBox bgColor={'#F0ECF9'} icon={FaUserGraduate} iconColor={'#6f42c1'} sizePx={60} title={250} des={'Total Students'} />

                    <StatisticsBox bgColor={'#E8F6F8'} icon={MdDiamond} iconColor={'#17a2b8'} sizePx={75} title={30} des={'Enrolled Students'} />

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* Current Month Card */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center">
                            <div className="bg-blue-100 p-4 rounded-full">
                                <FaChartLine className="text-blue-600 text-2xl" />
                            </div>
                            <h2 className="text-xl font-semibold text-gray-700 ml-4">Current Month</h2>
                        </div>
                        <p className="text-4xl font-bold text-blue-600 mt-4">$35000</p>
                        <p className="text-green-600 mt-2 flex items-center">
                            <FaArrowUp className="mr-2" /> 0.20% ↑ vs last month
                        </p>
                    </div>

                    {/* Last Month Card */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center">
                            <div className="bg-blue-100 p-4 rounded-full">
                                <FaChartLine className="text-blue-600 text-2xl" />
                            </div>
                            <h2 className="text-xl font-semibold text-gray-700 ml-4">Last Month</h2>
                        </div>
                        <p className="text-4xl font-bold text-blue-600 mt-4">$28000</p>
                        <p className="text-red-600 mt-2 flex items-center">
                            <FaArrowDown className="mr-2" /> 0.10% ↓ vs last month
                        </p>
                    </div>
                </div>

                {/* Additional Statistics Card */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center">
                        <div className="bg-blue-100 p-4 rounded-full">
                            <FaChartLine className="text-blue-600 text-2xl" />
                        </div>
                        <h2 className="text-xl font-semibold text-gray-700 ml-4">Additional Statistics</h2>
                    </div>
                    <p className="text-4xl font-bold text-blue-600 mt-4">4800</p>
                </div>
            </div>
        </div>
    );
};

export default AdminSta;