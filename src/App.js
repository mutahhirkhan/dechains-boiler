import React from "react";
import "./assets/scss/index.scss";
import Layout from "./layout/Layout";
import {BrowserRouter} from "react-router-dom";
import Header from "./Components/Header/Header";
import { Redirect, Route, Switch } from "react-router-dom";
import { DashboardRoutes as Routes } from "../src/routing";
const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                {Routes.map((route, index) => (
                    <Route
                        Key={index}
                        exact={route.exact}
                        path={route.path}
                        component={Layout(route.component)}
                    />
                ))}
                <Redirect from="*" to="/" />
            </Switch>
        </BrowserRouter>
    );
};

export default App;


