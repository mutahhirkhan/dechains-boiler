import React from "react";
import { Col } from "antd";

const InfoContent = ({ options, heading, mainHeading, totalSpent }) => {
    return (
        <Col className="content-col-main" span={`${mainHeading || totalSpent ? 24 : 12}`}>
            {mainHeading && (
                <div>
                    <div className="main-heading">{mainHeading}</div>
                </div>
            )}
            {heading && <div className="content-heading">{heading}</div>}
            {options?.map((content) => (
                <div className="content-options">
                    <span className="content-options-name">{content.name}</span>
                    <span className="content-options-value">{content.value}</span>
                </div>
            ))}
            {totalSpent && (
                <div className="total-spent"><span>Total Spent:  </span>{totalSpent}</div>
            )}
        </Col>
    );
};

export default InfoContent;
