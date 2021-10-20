import React from "react";
import ApplicationsList from "./ApplicationsList";
import SendEmailForm from "./SendEmailForm";

const Applications = () => {
    return (
        <>
            <ApplicationsList isRequestedApplications={true} />
        </>
    );
};

export default Applications;
