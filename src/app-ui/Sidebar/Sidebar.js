import React from "react";
import { Link } from "react-router-dom";
import { AppstoreOutlined, InboxOutlined } from "@ant-design/icons";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="inner-sidebar">
          <div className="box">
            <Link to="/">
              <AppstoreOutlined style={{ fontSize: "35px", color: "white" }} />
              <div>Dashboard</div>
            </Link>
          </div>
          <div className="box">
            <Link to="/blogs">
              <AppstoreOutlined style={{ fontSize: "35px", color: "white" }} />
              <div>Blogs</div>
            </Link>
          </div>
          <div className="box">
            <Link to="/test">
              <AppstoreOutlined style={{ fontSize: "35px", color: "white" }} />
              <div>Jobseeker</div>
            </Link>
          </div>
          <div className="box">
            <Link to="/applications-request">
              <AppstoreOutlined style={{ fontSize: "35px", color: "white" }} />
              <div>Applications Request</div>
            </Link>
          </div>
          <div className="box">
            <Link to="/applications">
              <AppstoreOutlined style={{ fontSize: "35px", color: "white" }} />
              <div>Applicants</div>
            </Link>
          </div>
          {/* <div className="box">
            <Link to={"/chat"}>
              <InboxOutlined style={{ fontSize: "35px", color: "white" }} />
              <div>Chat</div>
            </Link>
          </div>
          <div className="box">
            <Link to={"dashboard"}>
              <AppstoreOutlined style={{ fontSize: "35px", color: "white" }} />
              <div>Employer</div>
            </Link>
          </div>
          <div className="box">
            <Link to={"dashboard"}>
              <AppstoreOutlined style={{ fontSize: "35px", color: "white" }} />
              <div>Agency</div>
            </Link>
          </div>
          <div className="box">
            <Link to={"dashboard"}>
              <AppstoreOutlined style={{ fontSize: "35px", color: "white" }} />
              <div>Job Seeker</div>
            </Link>
          </div>
          <div className="box">
            <Link to={"dashboard"}>
              <AppstoreOutlined style={{ fontSize: "35px", color: "white" }} />
              <div>Site Stats</div>
            </Link>
          </div>
          <div className="box">
            <Link to={"dashboard"}>
              <AppstoreOutlined style={{ fontSize: "35px", color: "white" }} />
              <div>Sales Stats</div>
            </Link>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
