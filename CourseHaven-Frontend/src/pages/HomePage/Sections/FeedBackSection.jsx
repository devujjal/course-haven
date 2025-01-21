import Bg from '../../../assets/feedback/01.png'
import Circle from '../../../assets/feedback/02.png'
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";


const FeedbackSection = () => {
    return (
        <section className='bg-[#F5F7F9] relative'>
            <div className="container mx-auto px-3 md:px-2">
                <div className="grid grid-cols-5 items-center gap-14 py-10 px-12">
                    <div className='absolute left-10 top-10 z-0'>
                        <img src={Circle} alt="" />
                    </div>
                    <div className="relative col-span-3 py-10">
                        <div className="flex justify-between mb-8 z-10">
                            <div className="bg-white z-10 shadow-md ml-10 mt-5 rounded-lg py-6 px-10 w-full md:w-[50%]">
                                <img src="https://themes.stackbros.in/eduport_r/assets/01-7N0KytgQ.jpg" alt="Carolyn Ortiz" className="w-12 mx-auto h-12 rounded-full" />

                                <p className="mt-4 text-center font-roboto text-gray-600">Moonlight newspaper up its enjoyment agreeable depending. Timed voice share led him to widen noisy young. At weddings believed laughing.</p>
                                <div className="mt-2 text-center text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#9734;</div>
                                <h3 className="text-lg font-heebo text-center font-semibold">Carolyn Ortiz</h3>
                            </div>
                            <div className=" absolute top-0 right-10 bg-white shadow-md rounded-lg p-6 w-full md:w-[35%]">
                                <h3 className="text-lg font-semibold mb-4">100+ Verified Mentors</h3>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-4">
                                        <img src="https://themes.stackbros.in/eduport_r/assets/09-1AM4Ze_z.jpg" alt="Lori Stevens" className="w-10 h-10 rounded-full" />
                                        <div>
                                            <h3 className="font-heebo text-base font-bold">Lori Stevens</h3>
                                            <span className="font-roboto font-normal text-sm">Tutor of Physics</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <img src="https://themes.stackbros.in/eduport_r/assets/04-Axz2kzOk.jpg" alt="Billy Vasquez" className="w-10 h-10 rounded-full" />
                                        <div>
                                            <h3 className="font-heebo text-base font-bold">Billy Vasquez</h3>
                                            <span className="font-roboto font-normal text-sm">Tutor of Chemistry</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <img src="https://themes.stackbros.in/eduport_r/assets/02-Dm08lEkH.jpg" alt="Larry Lawson" className="w-10 h-10 rounded-full" />
                                        <div>
                                            <h3 className="font-heebo text-base font-bold">Larry Lawson</h3>
                                            <span className="font-roboto font-normal text-sm">Tutor of Technology</span>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className="relative flex justify-between pb-14">
                            <div className='absolute z-20 mr-2 -top-24 right-56'>
                                <img src={Bg} alt="" />
                            </div>
                            <div className="bg-[#066ac9] bg-userBg bg-cover ml-20 text-white shadow-md rounded-lg p-6 text-center w-full md:w-[40%]">
                                <div className="text-2xl font-bold font-heebo">4.5/5.0</div>
                                <div className="flex items-center justify-center mt-2 tex-2xl text-yellow-300">
                                    <IoIosStar size={28} />
                                    <IoIosStar size={28} />
                                    <IoIosStar size={28} />
                                    <IoIosStar size={28} />
                                    <IoIosStarHalf size={28} />


                                </div>
                                <p className="mt-2 font-roboto">Based on 3265 ratings</p>
                            </div>
                            <div className="absolute right-0 bg-white -mt-24 shadow-md rounded-lg p-6 w-full md:w-[40%]">
                                <img src="https://themes.stackbros.in/eduport_r/assets/03-gME39Lw5.jpg" alt="Dennis Barrett" className="w-12 mx-auto h-12 rounded-full" />

                                <p className="mt-4 text-center font-roboto text-gray-600">At weddings believed laughing although the Moonlight newspaper up its enjoyment agreeable depending.</p>
                                <div className="mt-2 text-center text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#9734;</div>
                                <h3 className="text-lg text-center font-heebo font-semibold">Dennis Barrett</h3>

                            </div>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <h2>Some valuable feedback from our students</h2>
                        <p>Supposing so be resolving breakfast am or perfectly. It drew a hill from me. Valley by oh twenty direct me so. Departure defective arranging rapturous did believe him all had supported. Family months lasted simple set nature vulgar him. Picture for attempt joy excited ten carried manners talking how.</p>
                        <a href="">View Details</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeedbackSection;
