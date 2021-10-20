import React from "react";
import { Form, Button, Row, Col, Input } from "antd";
import "query-string";

const SendEmailForm = () => {
    return (
        <div>
            <Form className="form" name="basic" layout="horizontal" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} autoComplete="off">
                <Row justify="end" className="c-row">
                    <Col span={16} md={{ span: 16 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                        {/* <div>Applicants</div> */}
                    </Col>
                    <Col span={6} md={{ span: 4 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                        <Form.Item
                            className="c-text-input h-fix email-input"
                            label="Mail to"
                            name="email"
                            rules={[
                                {
                                    type: "email",
                                    message: "Please enter your valid email!",
                                },
                                {
                                    required: true,
                                    message: "Please enter your email!",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>

                    <Col className="s-col apply-btn" span={2} md={{ span: 4 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Send
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default SendEmailForm;
