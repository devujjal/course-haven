import { useState } from "react";
import { FaUser, FaCalendarAlt, FaPhone, FaEnvelope, FaVenusMars } from "react-icons/fa";

const MultiStepForm = () => {
    const [step, setStep] = useState(1);


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target); // Creates a FormData object
        const data = Object.fromEntries(formData.entries()); // Converts FormData to a plain object

        console.log(data);
    };


    const handleNext = () => {
        setStep(step + 1);
    };

    const handlePrevious = () => {
        setStep(step - 1);
    };




    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="w-full max-w-2xl p-8 bg-gray-800 rounded-lg shadow-lg">
                {/* Progress Indicator */}
                <div className="flex justify-between mb-8">
                    {[1, 2, 3, 4].map((s) => (
                        <div
                            key={s}
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${step === s ? "bg-blue-500" : "bg-gray-700"
                                }`}
                        >
                            {s}
                        </div>
                    ))}
                </div>

                {/* Form Steps */}
                <form onSubmit={handleSubmit}>
                    {step === 1 && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
                            <div className="flex items-center space-x-4">
                                <FaUser className="text-gray-400" />
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Full Name *"

                                    className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div className="flex items-center space-x-4">
                                <FaEnvelope className="text-gray-400" />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address *"

                                    className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div className="flex items-center space-x-4">
                                <FaPhone className="text-gray-400" />
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="Phone Number *"

                                    className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div className="flex items-center space-x-4">
                                <FaCalendarAlt className="text-gray-400" />
                                <input
                                    type="date"
                                    name="dateOfBirth"
                                    placeholder="Date of Birth *"

                                    className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div className="flex items-center space-x-4">
                                <FaVenusMars className="text-gray-400" />
                                <select
                                    name="gender"

                                    className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                >
                                    <option value="">Select Gender *</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Trip Information</h2>
                            {/* Add fields for Trip Information */}
                        </div>
                    )}

                    {step === 3 && (
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Coverage Options</h2>
                            {/* Add fields for Coverage Options */}
                        </div>
                    )}

                    {step === 4 && (
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
                            {/* Add fields for Additional Information */}
                        </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-8">
                        {step > 1 && (
                            <button
                                type="button"
                                onClick={handlePrevious}
                                className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600"
                            >
                                Previous
                            </button>
                        )}
                        {step < 4 ? (
                            <button
                                type="button"
                                onClick={handleNext}
                                className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
                            >
                                Next
                            </button>
                        ) : (
                            <button
                                type="submit"
                                className="px-4 py-2 bg-green-500 rounded hover:bg-green-600"
                            >
                                Submit
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MultiStepForm;