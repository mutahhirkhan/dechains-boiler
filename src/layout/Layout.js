import React, { useState, useEffect, useMemo } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { DashboardRoutes as Routes } from "../routing";
import { useHistory } from "react-router";
import Header from "../app-ui/Header/Header";
import Sidebar from "../app-ui/Sidebar/Sidebar";
import { useAppDispatch, useAppSelector } from "../store/hooks";

// ******* THUNK IMPORTS *******
import { getDashboardCountAdmin } from "../features/dashboards/thunk";

// ******* SLICE IMPORTS *******
import { selectIsAuthorized } from "../features/dashboards/slice";
import { selectSignIn, signInSuccessDefault } from "../features/SignIn/slice";

// *******  DEFAULT COMPONENT ___LAYOUT___ *******
const Layout = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const isAuthorized = useAppSelector(selectIsAuthorized);
  const signInSuccess = useAppSelector(selectSignIn);
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  // *******COMPONENTS FUNCTIONS*******
  const handleLogoutToSignIn = () => {
    localStorage.clear();
    dispatch(signInSuccessDefault());
    setIsLoggedIn(false);
  };

  const loginToHomePage = () => {
    // history.push("/");
    setIsLoggedIn(true);
  };

  const checkTokenExist = () => {
    if (localStorage.getItem("token")) return true;
    else return false;
  };
  // ******** ******** ******** ******** ******** ******** ********

  useEffect(() => {
    dispatch(getDashboardCountAdmin());
  }, []);

  // ******** COMPONENT DID UPDATE WITH (DEPENDENCIES) ********

  useEffect(() => {
    if (isLoggedIn === false) {
      dispatch(signInSuccessDefault());
      history.push("/sign-in");
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (isAuthorized && checkTokenExist()) {
      loginToHomePage();
    }
    if (isAuthorized === false || !checkTokenExist()) {
      // dispatch(signInSuccessDefault());
      setIsLoggedIn(false);
    }
  }, [isAuthorized, signInSuccess]);

  // ******** ******** ******** ******** ******** ******** ********

  return (
    <>
      <div className="main-layout">
        {isLoggedIn && <Header logoutHandler={handleLogoutToSignIn} />}
        <div className="main-content">
          {isLoggedIn && <Sidebar />}
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
