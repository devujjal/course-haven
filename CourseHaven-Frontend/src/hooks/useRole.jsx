import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {

    const { user, isLoading } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: userRole = {} } = useQuery({
        queryKey: ['user-role', user?.email],
        enabled: !isLoading && !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/${user?.email}`);
            return res.data;
        }
    })


    return { userRole }
};

export default useRole;