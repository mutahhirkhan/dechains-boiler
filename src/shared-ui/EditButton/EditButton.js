import React from "react";

export const EditButton = ({ onClick }) => {
  return (
    <img
      onClick={onClick}
      src={require("../../assets/img/icons/cvprofileicons/edit1pencil.svg").default}
      alt="edit"
      className="edit-btn"
    />
  );
};
