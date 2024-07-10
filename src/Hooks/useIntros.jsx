import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useIntros = () => {

    const axiosPublic = useAxiosPublic()
    const {refetch, data: intros=[], isLoading} = useQuery({
        queryKey: ['intro'],
        queryFn: async ()=>{
            const res = await axiosPublic.get(`/intros`)
            return res.data
        }
    })
    return [refetch, intros, isLoading]
};

export default useIntros;
