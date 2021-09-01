import React from "react";
import ChatList from "../../Components/ChatList/ChatLIst";
import ChatBubble from "../../Components/ChatBubble/ChatBubble";
import ChatInput from "../../Components/ChatInput/ChatInput";
import UserProfile from "../../Components/UserProfile/UserProfile";
import Modal from "../../Components/Modal/Modal";

const Chat = () => {

  return (
      <div className="height-fix">
        <div className="main-chat-wrapper">
          {/* Chat List */}
          <div className="chatlist-container">
            <ChatList/>
          </div>

          {/* Messages */}
          <div className="chat-wrapper showChat chat-wrapper-show">
            <div className="chat-header">
              <div  className="back-btn">
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
              </div>
              <div className="c-chat-input">
                <ChatInput/>
              </div>
              <div className="blur-div"/>
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
  );
};

export default Chat;
