import axios from 'axios';

const axiosPublic = axios.create({
    baseURL: 'https://course-haven-backend.vercel.app'

})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;