import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://modern-table-server.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic 
};

export default useAxiosPublic;