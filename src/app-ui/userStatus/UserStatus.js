import React from "react";
import { Row, Col } from "antd";

const UserStatus = (props) => {
  const { header } = props;
  return (
    <>
      <Row className="user-status-card">
        <Col className="user-status-header" span={24}>
          {header}
        </Col>
        <Col className="user-status-items" span={24}>
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <div>col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div>col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div>col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div>col-6</div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default UserStatus;
