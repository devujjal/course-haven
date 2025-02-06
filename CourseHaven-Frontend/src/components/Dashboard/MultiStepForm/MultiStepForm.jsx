
// const handleSubmit = (e) => {
//     e.preventDefault();
//     const form = new FormData(e.currentTarget);
//     const title = form.get('title');
//     const rating = form.get('rating');
//     const totalReviewNumber = form.get('totalReviewNumber');
//     const enrolled = form.get('enrolled');
//     const level = form.get('level');
//     const lastUpdated = form.get('lastUpdated');
//     const language = form.get('language');
//     const price = form.get('price');
//     const category = form.get('category');
//     const courseDescription = form.get('courseDescription');
//     const curriculum = form.get('curriculum');
//     const lectures = form.get('lectures');
//     const duration = form.get('duration');
//     const skills = form.get('skills');
//     const deadline = form.get('deadline');
//     const certificate = form.get('certificate') === 'on';
//     const finalEndingDescription = form.get('finalEndingDescription');
//     const image = form.get('image');
//     const introDes = form.get('introDes')

//     console.log({
//         title,
//         rating,
//         totalReviewNumber,
//         enrolled,
//         level,
//         lastUpdated,
//         language,
//         price,
//         category,
//         courseDescription,
//         curriculum,
//         lectures,
//         duration,
//         skills,
//         deadline,
//         certificate,
//         finalEndingDescription,
//         image,
//         introDes
//     })
// };

import { useState } from "react";

const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        // Step 1
        title: "",
        category: "",
        level: "",
        language: "",
        price: "",
        image: "",
        // Step 2
        courseDescription: "",
        introDescription: "",
        finalEndingDescription: "",
        skills: "",
        deadline: "",
        certificate: false,
        // Step 3
        curriculum: "",
        lectures: "",
        duration: "",
        lastUpdated: "",
        // Step 4
        rating: "",
        totalReviewNumber: "",
        enrolled: "",
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleNext = () => {
        setStep(step + 1);
    };

    const handlePrevious = () => {
        setStep(step - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Course Data Submitted:", formData);
        alert("Course added successfully!");
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
                            <h2 className="text-2xl font-bold mb-4">Basic Course Information</h2>
                            <input
                                type="text"
                                name="title"
                                placeholder="Title *"
                                value={formData.title}
                                onChange={handleChange}
                                className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <input
                                type="text"
                                name="category"
                                placeholder="Category *"
                                value={formData.category}
                                onChange={handleChange}
                                className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <input
                                type="text"
                                name="level"
                                placeholder="Level *"
                                value={formData.level}
                                onChange={handleChange}
                                className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <input
                                type="text"
                                name="language"
                                placeholder="Language *"
                                value={formData.language}
                                onChange={handleChange}
                                className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <input
                                type="number"
                                name="price"
                                placeholder="Price *"
                                value={formData.price}
                                onChange={handleChange}
                                className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <input
                                type="file"
                                name="image"
                                onChange={handleChange}
                                className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                    )}

                    {step === 2 && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold mb-4">Course Description and Details</h2>
                            <textarea
                                name="courseDescription"
                                placeholder="Course Description *"
                                value={formData.courseDescription}
                                onChange={handleChange}
                                className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <textarea
                                name="introDescription"
                                placeholder="Introduction Description *"
                                value={formData.introDescription}
                                onChange={handleChange}
                                className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <textarea
                                name="finalEndingDescription"
                                placeholder="Final Ending Description"
                                value={formData.finalEndingDescription}
                                onChange={handleChange}
                                className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="text"
                                name="skills"
                                placeholder="Skills *"
                                value={formData.skills}
                                onChange={handleChange}
                                className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <input
                                type="date"
                                name="deadline"
                                placeholder="Deadline"
                                value={formData.deadline}
                                onChange={handleChange}
                                className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    name="certificate"
                                    checked={formData.certificate}
                                    onChange={handleChange}
                                    className="form-checkbox h-5 w-5 text-blue-500"
                                />
                                <span>Certificate Available</span>
                            </label>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold mb-4">Curriculum and Content</h2>
                            <textarea
                                name="curriculum"
                                placeholder="Curriculum *"
                                value={formData.curriculum}
                                onChange={handleChange}
                                className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <input
                                type="number"
                                name="lectures"
                                placeholder="Number of Lectures *"
                                value={formData.lectures}
                                onChange={handleChange}
                                className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <input
                                type="text"
                                name="duration"
                                placeholder="Duration *"
                                value={formData.duration}
                                onChange={handleChange}
                                className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <input
                                type="date"
                                name="lastUpdated"
                                placeholder="Last Updated *"
                                value={formData.lastUpdated}
                                onChange={handleChange}
                                className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                    )}

                    {step === 4 && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
                            <input
                                type="number"
                                name="rating"
                                placeholder="Rating"
                                value={formData.rating}
                                onChange={handleChange}
                                className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="number"
                                name="totalReviewNumber"
                                placeholder="Total Review Number"
                                value={formData.totalReviewNumber}
                                onChange={handleChange}
                                className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="number"
                                name="enrolled"
                                placeholder="Enrolled"
                                value={formData.enrolled}
                                onChange={handleChange}
                                className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
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