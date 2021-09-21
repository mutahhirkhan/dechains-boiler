import axiosInstance from '../utils/AuthInterceptor'

const Api = {
    getDashboardCount: ()=>{
        return axiosInstance.get('admin/superman/v1/admin-dashboard')
    }
};

export default Api
