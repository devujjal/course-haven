import { useState } from "react";

const CourseVideoPage = () => {
    const [openModule, setOpenModule] = useState(null);

    const toggleModule = (index) => {
        setOpenModule(openModule === index ? null : index);
    };

    const courseModules = [
        {
            title: "Introduction to [Topic]",
            videos: [
                { title: "Welcome to the Course", duration: "5:32" },
                { title: "What You'll Learn", duration: "7:15" },
            ],
        },
        {
            title: "Getting Started with [Topic]",
            videos: [
                { title: "Setting Up Your Environment", duration: "10:45" },
                { title: "Your First Project", duration: "12:30" },
            ],
        },
        {
            title: "Advanced Techniques",
            videos: [
                { title: "Advanced Concepts", duration: "15:20" },
                { title: "Optimizing Your Workflow", duration: "9:10" },
            ],
        },
        {
            title: "Final Project",
            videos: [
                { title: "Project Overview", duration: "8:00" },
                { title: "Building the Project", duration: "20:00" },
            ],
        },
    ];

    return (
        <div className="bg-gray-100 min-h-screen p-6">
            <div className="container mx-auto">
                {/* Header */}
                <header className="bg-white shadow-md p-4 mb-6 rounded-lg">
                    <h1 className="text-2xl font-bold text-gray-800">Course Title</h1>
                    <p className="text-gray-600">Learn the fundamentals of [Course Topic]</p>
                </header>

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Video Player Section */}
                    <div className="lg:w-2/3">
                        <div className="bg-black aspect-video rounded-lg overflow-hidden">
                            {/* Replace the iframe with your video player */}
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/VIDEO_ID"
                                title="Course Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>

                        {/* Video Details */}
                        <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-gray-800">Video Title</h2>
                            <p className="text-gray-600 mt-2">
                                This video covers the basics of [Topic]. You will learn about [Key Points].
                            </p>
                        </div>
                    </div>

                    {/* Course Modules Section */}
                    <div className="lg:w-1/3">
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Course Modules</h3>
                            <div className="space-y-2">
                                {courseModules.map((module, index) => (
                                    <div key={index} className="border rounded-lg">
                                        {/* Module Header */}
                                        <div
                                            className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                                            onClick={() => toggleModule(index)}
                                        >
                                            <span className="text-gray-800">{module.title}</span>
                                            <span className="text-gray-600">
                                                {openModule === index ? "▼" : "▶"}
                                            </span>
                                        </div>

                                        {/* Module Videos (Collapsible) */}
                                        {openModule === index && (
                                            <div className="p-2 bg-gray-50">
                                                {module.videos.map((video, videoIndex) => (
                                                    <div
                                                        key={videoIndex}
                                                        className="flex justify-between items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
                                                    >
                                                        <span className="text-gray-700">{video.title}</span>
                                                        <span className="text-gray-500 text-sm">{video.duration}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Course Progress */}
                        <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Progress</h3>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div
                                    className="bg-blue-600 h-2.5 rounded-full"
                                    style={{ width: "45%" }}
                                ></div>
                            </div>
                            <p className="text-gray-600 mt-2">45% Completed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseVideoPage;




// const CourseVideoPage = () => {
//     return (
//         <div className="bg-gray-100">
//             <div className="p-4">
//                 <div className="bg-white shadow-md p-4 mb-6">
//                     <h1 className="text-2xl font-bold text-gray-800">Course Title</h1>
//                     <p className="text-gray-600">Learn the fundamentals of ...</p>
//                 </div>

//                 {/* <!-- Main Content --> */}
//                 <div className="flex flex-col lg:flex-row gap-6">
//                     <div className="lg:w-2/3">
//                         <div className="bg-black aspect-video rounded-lg overflow-hidden">
//                             {/* <!-- Replace the iframe with your video player --> */}
//                             <iframe width="560" height="315" src="https://www.youtube.com/embed/fJ5U3Q3PZ4s?si=Sg9XUE4l38zzTgP7" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
//                         </div>

//                         <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
//                             <h2 className="text-xl font-semibold text-gray-800">Video Title</h2>
//                             <p className="text-gray-600 mt-2">
//                                 This video covers the basics of .... You will learn about....
//                             </p>
//                         </div>
//                     </div>

//                     <div className="lg:w-1/3">
//                         <div className="bg-white p-4 rounded-lg shadow-md">
//                             <h3 className="text-lg font-semibold text-gray-800 mb-4">Course Modules</h3>
//                             <ul className="space-y-2">
//                                 {/* <!-- Module List --> */}
//                                 <li className="flex items-center p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
//                                     <span className="text-gray-600 mr-2">▶️</span>
//                                     <span className="text-gray-800">Introduction to ..</span>
//                                 </li>
//                                 <li className="flex items-center p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
//                                     <span className="text-gray-600 mr-2">▶️</span>
//                                     <span className="text-gray-800">Getting Started with ...</span>
//                                 </li>
//                                 <li className="flex items-center p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
//                                     <span className="text-gray-600 mr-2">▶️</span>
//                                     <span className="text-gray-800">Advanced Techniques</span>
//                                 </li>
//                                 <li className="flex items-center p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
//                                     <span className="text-gray-600 mr-2">▶️</span>
//                                     <span className="text-gray-800">Final Project</span>
//                                 </li>
//                             </ul>
//                         </div>


//                         <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
//                             <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Progress</h3>
//                             <div className="w-full bg-gray-200 rounded-full h-2.5">
//                                 <div className="bg-blue-600 h-2.5 rounded-full" style={{ "width": "45%" }}></div>
//                             </div>
//                             <p className="text-gray-600 mt-2">45% Completed</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CourseVideoPage;