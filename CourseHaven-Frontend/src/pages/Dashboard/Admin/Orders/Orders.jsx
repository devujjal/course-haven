
const Orders = () => {

    const payments = [
        {
            date: "4/2/2023",
            courseName: "Sketch from A to Z: for app designer",
            paymentMethod: "MasterCard",
            cardNumber: "****4568",
            status: "Paid",
            total: "$350",
            statusColor: "bg-green-100 text-green-600",
        },
        {
            date: "10/1/2023",
            courseName: "Create a Design System in Figma",
            paymentMethod: "MasterCard",
            cardNumber: "****2588",
            status: "Paid",
            total: "$242",
            statusColor: "bg-green-100 text-green-600",
        },
        {
            date: "21/1/2023",
            courseName: "The Complete Web Development in Python",
            paymentMethod: "PayPal",
            status: "Pending",
            total: "$576",
            statusColor: "bg-yellow-100 text-yellow-600",
        },
        {
            date: "18/1/2023",
            courseName: "Deep Learning with React-Native",
            paymentMethod: "MasterCard",
            cardNumber: "****2588",
            status: "Cancel",
            total: "$425",
            statusColor: "bg-red-100 text-red-600",
        },
    ];


    return (
        <div className="w-full border">
            <div className="mx-auto px-3 md:px-0">
                <div className="p-5 border-b">
                    <h2 className="text-[#24292d] text-3xl font-heebo font-bold">My Courses
                    </h2>
                </div>
                <div className="mt-6 overflow-x-auto px-2 md:px-4"> {/* Ensure this div has overflow-x-auto */}
                    <div className="min-w-[800px]"> {/* Set a minimum width to force overflow */}
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-gray-800 text-white text-base font-bold font-roboto rounded-t-lg">
                                <tr>
                                    <th className="p-4 rounded-tl-lg">Date</th>
                                    <th className="p-4">Course name</th>
                                    <th className="p-4">Payment ID</th>
                                    <th className="p-4">Status</th>
                                    <th className="p-4 rounded-tr-lg">Total</th>
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

export default Orders;