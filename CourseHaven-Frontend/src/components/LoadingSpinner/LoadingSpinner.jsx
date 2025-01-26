import { ImSpinner9 } from "react-icons/im";

const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <ImSpinner9 className="m-auto animate-spin" />
        </div>
    );
};

export default LoadingSpinner;