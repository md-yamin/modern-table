import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useChefs = () => {

    const axiosPublic = useAxiosPublic()
    const {refetch, data: chefs=[]} = useQuery({
        queryKey: ['chef'],
        queryFn: async ()=>{
            const res = await axiosPublic.get(`/chefs`)
            return res.data
        }
    })
    return [refetch, chefs]
};

export default useChefs;
