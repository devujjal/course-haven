import logo from '../../assets/haven-logo.png'
import { IoIosSearch } from "react-icons/io";
import { MdMenu } from "react-icons/md";


const Header = () => {
    return (

        <header>
            <nav className="container mx-auto px-3">
                <div className="flex justify-between items-center w-full font-roboto py-4">
                    {/* Logo */}
                    <a href="#">
                        <img src={logo} className="w-44 md:w-52" alt="Eduport Logo" />
                    </a>

                    {/* Navigation Links and Search */}
                    <div className="hidden md:flex justify-between items-center w-[70%]">
                        {/* Category Dropdown */}
                        <ul className="flex items-center space-x-4">
                            <li className="flex items-center space-x-2 px-4 py-2 text-[#066ac9] bg-[#E7F0FA] rounded-md cursor-pointer">
                                <svg
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 16 16"
                                    fill="#066ac9"
                                    role="img"
                                    focusable="false"
                                // className="text-gray-600"
                                >
                                    <path d="M3.5 15a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m9-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m0 9a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5M16 3.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-9 9a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m5.5 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m-9-11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 2a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"></path>
                                </svg>
                                <span className="font-medium text-[#066ac9]">Category</span>
                            </li>
                        </ul>

                        {/* Main Navigation */}
                        <ul className="flex items-center space-x-6">
                            <li>
                                <a href="#" className="text-gray-700 font-medium hover:text-blue-600">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700 font-medium hover:text-blue-600">
                                    Courses
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700 font-medium hover:text-blue-600">
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700 font-medium hover:text-blue-600">
                                    Contact
                                </a>
                            </li>
                        </ul>

                        {/* Search Form */}
                        <div>
                            <form className="flex items-center border rounded-md overflow-hidden">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="pl-4 pr-2 py-2 text-sm focus:outline-none w-full"
                                />
                                <button className="px-4 py-2 text-gray-600 hover:text-blue-700">
                                    <IoIosSearch size={20} />
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Profile Section */}
                    <div className='flex items-center justify-between gap-2'>

                        {/* Mobile Menu Button */}
                        <button className="md:hidden">
                            <MdMenu size={30} />
                        </button>

                        <button
                            className='px-4 py-2 text-sm rounded font-semibold text-white border-2 border-[#346AC9] bg-[#346AC9] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#066ac9]'>Get Started</button>



                        {/*  <div className="flex items-center space-x-4">
                        <a href="#">
                            <img
                                src="https://readymadeui.com/team-3.webp"
                                className="w-12 h-12 rounded-full border-2 border-blue-600"
                                alt="Profile"
                            />
                        </a>
                    </div> */}

                    </div>



                </div>
            </nav>
        </header>


    );
};

export default Header;