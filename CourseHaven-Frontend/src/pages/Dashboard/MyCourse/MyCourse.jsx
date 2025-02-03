import { FaEye } from "react-icons/fa";


const payments = [
    {

        courseName: "Sketch from A to Z: for app designer",
        paymentMethod: "MasterCard",
        cardNumber: "****4568",
        status: "Paid",
        total: "$350",
        statusColor: "bg-green-100 text-green-600",
    },
    {

        courseName: "Create a Design System in Figma",
        paymentMethod: "MasterCard",
        cardNumber: "****2588",
        status: "Paid",
        total: "$242",
        statusColor: "bg-green-100 text-green-600",
    },
    {

        courseName: "The Complete Web Development in Python",
        paymentMethod: "PayPal",
        status: "Pending",
        total: "$576",
        statusColor: "bg-yellow-100 text-yellow-600",
    },
    {

        courseName: "Deep Learning with React-Native",
        paymentMethod: "MasterCard",
        cardNumber: "****2588",
        status: "Cancel",
        total: "$425",
        statusColor: "bg-red-100 text-red-600",
    },
];


const MyCourse = () => {
    return (
        <div className="w-full">
            <div className="mx-auto px-3 md:px-2">
                <div className="mt-6 overflow-x-auto"> {/* Ensure this div has overflow-x-auto */}
                    <div className="min-w-[800px]"> {/* Set a minimum width to force overflow */}
                        <table className="w-full text-left border-collapse border">
                            <thead className="bg-gray-800 text-white text-base font-bold font-roboto">
                                <tr>
                                    <th className="p-4">Course Title</th>
                                    <th className="p-4">Total Lectures</th>
                                    <th className="p-4">Completed Lecture</th>
                                    <th className="p-4">Action</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm bg-white">
                                {payments.map((payment, index) => (
                                    <tr
                                        key={index}
                                        className="border-t border-gray-300 hover:bg-gray-50 cursor-pointer"
                                    >

                                        <td className="p-4 flex gap-4">
                                            <img src="https://i.ibb.co.com/3Fp34ns/qi862zr116f8j871ttok6.jpg" className="w-30 h-20 rounded-md" alt="" />
                                            <div className="flex flex-col justify-between">
                                                <h2 className="font-heebo font-bold text-[16px]">Full-Stack Web Design: From Frontend to Backend</h2>
                                                <div className="w-full bg-gray-200 rounded-full h-2">
                                                    <div
                                                        className="bg-blue-600 h-2 rounded-full"
                                                        style={{ width: "2%" }}
                                                    ></div>
                                                </div>
                                            </div>

                                        </td>


                                        <td className="p-4 font-roboto text-[15px] font-normal">
                                            65
                                        </td>
                                        <td className="p-4 font-roboto text-base font-normal">20</td>
                                        <td className="p-4 cursor-pointer">
                                            <button className="ml-4 bg-blue-100 text-blue-500 px-4 py-2 rounded transition-all font-medium hover:bg-blue-200">
                                                Continue
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCourse;