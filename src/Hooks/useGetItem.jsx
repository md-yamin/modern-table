import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useGetItem = (id) => {

    const axiosPublic = useAxiosPublic()
    const {refetch, data: item=[]} = useQuery({
        queryKey: ['item'],
        queryFn: async ()=>{
            const res = await axiosPublic.get(`/item/${id}`)
            return res.data
        }
    })
    return [refetch, item]
};

export default useGetItem;
