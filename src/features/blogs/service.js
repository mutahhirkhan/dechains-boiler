import { del, get } from "../../utils/httpService";

const SERVICE_URLS = {
    getBlogLists: (qs) => `admin/superman/blog/list${qs ? qs : "?page=1&limit=20"}`,
    deleteBlog: () => `admin/superman/blog`,
};

export const getBlogLists = (qs) => get(SERVICE_URLS.getBlogLists(qs));
export const deleteBlog = (body) => del(SERVICE_URLS.deleteBlog(), body);
