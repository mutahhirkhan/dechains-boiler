import React, { useState, useEffect } from "react";
import ApplicationsList from "../applications/ApplicationsList";
import SendEmailForm from "../applications/SendEmailForm";
import { jsonToQueryString } from "../../utils/helper";
import { getApplicationsList } from "../applications/service";

const ApprovApplications = () => {
    const [selectedApplications, setSelectedApplications] = useState([]);
    const [queryParams, setqueryParams] = useState({ page: 1, limit: 10, Status: false });
    console.log(("QUERY STRING", jsonToQueryString(queryParams)));

    const getApplications = async () => {
        try {
            const query = jsonToQueryString(queryParams);
            const res = await getApplicationsList(query);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getApplications();
    }, []);
    return (
        <>
            {selectedApplications.length > 0 && (
                <div className="send-email-div">
                    <SendEmailForm selectedApplications={selectedApplications} />
                </div>
            )}
            <ApplicationsList
                selectedApplications={selectedApplications}
                setSelectedApplications={setSelectedApplications}
                isRequestedApplications={false}
            />
        </>
    );
};

export default ApprovApplications;
