import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

const CreateBlogButton = () => {
    const handleCreateBlogCLick = () => {
        console.log("HANDLE CREATE BUTTON CALLED");
    };
    return (
        <div className="create-btn">
            <span className="side-text"> Your Blogs</span>
            <Link to={"/create-blog"}>
                <Button type="primary">Create New</Button>
            </Link>
        </div>
    );
};

export default CreateBlogButton;
