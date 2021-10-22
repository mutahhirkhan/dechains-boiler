import React, { useEffect, useState } from "react";
import { jsonToQueryString } from "../../utils/helper";
import ApplicationsList from "./ApplicationsList";
import SendEmailForm from "./SendEmailForm";
import { getApplicationsList } from "./service";

const Applications = () => {
    const [applicationsList, setApplicationsList] = useState([]);
    const [queryParams, setqueryParams] = useState({ page: 1, limit: 10, Status: false });

    useEffect(() => {
        getApplications();
    }, []);



    useEffect(() => {
        console.log("applicationsList", applicationsList);
    }, [applicationsList]);

    const getApplications = async () => {
        try {
            const query = jsonToQueryString(queryParams);
            const res = await getApplicationsList(query);
            setApplicationsList(res.data);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <ApplicationsList queryParams={queryParams} setApplicationsList={setApplicationsList} applicationsList={applicationsList} isRequestedApplications={true} />
        </>
    );
};

export default Applications;
