import React from "react";
import { Col, Row } from "antd";
import defaultImage from "../../../assets/img/user.png";
import ProfileViewTile from "./ProfileViewTile";

const Flags = () => {
    const dummyProfileFlags = [
        {
            userName: "Name",
            dateIssue: "10/10/2020",
            timeIssue: "12:00",
            flagDesc: "Any random text here for section",
            ticketId: 123456
        },
        {
            userName: "Name 2",
            dateIssue: "20/20/2020",
            timeIssue: "22:00",
            flagDesc: "Any random text here for blogs",
            ticketId: 123456
        },
        {
            userName: "Name",
            dateIssue: "30/30/2020",
            timeIssue: "24:00",
            flagDesc: "Any random text here for articles",
            ticketId: 123456
        }
    ]
    return (
        <>
            <ProfileViewTile dummyProfileFlags={dummyProfileFlags} />
        </>
    );
};

export default Flags;
