import { post } from "../../utils/httpService";

const SERVICE_URLS = {
  signIn: () => `admin/superman/v1/admin-auth/signin`,
};

export const signIn = (payload) => post(SERVICE_URLS.signIn(), payload);
