import React from "react";
import { Row, Col, Form, Select } from "antd";
import CreateBlogButton from "./CreateBlogButton";
import ActionsButton from "./ActionsButton";

const BlogHeader = () => {
  return (
    <>
      <Row className="blog-header" justify="space-between">
        <Col className="create-btn-main" span={4}>
          <CreateBlogButton />
        </Col>
        <Col className="search-item-field-main" span={8}>
          <Form layout="vertical">
            <Form.Item className="select-md ">
              <Select
                className="scroll-to-smooth"
                getPopupContainer={(trigger) => trigger.parentNode}
                placeholder="Search"
                onChange={null}
              >
                {/* {candidateList?.map((d) => (
                  <Option value={d?.id}>{d?.title}</Option>
                ))} */}
              </Select>
              {"$ SELECTED"}
            </Form.Item>
          </Form>
        </Col>
        <Col className="action-btn-main" span={4}>
          <ActionsButton/>
        </Col>
      </Row>
    </>
  );
};

export default BlogHeader;
