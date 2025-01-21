
const InstructorSection = () => {
    return (
        <section className="py-12">
            <div className="container mx-auto px-3 md:px-2">
                <div className="md:px-12">
                    <div className="bg-teal-500 text-white md:p-12 rounded-lg flex flex-col md:flex-row items-center justify-between">
                        <div className="flex flex-col md:flex-row items-center justify-between py-4 px-8 md:px-0 md:py-0">
                            <div className="w-full md:w-3/5 mb-6 md:mb-0">
                                <h2 className="text-2xl font-bold mb-2 font-heebo md:text-4xl">Become an Instructor!</h2>
                                <p className="text-sm md:text-base font-roboto">
                                    Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced.
                                    Yet uncommonly his ten who diminution astonished.
                                </p>
                            </div>
                            <div className="w-full md:w-2/5 flex justify-start md:justify-end">
                                <button className="border-2 border-yellow-400 text-yellow-400 font-bold py-2 px-4 rounded-lg hover:bg-yellow-400 hover:text-[#24292d] ease-linear transition">
                                    Start Teaching Today
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default InstructorSection;