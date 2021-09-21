import React from "react";
import { Row, Col } from "antd";

const UserStatus = (props) => {
  const { header, heading1, heading2, heading3, heading4, total } = props;

  return (
    <>
      <Row className="user-status-card">
        <Col className="user-status-header" span={24}>
          {header}
        </Col>
        <Col className="user-status-items" span={24}>
          <Row wrap={true} gutter={16}>
            <Col className="cell" span={4}>
              <div className="col-div">
                <span className="first-span padding-left">
                  {heading1?.name}
                </span>
                <span className="second-span">{heading1.value}</span>
              </div>
            </Col>
            <Col className="cell" span={4}>
              <div className="col-div">
                <span className="first-span">{heading2?.name}</span>
                <span className="second-span">{heading2?.value}</span>
              </div>
            </Col>
            <Col className="cell" span={4}>
              <div className="col-div">
                <span className="first-span">{heading3?.name}</span>
                <span className="second-span">{heading3?.value}</span>
              </div>
            </Col>
            {heading4 && (
              <Col className="cell" span={4}>
                <div className="col-div">
                  <span className="first-span">{heading4?.name}</span>
                  <span className="second-span">{heading4?.value}</span>
                </div>
              </Col>
            )}
            <Col className="cell" span={4}>
              <div className="col-div">
                <span className="first-span">Total</span>
                <span className="second-span border-none">{total}</span>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default UserStatus;
