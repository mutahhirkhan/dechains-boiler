import { post, get } from "../../utils/httpService";

const SERVICE_URLS = {
    getCategories: (payload) => `/admin/superman/v1/blogs-category/list?page=1&limit=100&search=${payload}`,
    getSubCategories: (id) => `/admin/superman/v1/blogs-category/get/sub/by-category-id/${id}`,
};
///get/sub/by-category-id/:id
// /admin/superman/v1/blogs-category/sub/list
///admin/superman/v1/blogs-category/sub/by-id/{id}

export const getCategories = (payload = "") => get(SERVICE_URLS.getCategories(payload));
export const getSubCategories = (id) => get(SERVICE_URLS.getSubCategories(id));
