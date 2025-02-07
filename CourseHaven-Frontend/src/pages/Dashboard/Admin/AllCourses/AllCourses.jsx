import { Helmet } from "react-helmet-async";
import { PiListDashesFill } from "react-icons/pi";
import { IoCloseSharp } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";


const AllCourses = () => {

    const payments = [
        { title: 'Full-Stack Web Development Bootcamp', image: 'https://i.ibb.co.com/6Hp1ZrR/Top-Web-Development-Tools.jpg', lectures: 66, enrolled: 5000, price: 199.99 },
        { title: 'Full-Stack Web Development Bootcamp', image: 'https://i.ibb.co.com/6Hp1ZrR/Top-Web-Development-Tools.jpg', lectures: 66, enrolled: 5000, price: 199.99 },
        { title: 'Full-Stack Web Development Bootcamp', image: 'https://i.ibb.co.com/6Hp1ZrR/Top-Web-Development-Tools.jpg', lectures: 66, enrolled: 5000, price: 199.99 },
        { title: 'Full-Stack Web Development Bootcamp', image: 'https://i.ibb.co.com/6Hp1ZrR/Top-Web-Development-Tools.jpg', lectures: 66, enrolled: 5000, price: 199.99 },

    ]


    return (
        <>
            <Helmet>
                <title>My Courses - Course Haven</title>
            </Helmet>

            <div className="w-full border rounded-md">
                <div className="mx-auto px-3 md:px-0">
                    <div className="p-5 border-b">
                        <h2 className="text-[#24292d] text-3xl font-heebo font-bold">My Courses List
                        </h2>
                    </div>
                    <div className="mt-6 overflow-x-auto px-2 md:px-4"> {/* Ensure this div has overflow-x-auto */}
                        <div className="min-w-[800px]"> {/* Set a minimum width to force overflow */}
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-gray-800 text-white text-base font-bold font-roboto rounded-t-lg">
                                    <tr>
                                        <th className="p-4 rounded-tl-lg">Course Title</th>
                                        <th className="p-4">Enrolled</th>
                                        <th className="p-4">Status</th>
                                        <th className="p-4">Price</th>
                                        <th className="p-4 rounded-tr-lg">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm bg-white">
                                    {payments.map((payment, index) => (
                                        <tr
                                            key={index}
                                            className="border-t border-gray-300 hover:bg-[#EFEFEF] cursor-pointer"
                                        >
                                            {/* <td className="p-4 font-heebo font-base font-bold hover:text-[#066ac9] transition-all">
                                                <div>
                                                    <div>
                                                        <img src="" alt="" />
                                                    </div>
                                                    <div>

                                                    </div>
                                                </div>
                                            </td> */}
                                            <td className="p-4 flex gap-4">
                                                <img src={payment?.image} className="w-28 h-23 rounded-md" alt="" />
                                                <div className="flex flex-col justify-between py-1">
                                                    <h2 className="font-heebo font-bold text-[16px] hover:text-[#066ac9] transition-all">{payment?.title}</h2>
                                                    <div className="flex items-center">
                                                        <PiListDashesFill color="#F07D15" size={17} className="mr-2" />
                                                        <span className="text-[#24292d] font-heebo font-normal">{payment?.lectures} lectures</span>
                                                    </div>
                                                </div>

                                            </td>
                                            <td className="p-4 font-roboto text-[15px] font-normal">
                                                {payment?.enrolled}
                                            </td>
                                            <td className="p-4 font-roboto">
                                                <span className={`px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-600`}>{'Paid'}</span> 
                                            </td>
                                            <td className="p-4 font-roboto text-[15px] font-normal">
                                                {payment?.price}
                                            </td>
                                            <td className="p-4 font-roboto font-normal text-[15px]">
                                                <div className="flex items-center gap-3">
                                                    <button className="px-2 rounded-full bg-[#0cbc871a] py-2 text-[#0cbc87] hover:bg-[#0cbc87] hover:text-white transition-all"> <FaEdit size={16} /></button>
                                                    <button className="px-2 bg-[#d6293e1a] text-[#d6293e] py-2 rounded-full hover:bg-[#d6293e] hover:text-white transition-all"> <IoCloseSharp size={16} /></button>

                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllCourses;