
import { useState } from "react";
import toast from 'react-hot-toast';
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Tooltip } from "react-tooltip";

const imgbb_API = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API}`;

const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const axiosPublic = useAxiosPublic();
    const [isUploading, setIsUploading] = useState(false);
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


    const handleImage = async (img) => {
        // if (isUploading) {
        //     toast.error("Please wait, image is already being uploaded.");
        //     return;
        // }

        setIsUploading(true);

        // Validate file type and size
        const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
        const maxSize = 5 * 1024 * 1024; // 5MB

        if (!allowedTypes.includes(img.type)) {
            toast.error("Only JPEG, PNG, and GIF images are allowed.");
            setIsUploading(false);
            return;
        }

        if (img.size > maxSize) {
            toast.error("Image size must be less than 5MB.");
            setIsUploading(false);
            return;
        }

        try {
            // Create FormData object
            const data = new FormData();
            data.append("image", img);

            // Upload image to ImgBB
            const res = await axiosPublic.post(imgbb_API, data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            // Check if the upload was successful
            if (res.data.success) {
                // Save the image URL to formData
                setFormData({ ...formData, image: res.data.data.display_url });
                toast.success("Image uploaded successfully!");
                setIsUploading(false);
            } else {
                toast.error("Failed to upload image. Please try again.");
            }
        } catch (error) {
            console.error("Image upload error:", error);
            toast.error(error.message || "An error occurred while uploading the image.");
        } finally {
            setIsUploading(false);
        }
    };

   

    const handelCurriculum = (e) => {
        const textOne = e.target.value;

        const textArray = textOne.split(',').map(item => item.trim());
        setFormData({ ...formData, curriculum: textArray })
        // console.log(textArray)

    }

    const handleNext = () => {
        // (validateStep(step) === false)
        if (!validateStep(step)) {
            toast.error('Please fill out all required fields.');
            return;
        }

        setStep(step + 1);
    };

    const handlePrevious = () => {
        setStep(step - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Course Data Submitted:", formData);
    };




    return (
        <div className="min-h-screen flex items-center py-10 justify-center bg-gray-900 text-white">
            <div className="w-full max-w-2xl p-8 bg-gray-800 rounded-lg shadow-lg">
                {/* Progress Indicator */}
                <div className="flex justify-between mb-8">
                    {[1, 2, 3, 4].map((s) => (
                        <div
                            key={s}
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${step === s ? "bg-[#066ac9]" : "bg-gray-700"
                                }`}
                        >
                            {s}
                        </div>
                    ))}
                </div>
                <form
                >
                    <textarea
                        name="curriculum"
                        placeholder="Curriculum *"
                        className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <button type="submit">Add</button>
                </form>

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
                                onChange={(e) => handleImage(e.target.files[0])}
                                className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            {formData.image && (
                                <div className="mt-4">
                                    <img
                                        src={formData.image}
                                        alt="Course Thumbnail"
                                        className="w-30 h-24 object-cover rounded"
                                    />
                                </div>
                            )}
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

                            <div>
                                <input
                                    type="date"
                                    name="deadline"
                                    placeholder="Deadline"
                                    value={formData.deadline}
                                    onChange={handleChange}
                                    className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    data-tooltip-id="deadline-tooltip" // Required: Unique ID for the tooltip
                                    data-tooltip-content="Select the deadline" // Tooltip text
                                />
                                <Tooltip id="deadline-tooltip" />
                            </div>

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
                                onChange={handelCurriculum}
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
                            <div>
                                <input
                                    type="date"
                                    name="lastUpdated"
                                    placeholder="Last Updated *"
                                    value={formData.lastUpdated}
                                    onChange={handleChange}
                                    className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                    data-tooltip-id="deadline-tooltip"
                                    data-tooltip-content="Select the Last Updated Date"
                                />
                                <Tooltip id="deadline-tooltip" />
                            </div>
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
                                disabled={isUploading}
                                type="button"
                                onClick={handleNext}
                                className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
                            >
                                {isUploading ? 'Wait a sec' : 'Next'}
                            </button>
                        ) : (
                            <button
                                type="submit"
                                className="px-4 py-2 bg-[#066ac9] rounded hover:bg-green-600"
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