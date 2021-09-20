import React from "react";
import UserStatus from "../../Components/userStatus/UserStatus";
import Buttons from "../../Components/Button/Buttons";
import { getDashboardCount } from "../Auth/thunk";
import { useAppDispatch } from "../../_store/hooks";
const Dashboard = () => {
  const dispatch = useAppDispatch();
  const handleCLick = () => {
      console.log("CLICKED")
      dispatch(getDashboardCount())
  };

  const userStatus = [
    {
      header: "Paying Customers",
      title1: "EMPLOYER",
      title2: "AGENCY",
      title3: "JOB SEEKER",
    },
    {
      header: "Paying Customers 1",
      title1: "EMPLOYER 1",
      title2: "AGENCY 1",
      title3: "JOB SEEKER 1",
    },
    {
      header: "Paying Customers 2",
      title1: "EMPLOYER 2",
      title2: "AGENCY 2",
      title3: "JOB SEEKER 2",
    },
    {
      header: "Paying Customers 3",
      title1: "EMPLOYER 3",
      title2: "AGENCY 3",
      title3: "JOB SEEKER 3",
    },
  ];
  return (
    <>
      <div className="header-div">
        <div className="date">1/1/21</div>
        <div className="date">1/1/21</div>
        <Buttons onClick={handleCLick} />
      </div>
      {userStatus.map((el) => (
        <>
          <UserStatus
            header={el.header}
            title1={el.title1}
            title2={el.title2}
            title3={el.title3}
          />
        </>
      ))}
      <UserStatus
        header={"Paying Customers"}
        title1="Job seekers "
        title2="Employer "
        title3="Agencies "
      />
      <UserStatus
        header={"Account Types"}
        title1="Employer HQ"
        title2="Employer branches"
        title3="Agencies HQ"
      />
      <UserStatus
        header={"HQ and Branches registered"}
        title1="Job seekers signed"
        title2="Employer signed"
        title3="Agencies signed"
      />
      <UserStatus
        header={"Job Status"}
        title1="Job seekers signed"
        title2="Employer signed"
        title3="Agencies signed"
      />
      <UserStatus
        header={"Data"}
        title1="Job seekers signed"
        title2="Employer signed"
        title3="Agencies signed"
      />
      <UserStatus
        header={"Data"}
        title1="Job seekers signed"
        title2="Employer signed"
        title3="Agencies signed"
      />
      <UserStatus
        header={"Data"}
        title1="Job seekers signed"
        title2="Employer signed"
        title3="Agencies signed"
      />
      <UserStatus
        header={"Data"}
        title1="Job seekers signed"
        title2="Employer signed"
        title3="Agencies signed"
      />
    </>
  );
};

export default Dashboard;
