import React from "react";
import { EditButton } from "../../shared-ui/EditButton/EditButton";
import { BsTrash } from "react-icons/bs";

const ActionsButton = ({ selectedBlogs }) => {
  const handleOnDeleteCLick = () => {
    console.log("handleOnDeleteCLick");
  };
  const handleOnEditCLick = () => {
    console.log("handleOnEditCLick");
  };
  return (
    <>
      {selectedBlogs?.length > 0 && (
        <div className="action-buttons">
          <div className="action-item">
            {selectedBlogs?.length === 1 && (
              <>
                <EditButton
                  className="edit-btn icon"
                  onClick={handleOnEditCLick}
                />
                <div className="label">Edit</div>
              </>
            )}
          </div>
          <div className="action-item">
            <BsTrash
              className="delete-btn icon"
              onClick={handleOnDeleteCLick}
            />
            <div className="label">Delete</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ActionsButton;
