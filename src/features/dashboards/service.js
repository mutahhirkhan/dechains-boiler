import { get } from "../../utils/httpService";

const SERVICE_URLS = {
  getDashboardCount: (qs) => `admin/superman/v1/admin-dashboard${qs ? qs : ""}`,
  getDashboardFinanceFigures: (qs) => `admin/superman/v1/admin-dashboard/finances${qs ? qs : ""}`,
};

export const getDashboardCount = (qs) => get(SERVICE_URLS.getDashboardCount(qs));
export const getDashboardFinanceFigures = (qs) => get(SERVICE_URLS.getDashboardFinanceFigures(qs));
