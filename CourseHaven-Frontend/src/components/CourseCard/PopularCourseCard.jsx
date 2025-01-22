import { IoMdStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";


const PopularCourseCard = () => {
    return (
        <div className="max-w-[260px] bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-44">
                <img src="https://themes.stackbros.in/eduport_r/assets/02-CLuao9PX.jpg" alt="Photoshop Logo" className="w-full h-44" />
            </div>

            <div className="p-4">
                <div className="flex items-center justify-between">
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full font-semibold font-roboto">Beginner</span>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656l-6.364 6.364a.75.75 0 01-1.06 0L3.172 10.83a4 4 0 010-5.657z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                <h2 className="text-lg font-semibold font-heebo mt-2 text-xl text-[#24292d]">Graphic Design Masterclass</h2>
                <p className="text-[15px] font-roboto text-gray-600 mt-1">Rooms oh fully taken by worse do Points afraid but may end...</p>

                <div className="flex items-center mt-3 text-yellow-400">
                    <div className="flex">
                        <IoMdStar size={22} />
                        <IoMdStar size={22} />
                        <IoMdStar size={22} />
                        <IoMdStar size={22} />
                        <IoIosStarHalf size={22} />
                    </div>
                    <span className="text-gray-700 ml-2.5 text-[15px] font-heebo">4.5/5.0</span>
                </div>

                <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v4a1 1 0 001 1h3a1 1 0 100-2h-2V5z" clipRule="evenodd" />
                        </svg>
                        <span className="ml-1">9h 56m</span>
                    </div>
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path clipRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm3 4a1 1 0 012 0v4a1 1 0 01-2 0V6z" />
                        </svg>
                        <span className="ml-1">65 lectures</span>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PopularCourseCard;