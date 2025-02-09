import { MdComputer } from "react-icons/md";
import { FaClipboardCheck } from "react-icons/fa";
import StatisticsBox from "../../../../components/Dashboard/StatisticsBox/StatisticsBox";
import { LiaCertificateSolid } from "react-icons/lia";
import MyCourse from "../../MyCourse/MyCourse";

const StudentStatistic = () => {
    return (
        <div>
            <div className="mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Total Courses Card */}
                    <StatisticsBox bgColor={'#FDF6E2'} icon={MdComputer} iconColor={'#fd7e14'} sizePx={74} title={5} des={'Total Courses'} />

                    <StatisticsBox bgColor={'#F0ECF9'} icon={FaClipboardCheck} iconColor={'#6f42c1'} sizePx={60} title={1} des={'Complete lessons'} />

                    <StatisticsBox bgColor={'#0cbc871a'} icon={LiaCertificateSolid} iconColor={'#0cbc87'} sizePx={75} title={0} des={'Achieved Certificates'} />

                </div>

                <MyCourse />

             

            </div>
        </div>
    );
};

export default StudentStatistic;