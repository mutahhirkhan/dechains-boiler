import React, { useState,useEffect, useContext } from "react";
import CreateBlog from "../createBlog/CreateBlog";
import PreviewBlog from "../previewBlog/PreviewBlog";
import BlogProvider from "../../BlogContext/BlogContext";

const NewBlog = () => {
    const [isCreateVisible, setIsCreateVisible] = useState(true);
    
    return (
        <>
            <BlogProvider>{isCreateVisible ? <CreateBlog setIsCreateVisible={setIsCreateVisible}/> : <PreviewBlog  />}</BlogProvider>
        </>
    );
};

export default NewBlog;
