import axios, { AxiosError } from "axios";
import { StoreT } from "../../../app/store/store";
import { AuthResponseT } from "../../../features/auth/model/types/authType";


let store: StoreT | undefined;

export function injectStore(_store: StoreT): void {
    store = _store;
}
const axiosInstance = axios.create({
    baseURL: "/api",
})


axiosInstance.interceptors.request.use((config) => {
    if (!config.headers.Authorization) {
        config.headers.Authorization = `Bearer ${store?.getState().auth.accessToken ?? ''}`;
    }
    return config;
})

axiosInstance.interceptors.response.use(
    (res) => res,
    async (error: AxiosError & {config: {sent: boolean}}) => {
        const prevReq = error.config;
        if (error.response?.status === 403 && !prevReq.sent) {
            const res = await axios.get('/api/token/refresh')
            const { accessToken } = res.data as AuthResponseT;

            if (!accessToken) {
                return Promise.reject(error);
            }
            store?.dispatch({type: 'auth/setAccessToken', payload: accessToken});
            prevReq.headers.Authorization = `Bearer ${store?.getState().auth.accessToken ?? ''}`;
        }
        return Promise.reject(error);
    }
)
export default axiosInstance;
