import React, { useState, useEffect } from "react";
import ApplicationsList from "../applications/ApplicationsList";
import SendEmailForm from "../applications/SendEmailForm";
import { jsonToQueryString } from "../../utils/helper";
import { getApplicationsList } from "../applications/service";

const ApprovApplications = () => {
    const [applicationsList, setApplicationsList] = useState([]);
    const [queryParams, setqueryParams] = useState({ page: 1, limit: 10, Status: true });
    console.log(("QUERY STRING", jsonToQueryString(queryParams)));

    const getApplications = async () => {
        try {
            const query = jsonToQueryString(queryParams);
            const res = await getApplicationsList(query);
            console.log("RESPONSE", res);
            setApplicationsList(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getApplications();
    }, []);
    return (
        <>
            <ApplicationsList applicationsList={applicationsList} isRequestedApplications={false} />
        </>
    );
};

export default ApprovApplications;
