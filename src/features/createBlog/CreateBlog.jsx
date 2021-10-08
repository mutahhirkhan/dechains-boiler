import React from "react";
import CreateBlogLeft from "../../app-ui/CreateBlogLeft/CreateBlogLeft";
import CreateBlogRight from "../../app-ui/CreateBlogRight/CreateBlogRight";

const CreateBlog = ({setIsCreateVisible}) => {
    return (
      <div className="create-blog-container">
        <CreateBlogLeft />
        <CreateBlogRight setIsCreateVisible={setIsCreateVisible} />
      </div>
    )
};

export default CreateBlog;
