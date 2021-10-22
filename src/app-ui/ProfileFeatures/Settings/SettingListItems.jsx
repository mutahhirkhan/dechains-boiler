import React from 'react'
import { Checkbox, Row, Col } from 'antd';

const SettingListItems = ({ dummySettingList }) => {
    function onChange(e) {
        console.log(`checked = ${e.target.value} , isChecked ? ${e.target.checked}`);
    }
    return (
        <>
            {dummySettingList.map((item) => (
                <Row className="setting-main-wrapper">
                    <Col className="setting-content" span={18}>
                        <Checkbox value={item.id} onChange={onChange}>
                            <p>{item.title}</p>
                        </Checkbox>
                    </Col>
                    <Col className="date-and-time" span={6}>
                        <p>{item.date}</p>
                    </Col>
                </Row>
            ))}

        </>
    )
}

export default SettingListItems
