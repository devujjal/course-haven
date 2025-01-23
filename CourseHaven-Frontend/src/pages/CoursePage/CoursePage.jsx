import FilterStuff from "./Sections/FilterStuff";
import SubscribeSection from "./Sections/SubscribeSection";

const CoursePage = () => {
    return (
        <>
            <section>
                <div className="container mx-auto px-3 md:px-2">
                    <div className="md:px-12 py-10">
                        {/* Search filter options */}
                        <FilterStuff />
                        <div>
                            {/* Show course Data */}
                        </div>
                    </div>
                </div>
            </section>
            <SubscribeSection />

        </>
    );
};

export default CoursePage;