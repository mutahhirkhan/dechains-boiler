import React, { useEffect } from "react";
import UserStatus from "../../app-ui/userStatus/UserStatus";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  getDashboardCountAdmin,
  getDashboardFinanceFiguresAdmin,
} from "./thunk";
import { selectDashboardCount, selectDashboardFinanceCount } from "./slice";
import DateApplyForm from "./DateApplyForm";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const dashboardCount = useAppSelector(selectDashboardCount);
  const dashboardFinanceCount = useAppSelector(selectDashboardFinanceCount);

  useEffect(() => {
    console.log("CDM DASHBOARD")
    dispatch(getDashboardCountAdmin());
    dispatch(getDashboardFinanceFiguresAdmin());
  }, []);

  const valueModifiedHandler = (title, value) => {
    return {
      name: title,
      value,
    };
  };

  const {
    accountType,
    hqAndBranchReg,
    jobStats,
    payingCustomers,
    registers,
    todayRegisters,
  } = dashboardCount;

  return (
    <>
      {/* <div className="header-div">
        <div className="date">1/1/21</div>
        <div className="date">1/1/21</div>
        <Buttons></Buttons>
      </div> */}

      <div className="header-div">
        <DateApplyForm />
      </div>
      <UserStatus
        header={"Account Types"}
        heading1={valueModifiedHandler(
          "Agency branch",
          accountType?.agencyBranches
        )}
        heading2={valueModifiedHandler("Agency HQ", accountType?.agencyHQ)}
        heading3={valueModifiedHandler(
          "Employer branches",
          accountType?.employerBranches
        )}
        heading4={valueModifiedHandler("Employer HQ", accountType?.employerHQ)}
        total={accountType?.total}
      />
      <UserStatus
        header={"HQ and branch registered"}
        heading1={valueModifiedHandler(
          "Agency branch",
          hqAndBranchReg?.agencyBranches
        )}
        heading2={valueModifiedHandler("Agency HQ", hqAndBranchReg?.agencyHQ)}
        heading3={valueModifiedHandler(
          "Employer branches",
          hqAndBranchReg?.employerBranches
        )}
        heading4={valueModifiedHandler(
          "Employer HQ",
          hqAndBranchReg?.employerHQ
        )}
        total={hqAndBranchReg?.total}
      />
      <UserStatus
        header={"Job Stats"}
        heading1={valueModifiedHandler("Active jobs", jobStats?.activeJobs)}
        heading2={valueModifiedHandler("Expired jobs", jobStats?.expiredJobs)}
        heading3={valueModifiedHandler(
          "Posted by agency",
          jobStats?.postedByAgency
        )}
        heading4={valueModifiedHandler(
          "Posted by employer",
          jobStats?.postedByEmployer
        )}
        total={jobStats?.total}
      />
      <UserStatus
        header={"Paying Customers"}
        heading1={valueModifiedHandler("Agency", payingCustomers?.agencie)}
        heading2={valueModifiedHandler("Employer", payingCustomers?.employer)}
        heading3={valueModifiedHandler("Jobseeker", payingCustomers?.jobseeker)}
        total={payingCustomers?.total}
      />
      <UserStatus
        header={"Registers"}
        heading1={valueModifiedHandler(
          "Agency Signed",
          registers?.agencieSigned
        )}
        heading2={valueModifiedHandler(
          "Employer Signed",
          registers?.employerSigned
        )}
        heading3={valueModifiedHandler(
          "Job-seeker Signed",
          registers?.jobseekerSigned
        )}
        total={registers?.total}
      />
      <UserStatus
        header={"Today registers"}
        heading1={valueModifiedHandler(
          "Agency Register",
          todayRegisters?.agencieRegister
        )}
        heading2={valueModifiedHandler(
          "Employer Register",
          todayRegisters?.employerRegister
        )}
        heading3={valueModifiedHandler(
          "Job-seeker Register",
          todayRegisters?.jobseekerRegister
        )}
        total={todayRegisters?.total}
      />
      {dashboardFinanceCount && (
        <UserStatus
          header={"Finances"}
          heading1={valueModifiedHandler(
            "Today's profits from job seekers",
            `£ ${dashboardFinanceCount?.todayProfitsJobseeker}`
          )}
          heading2={valueModifiedHandler(
            "Today's profits from companies",
            `£ ${dashboardFinanceCount?.todayProfitsEmployer}`
          )}
          heading3={valueModifiedHandler(
            "Today's profits from agencies",
            `£ ${dashboardFinanceCount?.todayProfitsAgency}`
          )}
          heading4={valueModifiedHandler(
            "Refunds this month",
            `£ ${dashboardFinanceCount?.refund}`
          )}
          heading5={valueModifiedHandler(
            "Profits this month total",
            `£ ${dashboardFinanceCount?.totalProfits}`
          )}
          total={`£ ${dashboardFinanceCount?.TotalInBank}`} //total in bank
        />
      )}
    </>
  );
};

export default Dashboard;
