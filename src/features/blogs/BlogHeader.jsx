import React from "react";
import { Row, Col, Form, Select } from "antd";
import CreateBlogButton from "./CreateBlogButton";
import ActionsButton from "./ActionsButton";

const BlogHeader = ({ selectedBlogs }) => {
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
              <p className="selected-user-length">
                {selectedBlogs?.length > 0 && `${selectedBlogs.length} Selected`}
              </p>
            </Form.Item>
          </Form>
        </Col>
        <Col className="action-btn-main" span={4}>
          <ActionsButton selectedBlogs={selectedBlogs} />
        </Col>
      </Row>
    </>
  );
};

export default BlogHeader;
