import React from 'react'
import { Form, Button, Row, Col, DatePicker } from "antd";
import { useState } from 'react';
import { checkDisabledDate, jsonToQueryString, startAndEndDate } from '../../utils/helper';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getDashboardCountAdmin, getDashboardFinanceFiguresAdmin } from './thunk';
import "query-string";
import { selectStatus } from './slice';
import moment from 'moment';

const DateApplyForm = () => {
    const [startDate, setStartDate] = useState(null);
    const queryString = require("query-string");
    const dispatch = useAppDispatch()
    const isLoading = useAppSelector(selectStatus)
    const applyDateHandler = (e) => {
        const payload = {
            startDate: startAndEndDate(e.startDate),
            endDate: startAndEndDate(e.endDate)
        }
        console.log("APPLY DATE HANDLER", e)
        console.log("AFTER TO ISO", queryString.stringify(payload))
        console.log("JSON TO QUERY", jsonToQueryString(payload))
        dispatch(getDashboardCountAdmin(jsonToQueryString(payload)))
        dispatch(getDashboardFinanceFiguresAdmin(jsonToQueryString(payload)))
    }
    return (
        <div>
            <Form
                className="form"
                name="basic"
                layout="horizontal"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                onFinish={(e) => applyDateHandler(e)}
                autoComplete="off"
            >
                <Row className="c-row">
                    <Col
                        span={6}
                        md={{ span: 6 }}
                        sm={{ span: 24 }}
                        xs={{ span: 24 }}
                    >
                        <Form.Item
                            className="c-date-picker"
                            label={"Start-date"}
                            name="startDate">
                            <DatePicker
                                // defaultValue={moment()}
                                format={"DD/MM/YYYY"}
                                disabledDate={(current)=>{
                                    return current > moment()
                                }}
                                onChange={(e) => {
                                    setStartDate(e);
                                }}
                            />
                        </Form.Item>
                    </Col>
                    <Col
                        span={6}
                        md={{ span: 6 }}
                        sm={{ span: 24 }}
                        xs={{ span: 24 }}>
                        <Form.Item
                            className="c-date-picker"
                            name="endDate"
                            label={"End-date"}>
                            <DatePicker
                                // defaultValue={startDate}
                                format={"DD/MM/YYYY"}
                                disabled={!startDate}
                                disabledDate={(current) => {
                                    return current && current < startDate;
                                }}
                            />
                        </Form.Item>
                    </Col>
                    <Col className="s-col"
                        span={6}
                        md={{ span: 6 }}
                        sm={{ span: 24 }}
                        xs={{ span: 24 }}>
                        <Form.Item>
                            <Button loading={isLoading} type="primary" htmlType="submit">
                                Apply
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default DateApplyForm
