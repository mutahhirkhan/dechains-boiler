import axios from 'axios';
import { getToken, logout } from '../utils/Auth';


const BASE_URL = 'https://develop-backend.jobsmideast.com/';

// Add a request interceptor
let axiosInstance = axios.create({
    baseURL: `${BASE_URL}`
});

// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
    let token = getToken();
    if (token) {
        if (config.method !== 'OPTIONS') {
            config.headers.authorization = "Bearer " + token;
        }
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (error) {
    if (error.response) {
        if(error.response.status === 401) {
            logout();
        }
    }

    // Do something with response error
    return Promise.reject(error);
});

export default axiosInstance;
