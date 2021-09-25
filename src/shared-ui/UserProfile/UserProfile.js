import React from "react";
import Avatar from "../Avatar/Avatar";

const UserProfile = () => {
  return (
    <>
      <div className="profile-container">
        <div className="top-section">
          <div className="about-user">
            <Avatar
            // userStatus={userStatus}
            // image={user?.jobSeekerProfile?.profilePhoto}
            // onClick={handleProfile}
            />
            {/* <ProfileCard
                  userImage="1"
                  userName={user.jobseeker?.firstName}
                  userJob={user?.jobseeker?.jobSeekerProfile?.jobTitle?.title}
                  userImage={user?.jobseeker?.jobSeekerProfile?.profilePhoto}
                  handleClick={() => {
                    handleProfile();
                  }}
                /> */}
            <h2
              className="user-name"
              // onClick={handleProfile}
            >
              {/* {getFullName(user)} */}
            </h2>
            <p className="user-info">
              {/* {user?.jobSeekerProfile?.jobTitle?.title} */}
            </p>

            <div className="contact-btns">
              {/* <Button themeColor="rounded green mx-2">
                    <MdPhoneInTalk />
                  </Button>
                  <Button themeColor="rounded blue mx-2  ">
                    <FaVideo />
                  </Button>
                  <Dropdown
                    className="add-media-btn"
                    getPopupContainer={(trigger) => trigger.parentNode}
                    overlay={menu}
                    overlayClassName={"user-profile-menu"}
                    placement="bottomRight"
                    trigger={["click"]}>
                    <Button themeColor="rounded blue mx-2 ">
                      <PlusOutlined />
                    </Button>
                  </Dropdown> */}

              <Modal
                backdropClassName="video-questionare-back-drop"
                className="video-questionare-modal center medium"
                show={showVideoQuestionareModal}
                onHide={() => setShowVideoQuestionareModal(false)}>
                <div className="video-questionare-modal-header">
                  <h1>Video Questionare</h1>
                  <span className="select-lg">
                    <Select placeholder="Choose from saved templates"></Select>
                  </span>
                </div>

                <Form
                  layout="vertical"
                  style={{ minHeight: "500px" }}
                  className="d-flex justify-content-between flex-column video-modal-responsive">
                  <div className="video-modal-fields">
                    <div className="form-rows mt-5">
                      <Form.Item label="Question 1" className="c-input w-100">
                        <Input
                          autoComplete={"" + Math.random()}
                          className="ant-input-w100"
                          id="company-name"
                        />
                      </Form.Item>
                    </div>
                    <div className="form-rows">
                      <Form.Item
                        label="Answer time"
                        className="c-input w-50 counter">
                        <Button
                          onClick={
                            timeLimit >= 10
                              ? () => setTimeLimit(timeLimit - 5)
                              : () => setTimeLimit(5)
                          }
                          className="rounded minus">
                          <MinusOutlined />
                        </Button>
                        <Button
                          onClick={
                            timeLimit <= 25
                              ? () => setTimeLimit(timeLimit + 5)
                              : () => setTimeLimit(30)
                          }
                          className="rounded plus">
                          <PlusOutlined />
                        </Button>
                        <Input
                          autoComplete={"" + Math.random()}
                          className="ant-input-w100"
                          value={`${timeLimit} minutes max `}
                        />
                      </Form.Item>
                      <Form.Item className="w-50 align-items-end  flex">
                        <span className="d-flex justify-content-end align-items-center">
                          <span className="mr-2">Add another</span>
                          <Button
                            onClick={() =>
                              setQuestionCounter(
                                questionCounter < 3
                                  ? questionCounter + 1
                                  : questionCounter
                              )
                            }
                            className="rounded d-flex justify-content-center">
                            <PlusOutlined />
                          </Button>
                        </span>
                      </Form.Item>
                    </div>
                  </div>
                  {questionCounter === 2 || questionCounter > 2 ? (
                    <div>
                      <div className="form-rows">
                        <Form.Item label="Question 2" className="c-input w-100">
                          <Input
                            autoComplete={"" + Math.random()}
                            className="ant-input-w100"
                            id="company-name"
                          />
                        </Form.Item>
                      </div>
                      <div className="form-rows">
                        <Form.Item
                          label="Answer time"
                          className="c-input w-50 counter">
                          <Button
                            onClick={
                              timeLimit >= 10
                                ? () => setTimeLimit(timeLimit - 5)
                                : () => setTimeLimit(5)
                            }
                            className="rounded minus">
                            <MinusOutlined />
                          </Button>
                          <Button
                            onClick={
                              timeLimit <= 25
                                ? () => setTimeLimit(timeLimit + 5)
                                : () => setTimeLimit(30)
                            }
                            className="rounded plus">
                            <PlusOutlined />
                          </Button>
                          <Input
                            autoComplete={"" + Math.random()}
                            className="ant-input-w100"
                            value={`${timeLimit} minutes max `}
                          />
                        </Form.Item>
                        <Form.Item className="w-50 align-items-end  ">
                          <span className="d-flex justify-content-end align-items-center">
                            <span className="mr-2">Add another</span>
                            <Button
                              onClick={() =>
                                setQuestionCounter(
                                  questionCounter < 3
                                    ? questionCounter + 1
                                    : questionCounter
                                )
                              }
                              className="rounded d-flex justify-content-center">
                              <PlusOutlined />
                            </Button>
                          </span>
                        </Form.Item>
                      </div>
                    </div>
                  ) : null}
                  {questionCounter === 3 ? (
                    <div>
                      <div className="form-rows">
                        <Form.Item label="Question 3" className="c-input w-100">
                          <Input
                            autoComplete={"" + Math.random()}
                            className="ant-input-w100"
                            id="company-name"
                          />
                        </Form.Item>
                      </div>
                      <div className="form-rows">
                        <Form.Item
                          label="Answer time"
                          className="c-input w-50 counter">
                          <Button
                            onClick={
                              timeLimit >= 10
                                ? () => setTimeLimit(timeLimit - 5)
                                : () => setTimeLimit(5)
                            }
                            className="rounded minus">
                            <MinusOutlined />
                          </Button>
                          <Button
                            onClick={
                              timeLimit <= 25
                                ? () => setTimeLimit(timeLimit + 5)
                                : () => setTimeLimit(30)
                            }
                            className="rounded plus">
                            <PlusOutlined />
                          </Button>
                          <Input
                            autoComplete={"" + Math.random()}
                            className="ant-input-w100"
                            value={`${timeLimit} minutes max `}
                          />
                        </Form.Item>
                        <Form.Item className="w-50 align-items-end  ">
                          <span className="d-flex justify-content-end align-items-center">
                            <span className="mr-2">Add another</span>
                            <Button
                              onClick={() =>
                                setQuestionCounter(
                                  questionCounter < 3
                                    ? questionCounter + 1
                                    : questionCounter
                                )
                              }
                              className="rounded d-flex justify-content-center">
                              <PlusOutlined />
                            </Button>
                          </span>
                        </Form.Item>
                      </div>
                    </div>
                  ) : null}
                  <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="video-call-input-wrapper">
                      <Form.Item label="Template name" className="c-input flex">
                        <Input
                          autoComplete={"" + Math.random()}
                          style={{ width: "100%" }}
                          className="video-call-template-input"
                        />
                      </Form.Item>
                    </Col>
                    <Col span={2}></Col>
                    <Col span={2}></Col>
                    <Col span={20}>
                      <Form.Item>
                        <div className="d-flex justify-content-between mt-4">
                          <Button className="video-modal-buttons">
                            Save template
                          </Button>
                          <span className="flex">or</span>
                          <Button
                            className="video-modal-buttons"
                            themeColor="green">
                            Send
                          </Button>
                        </div>
                      </Form.Item>
                    </Col>
                    <Col span={2}></Col>
                  </Row>
                </Form>
              </Modal>
            </div>
          </div>

          <div className="further-info">
            <p className="user-info">About &nbsp;{user?.firstName}</p>

            <p className="user-bio">
              {user?.jobSeekerProfile?.description || ""}
            </p>
          </div>
          {/* <div onClick={() => setInviteToChat(true)} className="invite-others">
                Invite others to chat
              </div> */}
        </div>

        <div className="tabs-section">
          <Tabs moreIcon={false} type="card">
            <TabPane tab="Files sent" key="1">
              <div className="main-media-conainer">
                {!sentFiles?.length && (
                  <div className="no-data h-100 mt-5 pb-5">
                    <Empty
                      image={require("../../assets/images/icons/no-data.png")}
                      description="No files"
                    />
                  </div>
                )}
                {sentFiles?.map((data, key) => (
                  <div key={key} className="user-media">
                    <span className="items">
                      <span className="files">
                        <b className="mr-2">X</b>
                        {data?.fileType === "video" ? (
                          <FcVideoFile size="50px" />
                        ) : null}
                        {data?.fileType === "image" ? (
                          <FcImageFile size="50px" />
                        ) : null}
                        {data?.fileType === "document" ? (
                          <FcDocument size="50px" />
                        ) : null}
                        {/* <img
                                  className="user-media-files mr-2"
                                  src={require("../../assets/images/icons/filetypes/Wfile.svg")}
                                  alt=""
                                /> */}
                        <p className="user-file-name">{data?.fileType}</p>
                      </span>
                      <span className="files-details">
                        <p>{moment(data?.createdAt).format("DD/MM/YYYY")}</p>

                        <p>- 5.7 mb</p>
                      </span>
                    </span>
                    <span className="download-media">
                      <img
                        className=""
                        src={require("../../assets/images/icons/download-icon.svg")}
                        alt=""
                      />
                      <a href={data?.message} className="download">
                        Download
                      </a>
                      <p className="user-items-expire">Expires in 29 days.</p>
                    </span>
                  </div>
                ))}
              </div>
            </TabPane>

            <TabPane tab="Files received" key="2">
              <div className="main-media-conainer">
                {!recievedFiles?.length && (
                  <div className="no-data h-100 mt-5 pb-5">
                    <Empty
                      image={require("../../assets/images/icons/no-data.png")}
                      description="No files"
                    />
                  </div>
                )}
                {recievedFiles?.map((data, key) => (
                  <div key={key} className="user-media">
                    <span className="items">
                      <span className="files">
                        <b className="mr-2">X</b>
                        {data?.fileType === "video" ? (
                          <FcVideoFile size="50px" />
                        ) : null}
                        {data?.fileType === "image" ? (
                          <FcImageFile size="50px" />
                        ) : null}
                        {data?.fileType === "document" ? (
                          <FcDocument size="50px" />
                        ) : null}
                        {/* <img
                                  className="user-media-files mr-2"
                                  src={require("../../assets/images/icons/filetypes/Wfile.svg")}
                                  alt=""
                                /> */}
                        <p className="user-file-name">{data?.fileType}</p>
                      </span>
                      <span className="files-details">
                        <p>{moment(data?.createdAt).format("DD/MM/YYYY")}</p>

                        <p>- 5.7 mb</p>
                      </span>
                    </span>
                    <span className="download-media">
                      <img
                        className=""
                        src={require("../../assets/images/icons/download-icon.svg")}
                        alt=""
                      />
                      <a href={data?.message} className="download">
                        Download
                      </a>
                      <p className="user-items-expire">Expires in 29 days.</p>
                    </span>
                  </div>
                ))}
              </div>
            </TabPane>
            <TabPane tab="Links shared" key="3">
              <div className="link-sheared">
                <div className="links">
                  <a href="https://develop-homepage.jobsmideast.com/">
                    https://develop-homepage.jobsmideast.com/
                  </a>
                </div>
              </div>
            </TabPane>
          </Tabs>
        </div>

        {/* invite others to team chat */}

        {inviteToChat && (
          <div className="invite-others-to-chat">
            <div className="header">
              {" "}
              <Checkbox
              // indeterminate={indeterminate}
              // onChange={onCheckAllChange}
              // checked={checkAll}
              ></Checkbox>
              Invite Team Members
              <div onClick={() => setInviteToChat(false)} className="close">
                <IoMdClose size="16px" />
              </div>
            </div>
            <div className="team-members">
              <div className="team-member">
                <Checkbox></Checkbox>
                <img src={require("../../assets/images/ms/ms-1.png")} alt="" />
                <span>James</span>
              </div>
              <Divider />
              <div className="team-member">
                <Checkbox></Checkbox>
                <img src={require("../../assets/images/ms/ms-3.png")} alt="" />
                <span>Jamshed</span>
              </div>
            </div>
            <div className="footer">
              <Button themeColor="light">Invite</Button>
            </div>
          </div>
        )}
      </div>

      <Modal
        className="profile-modal center"
        show={showProfile}
        onHide={() => setShowProfile(false)}>
        <UserProfile
          showProfile={showProfile}
          profileDetails={jobsAppliedFor[0]?.id}
          handleProfile={handleProfile}
        />
      </Modal>
    </>
  );
};

export default UserProfile;
