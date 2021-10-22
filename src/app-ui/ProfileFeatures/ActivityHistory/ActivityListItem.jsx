import React from 'react'
import { Checkbox, Row, Col } from 'antd';


const ActivityListItem = ({ dummyActivityList }) => {
    return (
        <>
            {dummyActivityList?.map((item) => (
                <Row className="activity-main-wrapper">
                    <Col className="activity-content" span={18}>
                        <p>{item.title}</p>
                    </Col>
                    <Col className="date-and-time" span={6}>
                        <p>{item.date}</p>
                    </Col>
                </Row>
            ))}
        </>
    )
}

export default ActivityListItem
