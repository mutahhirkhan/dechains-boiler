import React from "react";
import { Button } from "antd";

const Buttons = () => {
  return (
    <>
      <Button type="primary">Apply</Button>
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