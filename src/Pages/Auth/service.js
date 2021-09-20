// import { jsonToQueryString } from "../../utils/helper";
import { get, post, put, del } from "../../utils/httpService";

const SERVICE_URLS = {
  getDashboardCount : () => `admin/superman/v1/admin-dashboard`
};

// Moving from EMPLOYER
// export const addTeamMember = (body) => post(SERVICE_URLS.addTeamMember(), body);
// export const getTeamNotes = (id) => get(SERVICE_URLS.getTeamNotes(id));
export const getDashboardCount = () => get(SERVICE_URLS.getDashboardCount());