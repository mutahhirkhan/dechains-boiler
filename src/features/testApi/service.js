import { post, get, put, del } from "../../utils/httpService";

const SERVICE_URLS = {
  getTasks: () => `/task`,
};
export const getTasks = () => get(SERVICE_URLS.getTasks());
