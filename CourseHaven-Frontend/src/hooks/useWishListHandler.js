import { useState } from "react";
import useAuth from "./useAuth";

const useWishListHandler = () => {
    const { user } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [isWishList, setIsWishList] = useState(true)


    const handleWishList = async (courseData) => {
        if (user) {
            try {
                const courseInfo = {
                    ...courseData
                }

                console.log(courseInfo)

            } catch (error) {
                console.log(error)
            }
        } else {
            setIsOpen(true)
        }
    }


    return { handleWishList, isOpen, setIsOpen, isWishList }

};

export default useWishListHandler;