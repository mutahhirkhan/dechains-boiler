import React, { Component } from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import { getToken, setToken } from "../utils/Auth";
import Header from "../Components/Header/Header";

let Layout = (ComposedComponent) =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        token: getToken(),
      };
    }

    componentWillMount() {
      this.navigateToLogIn();
    }

    navigateToLogIn() {
      let token = getToken();
      console.log("token===>", token);
      if(!token) {
        console.log("AVAILABLE",typeof token);
        this.props.history.push("/signIn");
      }
    }

    render() {
      let { token } = this.state;
      return (
        <div className="main-layout">
          {token ? <Header /> : null}
          <div className="main-content">
            {token ? <Sidebar /> : null}
            <div className="content">
              <ComposedComponent {...this.props} {...this.state} />
            </div>
          </div>
        </div>
      );
    }
  };

export default Layout;
