
const DashboardProfile = () => {
    return (
        <section>
            <div className="px-0">
                <div className="bg-dashboardBanner h-[100px] md:h-[200px] bg-cover bg-no-repeat bg-[#1d3b53]">
                </div>
            </div>
            <div className="container mx-auto px-5 md:px-20">
                {/* Profile Stuff */}
                <div className="flex">
                    <div className="coll-12">
                        <div className=''>
                            <div className='flex'>
                                <div className='coll-auto px-4'>
                                    <div className='w-40 h-40 inline-block relative -mt-7'>
                                        <img className="w-40 h-40 shrink-0 z-20 rounded-full border-2 border-blue-600 ring-2 ring-white inline-block" src="https://readymadeui.com/team-1.webp" alt="avatar" />

                                        {/* conditional if the student pro */}
                                        <span className='absolute -ml-12 bottom-1 px-5 py-1 bg-[#4CBC87] rounded-3xl text-sm font-roboto text-[#fff] font-medium'>Pro</span>
                                    </div>
                                </div>
                                <div className='profile-des-container flex items-center justify-between px-6'>
                                    {/* profile name and it will another div for btn */}
                                    <div className=''>
                                        <h2 className='text-[#24292d] font-bold md:text-2xl lg:text-[26px] font-heebo mb-1.5'>Lori Stevens</h2>
                                        <ul className='flex items-center'>
                                            <li className='inline-block mr-4'>
                                                <span className='text-[15px] font-bold text-[#24292d] font-heebo mr-1'>255</span>
                                                <span className='font-heebo text-[15px] text-[#747579]'>Points</span>
                                            </li>
                                            <li className='inline-block mr-4'>
                                                <span className='text-[15px] font-bold text-[#24292d] font-heebo mr-1'>7</span>
                                                <span className='font-heebo text-[15px] text-[#747579]'>Completed courses</span>
                                            </li>
                                            <li className='inline-block'>
                                                <span className='text-[15px] font-bold text-[#24292d] font-heebo mr-1'>35</span>
                                                <span className='font-heebo text-[15px] text-[#747579]'>Completed lessons</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <a href="" className='px-6 py-2.5 border border-[#066ac9] rounded-md text-[#066ac9] font-roboto text-base font-medium hover:bg-[#066ac9] hover:text-white transition duration-300'>View my courses</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashboardProfile;