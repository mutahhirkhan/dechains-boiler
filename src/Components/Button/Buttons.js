import React from "react";
import { Button } from "antd";

const Buttons = ({onClick}) => {
  return (
    <>
      <Button onClick={onClick} type="primary">Apply</Button>
      {/* <AntdButton
      {...props}
      className={`c-button ${
        type === "large" ? "large" : ""
      } ${themeColor} ${className}`}>
      {children}
    </AntdButton> */}
    </>
  );
};

export default Buttons;
