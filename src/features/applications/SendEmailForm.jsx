import React from "react";
import { Form, Button, Row, Col, Input } from "antd";
import "query-string";
import { forwardApplicantsViaEmails } from "./service";
import { showSuccessMessage } from "../../utils/message";

const SendEmailForm = ({ selectedApplications }) => {
    const handleOnFinish = (v) => {
        const payload = {
            applicationIds: selectedApplications,
            mailTo: v.email,
        };
        handleForwardsApplicants(payload);
    };

    const handleForwardsApplicants = async (payload) => {
        try {
            const res = await forwardApplicantsViaEmails(payload);
            if (res.status) {
                showSuccessMessage("Applicants successfully sended");
            }
        } catch (error) {
            console.log("error", error);
        }
    };

    return (
        <div>
            <Form
                onFinish={handleOnFinish}
                className="form"
                name="basic"
                layout="horizontal"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                autoComplete="off"
            >
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
