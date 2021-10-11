import React from 'react'
import { Col, Row, Checkbox } from "antd"
import defaultImage from "../../../assets/img/user.png";

const FilesTilesItems = ({ dummyProfileFiles }) => {
    const onChange = (e) => {
        console.log("e.target.value", e.target.value);
        console.log("e.target.checked", e.target.checked);
    }
    return (
        <>
            {dummyProfileFiles?.map((item) => (
                <Row className="files-main-wrapper">
                    <Col className="files-details-col" span={16}>
                        <Col className="files-checkbox-wrap" span={2}>
                            <span><Checkbox value="id" onChange={onChange} /></span>
                        </Col>
                        <Col span={22}>
                            <div className="files-profile-details">
                                <span className="files-cart-image">
                                    <img src={item.file || defaultImage} />
                                </span>
                                <span className="files-cart-info">
                                    <p className="files-cart-info-name" >{item.userName}</p>
                                </span>
                            </div>
                            <div className="files-profile-desc">
                                <p>{item.filesDesc}</p>
                            </div>
                        </Col>
                    </Col>
                    <Col className="files-actions-col" span={8}>
                        <div className="files-actions-static">
                            <div className="download-icon">
                                <img src={defaultImage} />
                            </div>
                            <span className="ticket-id" >Download</span>
                        </div>
                    </Col>
                </Row>
            ))}

        </>
    )
}

export default FilesTilesItems
