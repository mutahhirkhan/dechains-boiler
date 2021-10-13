import { post, get } from "../../utils/httpService";

const SERVICE_URLS = {
    getCategories: (payload) => `/admin/superman/v1/blogs-category/list?page=1&limit=500&search=${payload}`,
    getSubCategories: (id) => `/admin/superman/v1/blogs-category/get/sub/by-category-id/${id}`,
    uploadFile: () => `/file-handle/file-upload`,
    uploadProfileImage: () => `/file-handle/signup/profile-picture`,
    postAuthor: () => `/admin/superman/blog-author`,
    getAuthors: (payload) => `/admin/superman/blog-author/?page=1&limit=500&search=${payload}`,
    getAuthorById: (id) => `admin/superman/blog-author/${id}`
};

export const getCategories = (payload = "") => get(SERVICE_URLS.getCategories(payload));
export const getSubCategories = (id) => get(SERVICE_URLS.getSubCategories(id));
export const uploadFile = (body) => post(SERVICE_URLS.uploadFile(), body);
export const uploadProfileImage = (body, params) => post(SERVICE_URLS.uploadProfileImage(), body, params);
export const postAuthorAPI = (payload) => post(SERVICE_URLS.postAuthor(), payload);
export const getAuthors = (payload = "") => get(SERVICE_URLS.getAuthors(payload));
export const getAuthorById = (id) => get(SERVICE_URLS.getAuthorById(id))