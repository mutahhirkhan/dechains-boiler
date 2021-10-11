import React from "react";
import { Col } from "antd";
import defaultImage from "../../../assets/img/user.png";
const PersonNoteDetails = ({ profileNotesData }) => {
    // const { profileImage = defaultImage, userName, dateIssue, timeIssue, noteDesc } = props
    console.log("profileNotesDetails", profileNotesData);
    return (
        <>
            {profileNotesData.map((detail) => (
                <Col className="profile-note-tile" span={24}>
                    <div className="profile-note-info">
                        <span className="profile-avatar">
                            <img src={detail.profileImage || defaultImage} />
                        </span>
                        <span className="details-wrapper">
                            <h4 className="profile-avatar-details name">{detail.userName}</h4>
                            <p className="profile-avatar-details date-time">{detail.dateIssue}</p>
                            <p className="profile-avatar-details date-time">{detail.timeIssue}</p>
                        </span>
                    </div>
                    <div className="profile-note-desc">
                        <p>{detail.noteDesc}</p>
                    </div>
                </Col>
            ))}
        </>
    );
};

export default PersonNoteDetails;
