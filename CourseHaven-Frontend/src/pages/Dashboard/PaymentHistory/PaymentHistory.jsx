const PaymentHistory = () => {
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

        <div className="w-full">
            <div className="mx-auto px-3 md:px-2">
                <div className="mt-4 overflow-x-auto"> {/* Ensure this div has overflow-x-auto */}
                    <div className="min-w-[800px]"> {/* Set a minimum width to force overflow */}
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-gray-800 text-white text-sm">
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
                                        className="border-t border-gray-300 hover:bg-gray-50"
                                    >
                                        <td className="p-4">{payment.date}</td>
                                        <td className="p-4">{payment.courseName}</td>
                                        <td className="p-4">
                                           {payment?.transactionId}
                                        </td>
                                        <td className="p-4">
                                            <span
                                                className={`px-2 py-1 rounded-full text-xs font-semibold ${payment.statusColor}`}
                                            >
                                                {payment.status}
                                            </span>
                                        </td>
                                        <td className="p-4">{payment.total}</td>
                                        <td className="p-4 text-blue-600 cursor-pointer">
                                            <button>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={2}
                                                    stroke="currentColor"
                                                    className="w-6 h-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M12 4.75v14.5m7.25-7.25H4.75"
                                                    />
                                                </svg>
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