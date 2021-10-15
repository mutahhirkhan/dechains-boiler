import React from "react";
import { EditButton } from "../../shared-ui/EditButton/EditButton";
import { BsTrash } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectDeleteBlogSuccess } from "./slice";
import { deleteBlog } from "./thunk";
const queryString = require("query-string");

const ActionsButton = ({ selectedBlogs }) => {
  const dispatch = useAppDispatch()
  const deleteBLogSuccess = useAppSelector(selectDeleteBlogSuccess)
  const handleOnDeleteCLick = () => {
    const tempId = {id : null}
    tempId.id =  selectedBlogs
    const idParams = queryString.stringify(tempId);
    dispatch(deleteBlog(idParams))
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
