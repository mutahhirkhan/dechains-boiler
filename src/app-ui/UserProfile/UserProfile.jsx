import React, { useState } from "react";
import { Dropdown, Menu, Popover } from "antd";
import Button from "../../shared-ui/Button/Buttons";
import { PlusOutlined } from "@ant-design/icons";
import Modal from "../../shared-ui/Modal/Modal";

const UserProfile = () => {
  const [visible, setVisible] = useState(false);
  const [connectModal, setConnectModal] = useState(false);
  const [profileOption, setProfileOption] = useState(false);
  const handleVisibleChange = (flag) => {
    setVisible(flag);
  };
  const handleConnect = () => {
    setConnectModal(true);
  };
  const HandleProfileOption = () => {
    setProfileOption(true);
  };
  return (
    <div className="user-profile-wrapper">
      {/* <div className="hide-perofile-header">
            {showProfile && !profileOption ? (
              <img
                className="back-icon"
                onClick={handleProfile}
                src={require("../../assets/images/icons/Back.svg")}
                alt=""
              />
            ) : showProfile && profileOption ? (
              <img
                className="back-icon"
                onClick={HandleProfileOption}
                src={require("../../assets/images/icons/Back.svg")}
                alt=""
              />
            ) : (
              ""
            )}
            {profileOption ? (
              ""
            ) : (
              <Button
                onClick={HandleProfileOption}
                className="profile-option outlined">
                Profile Option
              </Button>
            )}
          </div> */}

      {/* profile section */}
      <div className="profile-section">
        <div id="cv-container" className="cv-container">
          {/* <Spin spinning={jobseekerProfileByIdIsLoading}> */}
          {/* {console.log("coming id ->".profileDetails)}
          {console.log("current id ->", jobseekerProfileById?.userId)} */}
          <div className="profile-header">
            <img
              className="tag"
              // src={require("../../assets/images/auth/group-path-32.svg")}
              alt=""
            />
            <div className="profile-video-section">
              <img
                className="profile-img"
                // src={jobseekerProfileById?.profilePhoto || defaultImage}
                alt="profile-img"
              />
            </div>
            <div className="user-option">
              <div className="details">
                <span className="user-name">
                  <h1>{/* {jobseekerProfileById?.user?.firstName} */}</h1>
                  <p>ID-</p>
                  <p>{/* {jobseekerProfileById?.userId} */}</p>
                </span>
                <p className="job-title">
                  {/* {jobseekerProfileById?.jobTitle?.title} */}
                  <span style={{ fontSize: "12px", color: "#7ed957" }}>
                    {/* {jobseekerProfileById?.user?.experience?.isActive
                      ? "Available for work"
                      : null} */}
                    {" Available for work"}
                  </span>
                  <span style={{ fontSize: "12px", color: "#e53262" }}>
                    {/* {!jobseekerProfileById?.user?.experience?.isActive
                      ? "Unavailable for work"
                      : null}{"Unavailable for work "} */}
                  </span>
                </p>
                <span className="user-location">
                  <p>Current location :</p>
                  <p>{/* {jobseekerProfileById?.city?.title} */}</p>
                </span>
              </div>
              <div className="option">
                <span>
                  <Dropdown
                    // overlay={additionalInfo(
                    //   profile,
                    //   countries,
                    //   findTitleById,
                    //   jobseekerProfileById
                    // )}
                    // getPopupContainer={(trigger) => trigger.parentNode}
                    overlayClassName={"additionalInfo-menu"}
                    placement="bottomCenter"
                    // onVisibleChange={handleVisibleChange}
                    visible={visible}
                    trigger={["click"]}>
                    <Button
                      themeColor="rounded-outlined"
                      className="primary outlined">
                      <PlusOutlined />
                    </Button>
                  </Dropdown>

                  <Popover
                    placement="bottom"
                    overlayClassName="popover-location"
                    content={<span>Applied</span>}>
                    <img
                      className="icon-btn ml-1"
                      // src={require("../../assets/images/icons/Previously_applied.svg")}
                    />
                  </Popover>

                  <Popover
                    placement="bottom"
                    overlayClassName="popover-mobile-number"
                    content={
                      <span>
                        {/* {jobseekerProfileById?.mobile} */}
                        <img
                          //   onClick={() => {
                          //     navigator.clipboard.writeText(
                          //       jobseekerProfileById?.mobile
                          //     );
                          //     showSuccessMessage("Number copied to clipboard");
                          //   }}
                          style={{ width: "10px", paddingLeft: "2px" }}
                          //   src={require("../../assets/images/icons/Copy.svg")}
                        />{" "}
                        <span style={{ fontSize: "12px" }}>Copy</span>
                      </span>
                    }>
                    <img
                      className="icon-btn ml-1"
                      //   src={require("../../assets/images/icons/Call.svg")}
                    />
                  </Popover>

                  {/* {jobseekerProfileById?.mobile || showConnectedBtn ? (
                    <span onClick={initiateChat(jobseekerProfileById?.userId)}>
                      <img
                        className="chat"
                        //   src={require("../../assets/images/icons/directchat-icon.svg")}
                      />
                    </span>
                  ) : (
                    ""
                  )} */}
                </span>
                <span className="w-100">
                  <Button themeColor="light">Connect</Button>

                  <Button
                    // onClick={HandleProfileOption}
                    className="profile-option light ml-auto">
                    Profile Option
                  </Button>
                  <Modal
                    backdropClassName="connect-modal-backdrop"
                    className="center connect-modal"
                    show={connectModal}>
                    <Button className="rounded shadowed">
                      <img
                        className="connect-icon"
                        //   src={require("../../assets/images/icons/Connect.svg")}
                      />
                    </Button>
                    <div className="title">Connect with candidate</div>
                    <div className="subtitle">
                      Use 1 credit to connect with this candidate.
                    </div>
                    <div className="btn-row">
                      <Button
                        onClick={() => setConnectModal(false)}
                        className="grey">
                        {" "}
                        Cancel
                      </Button>
                      <Button
                        // onClick={handleConnectByEmployer}
                        // loading={isLoading}
                        className="light">
                        {" "}
                        Confirm
                      </Button>
                    </div>
                  </Modal>
                </span>
              </div>
            </div>
          </div>
          <div className="profile">
            <div className="profile-desc-section">
              {/* {jobseekerProfileById?.description && (
              )} */}
              <h1 className="profile-heading">About</h1>

              <p className="profile-desc">
                {/* {jobseekerProfileById?.description} */}
                test test
              </p>
            </div>
            <div className="about-user">
              {/* {jobseekerProfileById?.mobile &&
                jobseekerProfileById?.user?.experience?.length >= 1 && (
                )} */}
              <h1 className="profile-heading mb-4">Experience</h1>

              {/* {!jobseekerProfileById?.user?.experience} */}
              {/* {jobseekerProfileById?.mobile &&
                jobseekerProfileById?.user?.experience?.map((exp, i) => (
                  
                ))} */}
              <div
                //   key={i}
                className="list-points">
                <h1 className="color-green points-heading">
                  {/* {exp?.jobTitle?.title || ""}
                  {" - "}
                  {readableDate(exp.startDate)} {" to "}
                  {!exp?.currentlyWorking && readableDate(exp?.endDate)}
                  {exp?.currentlyWorking && "now"} */}
                </h1>
                <ul>
                  <li>{/* {exp?.companyName || ""} */}</li>
                  <li
                    style={{
                      wordBreak: "break-word",
                      wordWrap: "break-word",
                    }}>
                    {/* {exp?.description || ""} */}
                  </li>
                  <li>
                    Achievement:
                    {/* {exp?.achievement} */}
                  </li>
                </ul>
              </div>
              <br />
              {/* {!jobseekerProfileById?.user?.education}
              {jobseekerProfileById?.mobile &&
                jobseekerProfileById?.user?.education.length >= 1 && (
                )} */}
              <h1 className="profile-heading mb-4">Education</h1>

              {/* If mobile doesn't exits means jobseeker is not connected */}
              {/* {jobseekerProfileById?.mobile &&
                jobseekerProfileById?.user?.education?.map((edu, i) => (
                  
                ))} */}
              <div
                // key={i}
                className="list-points">
                <h1 className="points-heading">
                  {/* {edu?.qualification?.title || ""} */}
                  <br />
                  {/* {edu?.instituteName?.title} {"-"}
                  {readableDate(edu?.startDate)} {" to "}
                  {!edu?.currentlyWork && readableDate(edu?.endDate)}
                  {edu?.currentlyWork && "now"} */}
                </h1>
                <ul>
                  <li>{/* {edu?.description} */}</li>
                </ul>
              </div>
              <br />
              {/* {jobseekerProfileById?.mobile &&
                jobseekerProfileById?.user?.skill?.length >= 1 && (
                )} */}
              <h1 className="profile-heading mb-4">Skills</h1>

              {/* {!jobseekerProfileById?.user?.skill}
              {jobseekerProfileById?.mobile &&
                jobseekerProfileById?.user?.skill?.map((skill, i) => (
                  
                ))} */}
              <div
                // key={i}
                className="list-points">
                <h1 className="points-heading">{/* {skill?.title} {"-"} */}</h1>
                <ul>
                  <li>{/* {skill?.description} */}</li>
                </ul>
              </div>
            </div>
          </div>
          {/* </Spin> */}
        </div>
        <div className="profile-options profile-option-show ">
          {/* <Spin spinning={jobseekerProfileByIdIsLoading}>
            <Options
              profileOption={profileOption}
              setProfileOption={setProfileOption}
              profileId={jobseekerProfileById?.userId}
              HandleProfileOption={HandleProfileOption}
            />
          </Spin> */}
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
