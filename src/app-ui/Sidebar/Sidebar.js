import React from "react";
import { Link } from "react-router-dom";
import { AppstoreOutlined, InboxOutlined } from "@ant-design/icons";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="inner-sidebar">
          <div className="box">
            <Link to={"dashboard"}>
              <AppstoreOutlined style={{ fontSize: "35px", color: "white" }} />
              <div>Dashboard</div>
            </Link>
          </div>
          <div className="box">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
