import React, { Component } from "react";
import { setToken } from "../../utils/Auth";
import Auth from "../../services/Auth";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import { connect } from "react-redux";
import { signIn } from "../../redux/slice/userSlice";
import "./_sign.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "email",
      password: "password",
      // admin@jobsmideast.com  password : 12345678
    };
  }

  signIn({ email, password }) {
    let { signIn, history } = this.props;
    let payload = {
      email,
      password,
      navigate: () => history.push("/"),
    };
    signIn(payload);
  }

  render() {
    let { email, password } = this.state;
    console.log("Props=>", this.props);
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
            onFinish={(e) => this.signIn(e)}
            autoComplete="off">
            <Row className="c-row">
              <Col className="s-col" lg={14} md={16} sm={24} xs={24}>
                <Form.Item
                  className="c-text-input h-fix"
                  label="Username"
                  name="email"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}>
                  <Input value={email} />
                </Form.Item>
              </Col>
              <Col className="s-col" lg={14} md={16} sm={24} xs={24}>
                <Form.Item
                  className="c-pass-input h-fix"
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}>
                  <Input.Password value={password} />
                </Form.Item>
              </Col>
              <Col className="s-col" lg={14} md={16} sm={24} xs={24}>
                <Form.Item
                  className="remember"
                  name="remember"
                  valuePropName="checked">
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
              </Col>
              <Col className="s-col" lg={14} md={16} sm={24} xs={24}>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    SignIn
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.users,
});

const mapDispatchToProps = () => ({
  signIn,
});

export default connect(mapStateToProps, mapDispatchToProps())(SignIn);
