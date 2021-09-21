import React from "react";
import { Input, Form, Dropdown, Menu, Divider } from "antd";
import { BsThreeDotsVertical } from "react-icons/bs";
import ChatListItem from "../../Components/ChatListItem/ChatListItem";

const menuFilter = (
  <Menu>
    <Menu.Item key="Newest">
      <a href="#">Newest</a>
    </Menu.Item>

    <Menu.Item key="Oldest">
      <a href="#">Oldest</a>
    </Menu.Item>

    <Menu.Item key="Starred">
      <a href="#">Starred</a>
    </Menu.Item>

    <Menu.Item key="Unread">
      <a href="#">Unread</a>
    </Menu.Item>
  </Menu>
);

const ChatList = () => {
  return (
    <>
      <div
        //   ref={chatListPanel}
        id="chat-dropdown"
        className="chat-list-panel">
        {/* Filter */}
        <Form
          className="search-inner-div"
          // onFinish={onChatSearch}
        >
          <Form.Item name="search" className="c-input c-input-with-icon w-100">
            <Input
              autoComplete="off"
              placeholder="Search Name &amp; Job title"
              className="xs w-100"
              type="text"
              prefix={
                <img
                  className="input-icon"
                  // src={searchIcon}
                  alt=""
                />
              }></Input>
          </Form.Item>
          <Dropdown
            overlayClassName="c-overlay-filter-menu"
            overlay={menuFilter}
            placement="bottomRight"
            trigger={["click"]}
            className="dropdown">
            <div className="filters">
              <BsThreeDotsVertical className="ml-2" size="20px" />
            </div>
          </Dropdown>
        </Form>

        <Divider />

        {/* Chat list */}
        <div className="chat-list-scroll">
          {/* <Spin spinning={isLoading}>
            {isLoading && (
              <>
                <br />
                <br />
              </>
            )} */}
          <ChatListItem
          // key={i}
          // userStatus="user-status-active"
          // onClick={() => onChatHeadClick(d)}
          // name={getUserName(d)}
          // jobTitle={d.jobTitle}
          // userImage={getUserImage(d)}
          // lastMessage={d.message}
          // lastMessageDate={readableShortDateTime(d.updatedAt)}
          // onChatDelete={() => onChatDelete(d.id)}
          />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          {/* </Spin> */}
          {/* <FilterModal
            filterModalShow={filterModalShow}
            setFilterModalShow={setFilterModalShow}
          /> */}
        </div>
      </div>
    </>
  );
};
export default ChatList;
