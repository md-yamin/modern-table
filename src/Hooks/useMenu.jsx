import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useMeals = () => {

    const axiosPublic = useAxiosPublic()
    const {refetch, data: meals=[]} = useQuery({
        queryKey: ['meal'],
        queryFn: async ()=>{
            const res = await axiosPublic.get(`/meals`)
            return res.data
        }
    })
    return [refetch, meals]
};

export default useMeals;
