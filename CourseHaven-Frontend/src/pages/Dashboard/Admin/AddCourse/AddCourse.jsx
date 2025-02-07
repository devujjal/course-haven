import MultiStepForm from "../../../../components/Dashboard/MultiStepForm/MultiStepForm";
import { Helmet } from 'react-helmet-async';

const AddCourse = () => {
    return (
        <>
            <Helmet>
                <title>Add Course - Course Haven</title>
            </Helmet>
            <MultiStepForm />
        </>
    );
};

export default AddCourse;