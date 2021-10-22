import { del, get, post, put, patch } from "../../utils/httpService";

const SERVICE_URLS = {
    getApplicationsList: (qs) => `admin/superman/application-req-admin${qs ? qs : "?page=1&limit=20&Status=false"}`,
    uploadFile: () => `admin/superman/blog-file-handle/file-upload`,
    putApplicantCVDocument: (id) => `admin/superman/application-req-admin/${id}`,
    forwardApplicantsViaEmails: (id) => `admin/superman/application-req-admin/forward`,
};

export const getApplicationsList = (qs) => get(SERVICE_URLS.getApplicationsList(qs));
export const uploadFile = (body) => post(SERVICE_URLS.uploadFile(), body);
export const putApplicantCVDocument = ({ id, body }) => patch(SERVICE_URLS.putApplicantCVDocument(id), body);
export const forwardApplicantsViaEmails = (body) => post(SERVICE_URLS.forwardApplicantsViaEmails(), body);
