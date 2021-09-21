import axios from 'axios';
import { getToken, logout } from '../utils/Auth';
import Cookies from 'universal-cookie';
const cookies = new Cookies();


const BASE_URL = 'https://develop-backend.jobsmideast.com/';

// Add a request interceptor
let axiosInstance = axios.create({
    baseURL: `${BASE_URL}`
});

// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
    console.log("CURRENT COOKIES",cookies)
    let token = cookies.get('TOKEN');
    console.log("BAREER BEFORE TOKEN" ,token)
    if (token) {
        config.headers.Authorization = "Bearer " + token;
        console.log("BAREER")
        // if (config.method !== 'OPTIONS') {
        // }
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
