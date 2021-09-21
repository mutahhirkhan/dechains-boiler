import React, { useEffect } from "react";
import { connect } from "react-redux";
import UserStatus from "../../Components/userStatus/UserStatus";
import Buttons from "../../Components/Button/Buttons";
import {
  getDashboardCount,
  selectDashboardCount,
} from "../../redux/slice/dashboardSlice";
import { useAppSelector } from "../../redux/store/Store";
const Dashboard = ({ getDashboardData }) => {
  const dashboardCount = useAppSelector(selectDashboardCount);
  console.log("dashboardCount", dashboardCount);

  useEffect(() => {
    getDashboardData();
  }, []);

  const valueModifiedHanlder = (title , value) => {
    return {
      name : title,
      value
    }
  }
valueModifiedHanlder("jobSeekerSigned", dashboardCount?.registers?.jobseekerSigned)

  return (
    <>
      <div className="header-div">
        <div className="date">1/1/21</div>
        <div className="date">1/1/21</div>
        <Buttons/>
      </div>
      <UserStatus
        header={"Account Types"}
        heading1 = {valueModifiedHanlder("Agency branch", dashboardCount?.accountType?.agencyBranches)}
        heading2 = {valueModifiedHanlder("Agency HQ", dashboardCount?.accountType?.agencyHQ)}
        heading3 = {valueModifiedHanlder("Employer branches", dashboardCount?.accountType?.employerBranches)}
        heading4 = {valueModifiedHanlder("Employer HQ", dashboardCount?.accountType?.employerHQ)}
        total = {dashboardCount?.accountType?.total}
      />
       <UserStatus
        header={"HQ and branch registered"}
        heading1 = {valueModifiedHanlder("Agency branch", dashboardCount?.hqAndBranchReg?.agencyBranches)}
        heading2 = {valueModifiedHanlder("Agency HQ", dashboardCount?.hqAndBranchReg?.agencyHQ)}
        heading3 = {valueModifiedHanlder("Employer branches", dashboardCount?.hqAndBranchReg?.employerBranches)}
        heading4 = {valueModifiedHanlder("Employer HQ", dashboardCount?.hqAndBranchReg?.employerHQ)}
        total = {dashboardCount?.accountType?.total}

      />
      <UserStatus
        header={"Job Stats"}
        heading1 = {valueModifiedHanlder("Active jobs", dashboardCount?.jobStats?.activeJobs)}
        heading2 = {valueModifiedHanlder("Expired jobs", dashboardCount?.jobStats?.expiredJobs)}
        heading3 = {valueModifiedHanlder("Posted by agency", dashboardCount?.jobStats?.postedByAgency)}
        heading4 = {valueModifiedHanlder("Posted by employer", dashboardCount?.jobStats?.postedByEmployer)}
        total = {dashboardCount?.accountType?.total}

      />
      <UserStatus
        header={"Paying Customers"}
        heading1 = {valueModifiedHanlder("Agency", dashboardCount?.payingCustomers?.agencie)}
        heading2 = {valueModifiedHanlder("Employer", dashboardCount?.payingCustomers?.employer)}
        heading3 = {valueModifiedHanlder("Jobseeker", dashboardCount?.payingCustomers?.jobseeker)}
        total = {dashboardCount?.accountType?.total}

      />
      <UserStatus
        header={"Registers"}
        heading1 = {valueModifiedHanlder("Agency Signed", dashboardCount?.registers?.agencieSigned)}
        heading2 = {valueModifiedHanlder("Employer Signed", dashboardCount?.registers?.employerSigned)}
        heading3 = {valueModifiedHanlder("Job-seeker Signed", dashboardCount?.registers?.jobseekerSigned)}
        total = {dashboardCount?.accountType?.total}

      />
      <UserStatus
        header={"Today registers"}
        heading1 = {valueModifiedHanlder("Agency Register", dashboardCount?.todayRegisters?.agencieRegister)}
        heading2 = {valueModifiedHanlder("Employer Register", dashboardCount?.todayRegisters?.employerRegister)}
        heading3 = {valueModifiedHanlder("Job-seeker Register", dashboardCount?.todayRegisters?.jobseekerRegister)}
        total = {dashboardCount?.accountType?.total}

      />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getDashboardData: () => dispatch(getDashboardCount()),
});

export default connect(null, mapDispatchToProps)(Dashboard);
