import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { DashboardRoutes as Routes } from "../routing";
import UserStatus from "../app-ui/userStatus/UserStatus";

import Header from "../app-ui/Header/Header";
import Sidebar from "../app-ui/Sidebar/Sidebar";

const Layout = () => {
  return (
    <>
      <div className="main-layout">
        <Header />
        <div className="main-content">
          <Sidebar />
          <div className="content">
            <Switch>
              {Routes.map((route, index) => (
                <Route
                  Key={index}
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
                />
              ))}

              <Redirect from="*" to="/" />
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
