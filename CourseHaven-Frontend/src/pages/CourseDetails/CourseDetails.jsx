import IntroDiv from "./Divs/IntroDiv";
import VideoPlay from "./Divs/VideoPlay";

const CourseDetails = () => {
    return (
        <section>
            <div className="container mx-auto px-3 md:px-2">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:px-14 md:py-16">
                    {/* <!-- Left Side --> */}
                    <div className="md:col-span-2 p-2">
                        <div>
                            <IntroDiv />
                            <VideoPlay />
                        </div>
                    </div>

                    {/* <!-- Right Side --> */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="text-2xl font-bold text-center mb-4">$295.55</div>
                        <button className="bg-blue-500 text-white w-full py-2 rounded-md mb-2">Add to cart</button>
                        <button className="bg-green-500 text-white w-full py-2 rounded-md">Buy now</button>
                        <ul className="mt-4 text-sm">
                            <li><strong>Lectures:</strong> 30</li>
                            <li><strong>Duration:</strong> 4h 50m</li>
                            <li><strong>Skills:</strong> Beginner</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseDetails;