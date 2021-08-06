import React, { useState } from "react";

import { BsTrash } from "react-icons/bs";
import { Button, Checkbox, Divider, Tooltip } from "antd";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

import ProfileAvatar from "../Avatar/Avatar";

const getIcon = (starred, setStarred) => {
  if (!starred) {
    return <AiOutlineStar onClick={() => setStarred(!starred)} />;
  }
  return <AiFillStar onClick={() => setStarred(!starred)} />;
};

const ChatListItem = ({
  userStatus = "user-status-active",
  onClick,
  onChatDelete,
  userImage,
  lastMessage,
  lastMessageDate,
}) => {
  const [starred, setStarred] = useState(false);
  const [selected, setSelected] = useState(false);

  return (
    <>
      <div className={`chat-list-item ${selected ? "selected" : ""}`}>
        <Checkbox onClick={() => setSelected(!selected)} />

        <div className="chat-head" onClick={onClick}>
          <ProfileAvatar
            image={userImage}
            size="small"
            userStatus={userStatus}
          />
        </div>

        <div className="chat-text" onClick={onClick}>
          <div className="title">Tim Cook</div>
          <div className="subtitle">shall we go to the movie name</div>
          <div className="text">{lastMessage}</div>
          <div className="date">{lastMessageDate}</div>
        </div>

        <div className="chat-item-btns">
          <div>
            <Tooltip title="favorite">
              <Button
                type="text"
                shape="circle"
                icon={getIcon(starred, setStarred)}
                onClick={() => {}}
              />
            </Tooltip>
          </div>
          <div>
            <Tooltip title="delete">
              <Button
                className="chat-delete-btn"
                type="text"
                shape="circle"
                icon={<BsTrash />}
                onClick={onChatDelete}
              />
            </Tooltip>
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
};

export default ChatListItem;
