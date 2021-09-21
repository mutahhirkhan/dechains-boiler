import React from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { logout } from "../../utils/Auth";

const Header = () => {
  const handleClick = () => {
    console.log("HANDLE CLICKED")
    logout()
  }
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a onClick={handleClick}>
          Logout
        </a>
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <div className="header">
        <div className="c-header">
          <span className="inner-container">
            <img
              className="logo"
              src={require("../../assets/img/logo/logo-md.png").default}
              alt=""
            />
            <div className="">
              <div className="links-wrapper"/>
            </div>
            <nav className="align-items-center"/>
            <div className="profile-logout">
              <span>Paz Tafrishi</span>
              <span>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNStYe1LPjbp6FEUZI4BWewc8M56OBYf2Wyg&usqp=CAU"
                  alt=""
                />
              </span>
              <Dropdown overlay={menu}>
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}>
                  <DownOutlined />
                </a>
              </Dropdown>
            </div>
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
