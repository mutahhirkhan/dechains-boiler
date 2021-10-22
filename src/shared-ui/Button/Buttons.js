import React from "react";
import { Button as AntdButton } from "antd";

const Buttons = (props) => {
  const {
    children,
    type = "small",
    themeColor = "",
    className = "",
    style = null,
  } = props;
  return (
    <>
      {/* <Button type="primary">Apply</Button> */}
      <AntdButton
      {...props}
      className={`c-button ${
        type === "large" ? "large" : ""
      } ${themeColor} ${className}`}>
      {children}
    </AntdButton>
    </>
  );
};

export default Buttons;
