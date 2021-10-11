import React from 'react'
import { Col, Row } from "antd"
import InfoContent from '../Info/InfoContent';

const Stats = () => {
    const totalSpent = 123
    const options = [
        {
            name: "Total jobs applied",
            value: 123,
        },
        {
            name: "Status",
            value: "Available for work",
        },
        {
            name: "Hired",
            value: 23,
        }
    ];
    return (
        <>
            <Row>
                <InfoContent options={options} heading="Job stats" />
                <InfoContent options={options} heading="Finances" />
            </Row>

            <Row className="content-second-row">
                <InfoContent options={options} heading="Falgged/reported" />
                <InfoContent options={options} heading="Profile state" />
            </Row>

            <Row className="content-second-row">
                <InfoContent mainHeading="Main Heading" />
                <InfoContent options={options} heading="Transaction History" />
                <InfoContent options={options} heading="Profile state" />
                <InfoContent totalSpent={totalSpent} />
            </Row>
        </>
    )

}
export default Stats
