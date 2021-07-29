import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="inner-sidebar">
          <div>
            <Link to={"dashboard"}>
              <span>Dashboard</span>
            </Link>
          </div>
          <Link to={"/chat"}>
            <span>Chat</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
