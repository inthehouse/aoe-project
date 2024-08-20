import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'www.development-server.com';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

// if/when jwt token exists
axiosInstance.interceptors.request.use(
    function (config) {
        const jwt = localStorage.getItem('jwtToken');
        if (jwt) {
            config.headers["Authorization"] = `Bearer ${jwt}`;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    function (response: AxiosResponse) {
        return response;
    },
    function (error: AxiosError) {
        console.error('HTTP error:', error.message);
        return Promise.reject(error);
    }
);

export const http = {
    get: (url: string, config?: AxiosRequestConfig) => axiosInstance.get(url, config),
    post: (url: string, data?: any, config?: AxiosRequestConfig) => axiosInstance.post(url, data, config),
    put: (url: string, data?: any, config?: AxiosRequestConfig) => axiosInstance.put(url, data, config),
    delete: (url: string, config?: AxiosRequestConfig) => axiosInstance.delete(url, config),
};


export default axiosInstance;
