import React, {Component} from "react";
import {setToken} from "../../utils/Auth";
import Auth from '../../services/Auth';
import { Form, Input, Button, Checkbox } from 'antd';
import {connect} from 'react-redux';
import { signIn } from "../../redux/slice/userSlice";

class  SignIn extends Component{
    constructor(props) {
        super(props);
        this.state ={
            email:'email',
            password:'password'
            // admin@jobsmideast.com  password : 12345678
        }
    }

    signIn({email, password}){
        let {signIn, history} = this.props
        let payload = {
            email,
            password,
            navigate:()=> history.push('/')
        };
        signIn(payload)
    }

    render() {
        let {email, password} = this.state;
        console.log('Props=>', this.props)
        return (
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={(e)=>this.signIn(e)}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="email"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input value={email} />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password  value={password} />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        SignIn
                    </Button>
                </Form.Item>
            </Form>
        );
    }

}

const mapStateToProps = state => ({
    ...state.users
});

const mapDispatchToProps = () => ({
    signIn,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps()
)(SignIn);

