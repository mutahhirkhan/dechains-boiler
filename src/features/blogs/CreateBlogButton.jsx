import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Link } from "react-router-dom";

const CreateBlogButton = () => {
    return (
        <div className="create-btn">
            <span className="side-text"> Your Blogs</span>
            <Link to={"/create-blog"}>
                <Button type="primary" >Create New</Button>
            </Link>

        </div>
    );
};

export default CreateBlogButton;
