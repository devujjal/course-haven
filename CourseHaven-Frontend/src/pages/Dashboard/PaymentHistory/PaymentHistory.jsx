import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { FaEye } from "react-icons/fa";
import toast from "react-hot-toast";
import PrimarySpinner from "../../../components/LoadingSpinner/PrimarySpinner";


const PaymentHistory = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    // const payments = [
    //     {
    //         date: "4/2/2023",
    //         courseName: "Sketch from A to Z: for app designer",
    //         paymentMethod: "MasterCard",
    //         cardNumber: "****4568",
    //         status: "Paid",
    //         total: "$350",
    //         statusColor: "bg-green-100 text-green-600",
    //     },
    //     {
    //         date: "10/1/2023",
    //         courseName: "Create a Design System in Figma",
    //         paymentMethod: "MasterCard",
    //         cardNumber: "****2588",
    //         status: "Paid",
    //         total: "$242",
    //         statusColor: "bg-green-100 text-green-600",
    //     },
    //     {
    //         date: "21/1/2023",
    //         courseName: "The Complete Web Development in Python",
    //         paymentMethod: "PayPal",
    //         status: "Pending",
    //         total: "$576",
    //         statusColor: "bg-yellow-100 text-yellow-600",
    //     },
    //     {
    //         date: "18/1/2023",
    //         courseName: "Deep Learning with React-Native",
    //         paymentMethod: "MasterCard",
    //         cardNumber: "****2588",
    //         status: "Cancel",
    //         total: "$425",
    //         statusColor: "bg-red-100 text-red-600",
    //     },
    // ];

    const { data: payments = [], isError, error, isLoading } = useQuery({
        queryKey: ['paymaent-history'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payment-history?email=${user?.email}`);
            return res.data;
        }
    })


    if (isError) {
        return toast.error(error.message)
    }


    if (isLoading) {
        return <PrimarySpinner smallHeight={true} />
    }


    return (

        <div className="w-full">
            <div className="mx-auto px-3 md:px-2">
                <div className="mt-6 overflow-x-auto"> {/* Ensure this div has overflow-x-auto */}
                    <div className="min-w-[800px]"> {/* Set a minimum width to force overflow */}
                        <table className="w-full text-left border-collapse border">
                            <thead className="bg-gray-800 text-white text-base font-bold font-roboto">
                                <tr>
                                    <th className="p-4">Date</th>
                                    <th className="p-4">Course name</th>
                                    <th className="p-4">Payment ID</th>
                                    <th className="p-4">Status</th>
                                    <th className="p-4">Total</th>
                                    <th className="p-4">View</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm bg-white">
                                {payments.map((payment, index) => (
                                    <tr
                                        key={index}
                                        className="border-t border-gray-300 hover:bg-gray-50 cursor-pointer"
                                    >
                                        <td className="p-4 font-roboto font-normal text-base">{new Date(payment?.date).toLocaleDateString()}</td>
                                        <td className="p-4 font-heebo font-base font-bold">{payment?.courseTitle ? payment?.courseTitle : 'Buy Multiple Courses Together'}</td>
                                        <td className="p-4 font-roboto text-[15px] font-normal">
                                            {payment?.transactionId}
                                        </td>
                                        <td className="p-4">
                                            <span
                                                className={`px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-600`}
                                            >
                                                {payment?.status}
                                            </span>
                                        </td>
                                        <td className="p-4 font-roboto text-base font-normal">${payment?.price}</td>
                                        <td className="p-4 cursor-pointer">
                                            <button>
                                                {
                                                    payment?.courseTitle ? '' : <FaEye size={25} />
                                                }
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
}






export default PaymentHistory;