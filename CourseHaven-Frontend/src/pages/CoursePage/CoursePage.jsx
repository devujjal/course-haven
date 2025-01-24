import { useQuery } from "@tanstack/react-query";
import FilterStuff from "./Sections/FilterStuff";
import SubscribeSection from "./Sections/SubscribeSection";

const CoursePage = () => {


    // const { data } = useQuery({
    //     queryKey: ['all-courses'],
    //     queryFn: async() => {

    //     }
    // })


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