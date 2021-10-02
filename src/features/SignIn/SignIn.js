import React, { useState, useEffect } from "react";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import "./_sign.scss";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { signInAdmin } from "./thunk";
import {
  selectSignIn,
  selectSignInError,
  selectSignInResponse,
  selectStatus,
  selectSignInStatus,
} from "./slice";
import { useHistory } from "react-router";
import { showErrorMessage } from "../../utils/message";

const SignIn = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  // *******  SELECTORS *******
  const signInSuccess = useAppSelector(selectSignIn);
  const signInErrorMessage = useAppSelector(selectSignInError);
  const isLoading = useAppSelector(selectSignInStatus);
  const signInResponse = useAppSelector(selectSignInResponse);
  const status = useAppSelector(selectStatus);

  // *******  COMPONENTS HANDLERS FUNCTIONS *******
  const signInHandler = (values) => {
    dispatch(signInAdmin(values));
  };
  // ******* ******* ******* ******* ******* *******

  // *******  COMPONENT DID UPDATES WITH (DEPENDENCIES) *******
  useEffect(() => {
    if (signInSuccess === true) {
      const token = signInResponse.token;
      // if (rememberMe) {
      localStorage.setItem("token", token);
      if (localStorage.getItem("token")) {
        history.push("/");
      }
      // localStorage.setItem("role", JSON.stringify(role));
      // }
      // const url = userTypes[role.title.toUpperCase()].url;
      // if (url) {
      //   window.location = `${url}/?token=${token}`;
      // }
    }
  }, [signInSuccess]);

  
  useEffect(() => {
    if (status === "failed" && signInErrorMessage === "Invalid credential")
      showErrorMessage(signInErrorMessage);
  }, [signInErrorMessage, status]);
  // ******* ******* ******* ******* ******* *******

  return (
    <div className="login-wrapper">
      <div className="sign-in">
        <div className="intro">
          <img
            src={
              require("../../assets/img/logo/logo-white.76c077ca.png").default
            }
            alt="logo"
          />
        </div>

        <Form
          className="form"
          name="basic"
          layout="vertical"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={(e) => signInHandler(e)}
          autoComplete="off"
        >
          <Row className="c-row">
            <Col className="s-col" lg={14} md={16} sm={24} xs={24}>
              <Form.Item
                className="c-text-input h-fix"
                label="Username"
                name="email"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col className="s-col" lg={14} md={16} sm={24} xs={24}>
              <Form.Item
                className="c-pass-input h-fix"
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>
            </Col>
            <Col className="s-col" lg={14} md={16} sm={24} xs={24}>
              <Form.Item
                className="remember"
                name="remember"
                valuePropName="checked"
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
            </Col>
            <Col className="s-col" lg={14} md={16} sm={24} xs={24}>
              <Form.Item>
                <Button loading={isLoading} type="primary" htmlType="submit">
                  SignIn
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
