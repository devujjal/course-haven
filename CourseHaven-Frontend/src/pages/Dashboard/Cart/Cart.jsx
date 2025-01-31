import { IoCloseSharp } from "react-icons/io5";


const Cart = () => {
    return (
        <section>
            <div className="container mx-auto px-3 md:px-2">
                <div className="py-10">
                    <div className="bg-[#F5F7F9] text-center p-7 rounded-md">
                        <h2 className="text-[#24292d] font-heebo text-4xl font-bold">My cart</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-10 md:px-2 md:py-16">
                        <div className="md:col-span-2 shadow-one py-5 px-6 md:mr-5 rounded-md">
                            <div className="py-6 border-b">
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-3 items-center">
                                        <img src="https://themes.stackbros.in/eduport_r/assets/08-DgNLqCM_.jpg" className="w-[13%] rounded-xl" alt="" />
                                        <h3 className="text-[#24292d] font-heebo text-base font-bold">Building Scalable APIs with GraphQL</h3>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-[#0cbc87] font-heebo text-[21px] font-bold gap-10 mr-4">$350</span>
                                        <span className="p-2.5 cursor-pointer hover:bg-[#D6293E] hover:text-white transition-all bg-[#d6293e1a] text-[#D6293E] rounded-md"><IoCloseSharp /></span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center border mt-8 rounded-md overflow-hidden w-96">
                                <input
                                    type="text"
                                    placeholder="COUPON CODE"
                                    className="flex-grow px-4 py-[10px] font-heebo border border-gray-100 focus:border-blue-600 outline-none placeholder-gray-500"
                                />
                                <button className="bg-blue-500 text-white px-4 py-[11px] font-medium hover:bg-blue-600">
                                    Apply coupon
                                </button>
                            </div>
                        </div>
                        <div className="pt-10 md:mr-4 md:ml-4">
                            <div className="shadow-one rounded-md">
                                <div className="px-8 py-5">
                                    <h3 className="text-[#24292d] font-bold font-heebo text-[26px]">Cart Total</h3>
                                    <ul className="mt-5">
                                        <li className="flex items-center justify-between">
                                            <span className="text-[#24292d] text-base font-normal	 font-heebo">Original Price</span>
                                            <span className="text-[#24292d] font-bold text-base font-roboto font-bold">$500</span>
                                        </li>
                                        <li className="flex mt-1 items-center justify-between">
                                            <span className="text-[#24292d] text-base font-normal font-heebo">Coupon Discount</span>
                                            <span className="text-[#d6293e] font-bold text-base font-roboto font-normal">$-10</span>
                                        </li>
                                        <li className="mt-5 flex items-center justify-between">
                                            <span className="text-[#24292d] font-heebo font-bold text-[21px]">Total</span>
                                            <span className="text-[#24292d] font-heebo font-bold text-[21px]">$480</span>
                                        </li>

                                    </ul>
                                    <div className="mt-3 w-full">
                                        <button className="w-full px-5 py-3 bg-[#0cbc87] hover:bg-[#0aa073] transition-all text-base text-white font-roboto font-medium rounded-md">Proceed to Payment</button>
                                    </div>
                                    <p className="text-[#747579] mt-3 text-center font-roboto text-sm">By completing your purchase, you agree to these <a className="text-[#066ac9] text-sm font-bold" href="#">Terms of Service</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;