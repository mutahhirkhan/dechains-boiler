import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Link } from "react-router-dom";
import PreviewStaticContent from '../../shared-ui/PreviewContainer/PreviewStaticContent';

const CreateBlogButton = () => {
    const [visible, setVisible] = useState(false);
    const handleCreateBlogCLick = () => {
        console.log("HANDLE CREATE BUTTON CALLED");
    };
    return (
        <div className="create-btn">
            <span className="side-text"> Your Blogs</span>
            <Link to={"/create-blog"}>
                <Button type="primary" >Create New</Button>
            </Link>

            <Button type="primary" onClick={() => setVisible(true)} >Open</Button>
            <Modal
                title="Modal 1000px width"
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                width={1000}
            >
                <PreviewStaticContent />
            </Modal>
        </div>
    );
};

export default CreateBlogButton;
