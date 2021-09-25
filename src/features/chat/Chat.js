import React from "react";
// import { useWindowSize } from "../../utils/helper";
import ChatList from "../../app-ui/ChatList/ChatLIst";
// import { Empty } from "antd";
import ChatBubble from "../../shared-ui/ChatBubble/ChatBubble";
// import { useAppSelector, useAppDispatch } from "../../store/hooks";
import ChatInput from "../../shared-ui/ChatInput/ChatInput";
import UserProfile from "../../app-ui/UserProfile/UserProfile";
import Modal from "../../shared-ui/Modal/Modal";
// import {
//   deleteConversation,
//   getConversation,
//   getJobseekerRole,
//   getReceivedFiles,
//   getSentFiles,
// } from "./thunk";

const Chat = () => {
  // const [showViewProfile, setShowViewProfile] = useState(false);
  // const { width, height } = useWindowSize();
  // const [showChat, setShowChat] = useState(false);
  // const [selectedChat, setSelectChat] = useState(null);
  // const dispatch = useAppDispatch();
  // const onChatSearch = (values) => {
  //   dispatch(getConversation({ qs: values }));
  // };

  // useEffect(() => {
  //   if (width < 540) {
  //     setShowViewProfile(false);
  //   }
  // }, [width]);

  // useEffect(() => {
  //   if (selectedChat) {
  //     console.log(selectedChat);
  //     const payload = { conversationId: selectedChat?.id };
  //     //below 2 calling from auth
  //     // dispatch(getSentFiles({ payload }));
  //     // dispatch(getReceivedFiles({ payload }));
  //   }
  // }, [selectedChat]);

  return (
    <>
      <div className="height-fix">
        <div className="main-chat-wrapper">
          {/* Chat List */}
          <div className="chatlist-container">
            <ChatList
            // isLoading={isLoading}
            // onChatHeadClick={onChatHeadClick}
            // onChatSearch={onChatSearch}
            // onChatDelete={onChatDelete}
            // conversations={conversations}
            // jobseekerRole={jobseekerRole}
            />
          </div>

          {/* Messages */}
          <div className="chat-wrapper showChat chat-wrapper-show">
            <div className="chat-header">
              <div
                className="back-btn"
                // onClick={() => setShowChat(true)}
              >
                <img
                  className="back-icon"
                  // src={require("../../assets/images/icons/Back.svg")}
                  alt=""
                />
              </div>
              <div
                style={{ cursor: "pointer" }}
                // onClick={() => setShowViewProfile(true)}
                className="view-profile-btn">
                <span>View Profile</span>
              </div>
            </div>

            {/* <Empty
              className="empty-chat-avatar"
              // image={require("../../assets/images/icons/no-data.png")}
              description="Please select a chat"
            /> */}

            <>
              <div className="chat-inner">
                <div className="is-sender is-reciever">
                  <ChatBubble
                    // data={data}
                    // selectedChat={selectedChat}
                    userStatus="user-status-active"
                    type="isSender isReceiver"
                  />
                </div>

                {/* <div className={`message is-reciever`}>
                  <ChatBubble type="isReciever" />
                </div> */}
              </div>

              <div className="c-chat-input">
                <ChatInput
                // selectedChat={selectedChat}
                // sendMessage={onSendMessage}
                />

                {/* <Popover
                  trigger={["click"]}
                  placement="topLeft"
                  overlayClassName="saved-message-drop-down-popover-class"
                  content={savedRepliesDropDown}>
                  <Button
                    htmlType="submit"
                    className="rounded plus-btn-text-field">
                    <PlusOutlined />
                  </Button>
                </Popover> */}
              </div>

              <div className="blur-div"></div>
            </>
          </div>

          {/* User Profile */}

          <div
            className="user-profile 
                showViewProfile user-profile-show">
            <div className="chat-header">
              <div className="back-btn">
                {/* <img
                    src={require("../../assets/images/icons/Back.svg")}
                    alt=""
                  /> */}
                test
              </div>
            </div>
            {/* {console.log(recievedFiles)} */}

            <Modal
              // onHide={() => setShowViewProfile(false)}
              className="c-modal right-side"
              // show={showViewProfile}
            >
              <UserProfile
              // sentFiles={sentFiles}
              // recievedFiles={recievedFiles}
              // user={getReceiver(selectedChat)}
              />
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
