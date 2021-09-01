import React, { useState } from "react";
import ProfileAvatar from "../../Components/Avatar/Avatar";
import CButton from "../../Components/Button/Buttons";
import CModal from "../../Components/Modal/Modal";
import { Input, Form, Select } from "antd";

const { Option } = Select;
const { TextArea } = Input;

const ChatBubble = () => {
  const [isInterviewDetailVisible, setInterviewDetailVisible] = useState(false);

  let showModal = () => {
    setInterviewDetailVisible(!isInterviewDetailVisible);
  };

  return (
    <>
      <div className="d-flex flex-column w-100 ">
        <div className={`chat-bubble`}>
          <div className="chat-head">
            <ProfileAvatar
              size="small"
              //   userStatus={userStatus}
              image={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJfa758-9Zet25uR43OnWUDxPh_5ivrKWg4g&usqp=CAU"
              }
            />
          </div>

          <div className="text">
            <div className="title">
              {/* {getFullName(getUser(selectedChat, type))} */}
              Jasson Doe
            </div>
            <div className="time-stamp">
              {/* {readableTime(data.dateTime)} */}6:31 pm
            </div>
            <div>
              <video className="img-view" controls autoplay>
                <source
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJfa758-9Zet25uR43OnWUDxPh_5ivrKWg4g&usqp=CAU"
                  type="video/mp4"
                />
              </video>
              <div>
                <span className="download-media">
                  <a
                    className="download"
                    //   href={data.message} download
                  >
                    {/* {data.message.split("/")[3]} */} Download this
                  </a>
                </span>
              </div>

              <img
                className="img-view"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJfa758-9Zet25uR43OnWUDxPh_5ivrKWg4g&usqp=CAU"
              />
            </div>{" "}
            <div className="chat-message">
              <a
                className="download-media"
                //   href={data.message} download
              >
                {/* {data.message.split("/")[3]} */} hello Paz Tafreshi
              </a>{" "}
            </div>
            <div className="chat-message">
              {/* {data.message} */} Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Fuga accusantium et itaque temporibus neque
              dolorum suscipit praesentium quas facilis quisquam possimus rerum
              beatae voluptates, vitae sit sint odit earum nostrum!'
            </div>
            <div>
              {/* <div className="title-invitation">
                You have recieved an Interview request.
              </div> */}
              <CButton onClick={showModal} className={`green`}>
                View Details
              </CButton>
            </div>
          </div>
        </div>

        {/* <div className="my-2 align-self-center">
          {" "}
          <CInterviewCard type="viewDetails" />{" "}
        </div> */}
        <CModal
          className="c-interview-modal center medium"
          show={isInterviewDetailVisible}
          onHide={showModal}>
          <div className="c-interview-modal-header">
            <h1> Face to face interview</h1>
          </div>

          <div className="form-rows mt-5">
            <Form.Item className="c-input">
              <label htmlFor="company-name">Company Name</label>

              <Input
                autoComplete={"" + Math.random()}
                className="ant-input-lg"
                value=""
                id="company-name"
              />
            </Form.Item>

            <Form.Item className="c-input">
              <label htmlFor="company-name">Date</label>

              <Input
                autoComplete={"" + Math.random()}
                className="ant-input-lg"
                value=""
                id="company-name"
              />
            </Form.Item>

            <Form.Item className="c-input">
              <label htmlFor="company-name">Start time</label>

              <Input
                autoComplete={"" + Math.random()}
                className="ant-input-lg"
                value=""
                id="company-name"
              />
            </Form.Item>

            <Form.Item className="c-input">
              <label htmlFor="company-name">Duration</label>

              <Input
                autoComplete={"" + Math.random()}
                className="ant-input-lg"
                value=""
                id="company-name"
              />
            </Form.Item>

            <Form.Item className="c-input">
              <label htmlFor="company-name">Job reference</label>

              <Input
                autoComplete={"" + Math.random()}
                className="ant-input-lg"
                value=""
                id="company-name"
              />
            </Form.Item>

            <Form.Item className="c-input">
              <Form.Item
                name="savedFilters"
                className="c-input select-lg"
                rules={null}>
                <label htmlFor="company-name">Interview panel</label>

                <Select
                  getPopupContainer={(trigger) => trigger.parentNode}
                  className="select-lg"
                  placeholder="Saved filters">
                  <Option value="Adam"> Adam </Option>
                  <Option value="July"> July </Option>
                </Select>
              </Form.Item>
            </Form.Item>

            <Form.Item className="c-text-box">
              <Form.Item
                name="savedFilters"
                className="c-input c-form p-0"
                rules={null}>
                <label htmlFor="company-name">Other info</label>

                <TextArea
                  placeholder="Please ensure you are dressed smart and bring all of your paper work"
                  className="c-text-area"
                  rows={4}
                />
              </Form.Item>
            </Form.Item>

            <Form.Item className="c-text-box">
              <Form.Item
                name="savedFilters"
                className="c-input c-form p-0 w-100"
                rules={null}>
                <label htmlFor="company-name">Location</label>

                <Input
                  autoComplete={"" + Math.random()}
                  placeholder=""
                  className="c-input w-100"
                  value=""
                  id="company-name"
                />
              </Form.Item>
            </Form.Item>
          </div>

          <div className="form-rows">
            <CButton className="mx-2" themeColor="blue">
              ACCEPT
            </CButton>
            <CButton className="mx-2" themeColor="green">
              REJECT
            </CButton>
          </div>
        </CModal>
      </div>
    </>
  );
};

export default ChatBubble;
