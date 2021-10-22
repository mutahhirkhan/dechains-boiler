import React, { useEffect } from "react";
import { EditButton } from "../../shared-ui/EditButton/EditButton";
import { BsTrash } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectDeleteBlogSuccess } from "./slice";
import { deleteBlog, getBlogLists } from "./thunk";
import { useHistory } from "react-router";
const queryString = require("query-string");

const ActionsButton = ({ selectedBlogs }) => {
    const dispatch = useAppDispatch();
    const deleteBlogSuccess = useAppSelector(selectDeleteBlogSuccess);
    const history = useHistory();

  const handleOnDeleteCLick = () => {       //  Handle single and multiple blogs delete actions
    const body = {
      id: selectedBlogs
    }
    dispatch(deleteBlog(body))
  };

  useEffect(() => {     //WATCHER FOR DELETE BLOG SUCCESS IF TRUE THEN DISPATCH GET BLOGS AGAIN 
    if (deleteBlogSuccess) dispatch(getBlogLists())
  }, [deleteBlogSuccess])

    const handleOnEditCLick = () => {
        console.log("edit button clicked");
        console.log(selectedBlogs);
        const id = selectedBlogs.length > 0 ? selectedBlogs[0] : 0;
        history.push({
            pathname: "/create-blog",
            state: id,
        });
        // console.log("handleOnEditCLick");
    };
    return (
        <>
            {selectedBlogs?.length > 0 && (
                <div className="action-buttons">
                    <div className="action-item">
                        {selectedBlogs?.length === 1 && (
                            <>
                                <EditButton className="edit-btn icon" onClick={handleOnEditCLick} />
                                <div className="label">Edit</div>
                            </>
                        )}
                    </div>
                    <div className="action-item">
                        <BsTrash className="delete-btn icon" onClick={handleOnDeleteCLick} />
                        <div className="label">Delete</div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ActionsButton;
