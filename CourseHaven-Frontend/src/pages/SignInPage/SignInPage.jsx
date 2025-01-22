import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";


const SignInPage = () => {
    return (
        <section>
            <div className="container mx-auto px-3 md:px-2">

                <div className="min-h-screen">
                    <div className="grid grid-cols-1 md:grid-cols-2 bg-white overflow-hidden">
                        <div className="block text-center bg-blue-50 p-8">
                            <h1 className="text-[37px] font-bold text-[#24292d] font-heebo mb-2">Welcome to our largest community</h1>
                            <p className="text-[#24292d] text-base mb-6">Lets learn something new today!</p>
                            <div className="flex justify-center mb-6">
                                <img src="https://themes.stackbros.in/eduport_r/assets/02-CxJqFtvR.svg" alt="Illustration" className="w-full" />
                            </div>
                            <div className="text-center">
                                <p className="text-base font-heebo text-[#24292d]">4k+ Students joined us, now its your turn.</p>
                            </div>
                        </div>
                        <div className="p-4 lg:p-20">
                            <h2 className="text-[37px] font-heebo font-bold text-[#24292d] mb-4">
                                <span className="mr-2 block">👋</span>
                                Login into Eduport!
                            </h2>
                            <p className="text-[#747579] font-roboto font-normal text-[19px] mb-6">Nice to see you! Please log in with your account.</p>
                            <form>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-[#747579] font-normal font-sm font-roboto mb-2">Email address *</label>
                                    <input type="email" id="email" name="email" placeholder="user@email.com"
                                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring focus:ring-blue-300 outline-none" />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="password" className="block text-[#747579] font-normal font-sm font-roboto mb-2">Password *</label>
                                    <input type="password" id="password" name="password" placeholder="********"
                                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring focus:ring-blue-300 outline-none" />
                                    <p className="text-sm font-roboto text-[#9a9ea4] mt-1.5">Your password must be 8 characters at least</p>
                                </div>
                                <div className="flex items-center justify-between mb-6">
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox text-blue-600" />
                                        <span className="ml-2 font-roboto text-base text-[#747579]">Remember me</span>
                                    </label>
                                    <a href="#" className="text-base font-roboto text-[#9a9ea4] hover:text-[#066ac9] underline">Forgot password?</a>
                                </div>
                                <button type="submit"
                                    className="w-full bg-[#066ac9] text-white py-2 rounded-md hover:bg-[#084783] font-roboto text-base font-medium">Login</button>
                            </form>
                            <div className="my-6 text-center text-gray-500">Or</div>
                            <button
                                className="w-full border border-gray-300 text-white bg-[#3c7ff1] py-2 rounded-md flex gap-2 font-roboto font-medium items-center justify-center mb-2.5 hover:bg-[#3972D9]">
                                <FaGoogle />
                                Login with Google
                            </button>
                            <button
                                className="w-full border border-gray-300 text-white bg-[#5475bc] py-2 rounded-md flex gap-2 font-roboto font-medium items-center justify-center hover:bg-[#435e99]">
                                <FaFacebookF />
                                Login with Google
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SignInPage;