import { del, get } from "../../utils/httpService";

const SERVICE_URLS = {
  getBlogLists: (qs) => `admin/superman/blog/list${qs ? qs : "?page=1&limit=20"}`,
  deleteBlog: (id) => `admin/superman/blog/${id}`,
};

export const getBlogLists = (qs) => get(SERVICE_URLS.getBlogLists(qs));
export const deleteBlog = (id) => del(SERVICE_URLS.deleteBlog(id));
