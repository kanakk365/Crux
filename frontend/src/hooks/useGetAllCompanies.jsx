import { COMPANY_API_ENDPOINT } from '@/components/utils/constants'
import { setAllCompanies } from '@/store/Slice/companySlice'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetAllCompanies = () => {
    const dispatch = useDispatch();
    console.log("i")
    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const res = await axios.get(`${COMPANY_API_ENDPOINT}/get`, { withCredentials: true });
                if (res.data.success) {
                    dispatch(setAllCompanies(res.data.companies));
                }
            } catch (error) {
                console.error(error);
            }
        };

        console.log("Fetching companies...");
        fetchCompanies();
    }, []);

    return null;
}

export default useGetAllCompanies