import React from 'react'
import defaultImage from "../../../assets/img/user.png";
import { Col, Row } from "antd";

const ProfileViewTile = ({ dummyProfileFlags }) => {

    const handleViewComplain = () => {
      console.log("handleComplain")
    }
    const handleViewMarked = () => {
      console.log("handleViewMarked")
    }
    return (
        <>
            {dummyProfileFlags.map((flagDetails) => (
                <Row className="flag-main-wrapper">
                    <Col className="flag-details-col" span={16}>
                        <div className="flag-profile-details">
                            <span className="flag-cart-image">
                                <img src={flagDetails.image || defaultImage} />
                            </span>
                            <span className="flag-cart-info">
                                <p className="flag-cart-info-name" >{flagDetails.userName}</p>
                                <p>{flagDetails.dateIssue}</p>
                                <p>{flagDetails.timeIssue}</p>
                            </span>
                        </div>
                        <div className="flag-profile-desc">
                            <p>{flagDetails.flagDesc}</p>
                        </div>
                    </Col>
                    <Col className="flag-actions-col" span={8}>
                        <div className="flag-actions-static">
                            <span className="ticket-title">Ticket ID: </span>
                            <span className="ticket-id" >123456</span>
                        </div>
                        <div className="flag-actions-dynamic">
                            <span onClick={handleViewComplain} className="action-view" >View complain</span>
                            <span onClick={handleViewMarked}  className="action-mark" >Mark resolved</span>
                        </div>
                    </Col>
                </Row>
            ))}
        </>

    )
}

export default ProfileViewTile
