import { Col, Row } from "antd";
import React from "react";
import InfoContent from "./InfoContent";
import { Map } from '../../../shared-ui/Map/Map';

const Info = () => {
    const options = [
        {
            name: "FamilyStatus",
            value: "Single",
        },
        {
            name: "Age",
            value: "12",
        },
        {
            name: "Gender",
            value: "Male",
        },
        {
            name: "Passport",
            value: "Pakistani",
        },
    ];

    return (
        <>
            <Row>
                <InfoContent options={options} heading="Personal" />
                <InfoContent options={options} heading="Social" />
            </Row>

            <Row className="content-second-row">
                <InfoContent options={options} heading="Other Info" />
                <InfoContent options={options} heading="Social" />
            </Row>
            <Row className="content-second-row">
                <Col className="content-col-main" span={12}>
                    <div className="content-heading">
                        {"Destination"}
                    </div>
                    <div className="content-options statistics">
                        <span className="content-options-name" >{"Desired Locations"}</span>
                        <span className="content-options-value">{"Dubai, Abu Dhabi"}</span>
                    </div>
                </Col>
            </Row>
            <Row className="content-second-row">
                <Col className="content-col-main" span={12}>
                    <div className="content-heading">
                        {"Destination"}
                    </div>
                    <div className="content-options statistics">
                        <span className="content-options-value">{"Dubai, Abu Dhabi"}</span>
                    </div>
                </Col>
            </Row>
            {/* <Row className="content-second-row">
                <div className="block-map">
                    <Map
                    />
                </div>
            </Row> */}
        </>
    );
};

export default Info;
