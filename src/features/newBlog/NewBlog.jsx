import React, { useState, useEffect, useContext } from "react";
import CreateBlog from "../createBlog/CreateBlog";
import PreviewBlog from "../previewBlog/PreviewBlog";
import BlogProvider from "../../BlogContext/BlogContext";

const NewBlog = (props) => {
    const [isCreateVisible, setIsCreateVisible] = useState(true);

    // useEffect(() => {
    //     if(props?.location?.state) {

    //     }
    // },[])

    return (
        <>
            <BlogProvider>{isCreateVisible ? <CreateBlog setIsCreateVisible={setIsCreateVisible} /> : <PreviewBlog setIsCreateVisible={setIsCreateVisible} />}</BlogProvider>
        </>
    );
};

export default NewBlog;
