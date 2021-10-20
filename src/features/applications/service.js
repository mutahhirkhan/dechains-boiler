import { del, get } from "../../utils/httpService";

const SERVICE_URLS = {
    getApplicationsList: (qs) => `admin/superman/application-req-admin${qs ? qs : "?page=1&limit=20&Status=false"}`,
};

export const getApplicationsList = (qs) => get(SERVICE_URLS.getApplicationsList(qs));
