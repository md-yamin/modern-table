import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useNews = () => {

    const axiosPublic = useAxiosPublic()
    const {refetch, data: news=[]} = useQuery({
        queryKey: ['new'],
        queryFn: async ()=>{
            const res = await axiosPublic.get(`/news`)
            return res.data
        }
    })
    return [refetch, news]
};

export default useNews;
