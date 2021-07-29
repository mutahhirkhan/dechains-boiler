import React from "react";
import UserStatus from "../../app-ui/userStatus/UserStatus";
import Buttons from "../../shared-ui/Button/Buttons";
const Dashboard = () => {
  return (
    <>
      <div className="header-div">
        <div className="date">1/1/21</div>
        <div className="date">1/1/21</div>
        <Buttons></Buttons>
      </div>
      <UserStatus
        header={"Paying Customers"}
        tital1="Job seekers "
        tital2="Employer "
        tital3="Agencies "
      />
      <UserStatus
        header={"Account Types"}
        tital1="Employer HQ"
        tital2="Employer branches"
        tital3="Agencies HQ"
      />
      <UserStatus
        header={"HQ and Branches registered"}
        tital1="Job seekers signed"
        tital2="Employer signed"
        tital3="Agencies signed"
      />
      <UserStatus
        header={"Job Status"}
        tital1="Job seekers signed"
        tital2="Employer signed"
        tital3="Agencies signed"
      />
      <UserStatus
        header={"Data"}
        tital1="Job seekers signed"
        tital2="Employer signed"
        tital3="Agencies signed"
      />
    </>
  );
};

export default Dashboard;
