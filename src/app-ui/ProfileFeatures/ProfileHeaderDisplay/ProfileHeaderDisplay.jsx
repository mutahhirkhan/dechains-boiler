import React from 'react'
import { Row, Button, Col,Select } from "antd";
import defaultImage from "../../../assets/img/user.png"
import RateCount from './RateCount';

const ProfileHeaderDisplay = () => {
    console.log("COMPONENT RENDER");
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    return (
        <div className="profile-main">
            <Row className="profile-display-section" >
                <Col className={`profile-description`} span={16}>
                    <Col span={8}>
                        <div className="profile-image">
                            <div className="image">
                                <img src={defaultImage} alt="" />
                            </div>
                        </div>
                    </Col>
                    <Col className="profile-options-main" span={16}>
                        <div className="profile-options">
                            <h3 className="profile-name-heading">Julie Anderson</h3>
                            <p> Sector : Noway</p>
                            <p>Job title : Examiner</p>
                            <p>Location</p>
                            <p className="rate-count-section" >Top Customers <RateCount /> </p>
                            <div className="option-btns">
                                <Button type="primary">
                                    Email
                                </Button>
                                <Button type="ghost">
                                    Chat
                                </Button>
                                <Button type="primary">
                                    Share
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Col>
                <Col className={`profile-stats`} span={8} >
                    <div className="stats-points">
                        <p> Sector : Noway</p>
                        <p>Job title : Examiner</p>
                        <p>Location</p>
                    </div>
                    {/* <Select placeholder="Add selected items" options={options} /> */}
                </Col>
            </Row>
        </div>
    )
}

export default ProfileHeaderDisplay






