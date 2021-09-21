import axiosInstance from '../utils/AuthInterceptor'

const Api = {
    signIn: (payload)=>{
        return axiosInstance.post('admin/superman/v1/admin-auth/signin', payload)
    }
};

export default Api
