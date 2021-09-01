import React, {Component} from "react";
import {setToken} from "../../utils/Auth";
import Auth from '../../services/Auth';
import { Form, Input, Button, Checkbox } from 'antd';
class  SignIn extends Component{
    constructor(props) {
        super(props);
        this.state ={
            email:'email',
            password:'password'
            // admin@jobsmideast.com  password : 12345678
        }
    }


    onFinish(values){
        console.log('Success:', values);
    };


    signIn({email, password}){
        let payload = {email , password};
        Auth.signIn(payload).
        then((res)=>{
            let {data} = res.data;
            console.log('res=>', data);
            setToken(data.token);
            this.props.history.push('/');
        }).
        catch((err)=>{
            console.log('err=>', err)
        })
    }

    render() {
        let {email, password} = this.state;
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
export default SignIn
