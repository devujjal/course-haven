import { useState } from "react";

const PopularCourseTab = () => {

    const [getIndex, setGetIndex] = useState(0)
    const categories = ['Web Design', 'Development', 'Graphic Design', 'Marketing', 'Finance'];


    console.log(getIndex)

    //color: #066ac9
    return (
        <div className="w-full">
            <div className="flex flex-wrap lg:justify-center items-center gap-3 lg:space-x-4  rounded-lg bg-blue-100 p-3">

                {
                    categories.map((category, index) => (
                        <button
                            onClick={() => setGetIndex(index)}
                            key={index}
                            className={`${index === getIndex ? 'bg-[#066ac9] text-white' : ''} text-[#066ac9] px-6 py-2 rounded-md  font-semibold`}>
                            {category}
                        </button>
                    ))
                }

                {/* <button className="px-6 py-2 rounded-md text-blue-600 font-semibold hover:bg-blue-200">
                    Development
                </button> */}

            </div>
        </div>

    );
};

export default PopularCourseTab;