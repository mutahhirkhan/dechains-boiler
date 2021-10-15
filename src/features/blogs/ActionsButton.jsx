import React, { useEffect } from "react";
import { EditButton } from "../../shared-ui/EditButton/EditButton";
import { BsTrash } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectDeleteBlogSuccess } from "./slice";
import { deleteBlog, getBlogLists } from "./thunk";
const queryString = require("query-string");

const ActionsButton = ({ selectedBlogs }) => {
  const dispatch = useAppDispatch()
  const deleteBlogSuccess = useAppSelector(selectDeleteBlogSuccess)

  const handleOnDeleteCLick = () => {       //  Handle single and multiple blogs delete actions
    if (selectedBlogs.length > 1) {         //  Check for multiple deletion of blogs and make params for id's
      const tempId = { id: null }
      tempId.id = selectedBlogs
      const idParams = queryString.stringify(tempId);
      dispatch(deleteBlog(idParams))
    } else if (selectedBlogs.length === 1) {    //Single blog will deleted directly
      dispatch(deleteBlog(selectedBlogs[0]))
    }
  };

  useEffect(() => {     //WATCHER FOR DELETE BLOG SUCCESS IF TRUE THEN DISPATCH GET BLOGS AGAIN 
    if(deleteBlogSuccess) dispatch(getBlogLists())
  }, [deleteBlogSuccess])

  const handleOnEditCLick = () => {
    // console.log("handleOnEditCLick");
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
