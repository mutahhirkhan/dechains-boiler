import React from "react";
import { Row, Col } from "antd";

const UserStatus = (props) => {
  const { header, tital1, tital2, tital3 } = props;
  return (
    <>
      <Row className="user-status-card">
        <Col className="user-status-header" span={24}>
          {header}
        </Col>
        <Col className="user-status-items" span={24}>
          <Row wrap={true} gutter={16}>
            <Col className="cell" span={6}>
              <div className="col-div">
                <span className="first-span padding-left">{tital1}</span>
                <span className="second-span">220</span>
              </div>
            </Col>
            <Col className="cell" span={6}>
              <div className="col-div">
                <span className="first-span">{tital2}</span>
                <span className="second-span">15</span>
              </div>
            </Col>
            <Col className="cell" span={6}>
              <div className="col-div">
                <span className="first-span">{tital3}</span>
                <span className="second-span">12</span>
              </div>
            </Col>
            <Col className="cell" span={6}>
              <div className="col-div">
                <span className="first-span">Total</span>
                <span className="second-span border-none">259</span>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default UserStatus;
