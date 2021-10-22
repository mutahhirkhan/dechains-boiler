import React from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectSignInResponse } from "../../features/SignIn/slice";
import { getFullName } from "../../utils/helper";

const Header = ({ logoutHandler }) => {
  const userInfo = useAppSelector(selectSignInResponse);
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a onClick={logoutHandler}>Logout</a>
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
              src={require("../../assets/img/logo/logo-md-original.png")}
              alt=""
            />
            <div className="">
              <div className="links-wrapper"></div>
            </div>
            <nav className="align-items-center"></nav>
            <div className="profile-logout">
              <span>{getFullName(userInfo)}</span>
              <span>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNStYe1LPjbp6FEUZI4BWewc8M56OBYf2Wyg&usqp=CAU"
                  alt=""
                />
              </span>
              <Dropdown trigger={["click"]} overlay={menu}>
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
