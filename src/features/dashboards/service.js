import { get } from "../../utils/httpService";

const SERVICE_URLS = {
  getDashboardCount: (qs) => `admin/superman/v1/admin-dashboard${qs ? qs : ""}`,
  getDashboardFinanceFigures: () => `admin/superman/v1/admin-dashboard/finances`,
};

export const getDashboardCount = (qs) => get(SERVICE_URLS.getDashboardCount(qs));
export const getDashboardFinanceFigures = () => get(SERVICE_URLS.getDashboardFinanceFigures());
