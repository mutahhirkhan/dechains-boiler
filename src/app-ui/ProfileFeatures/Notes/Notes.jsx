import { Col, Row, Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import React from 'react'
import PersonNoteDetails from './PersonNoteDetails';

const Notes = () => {
    const dummyProfileNotes = [
        {
            userName: "Name",
            dateIssue: "10/10/2020",
            timeIssue: "12:00",
            noteDesc: "Any random text here for section"
        },
        {
            userName: "Name 2",
            dateIssue: "20/20/2020",
            timeIssue: "22:00",
            noteDesc: "Any random text here for blogs"
        },
        {
            userName: "Name",
            dateIssue: "30/30/2020",
            timeIssue: "24:00",
            noteDesc: "Any random text here for articles"
        }
    ]
    return (
        <div>
            <Row>
                <Col className="profile-search-tile" span={8}>
                    <Input size="large" placeholder="large size" prefix={<SearchOutlined />} />
                </Col>
                <Col className="profile-search-tile" span={8}>
                    Add a new notes +
                </Col>
            </Row>
            <Row className="profile-details-row">
                <PersonNoteDetails
                    profileNotesData = {dummyProfileNotes}
                />
            </Row>
        </div>
    )
}

export default Notes
