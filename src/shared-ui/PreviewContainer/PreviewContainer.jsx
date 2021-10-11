import React, { useContext } from "react";
import { BlogContext } from "../../BlogContext/BlogContext";
import { Button } from 'antd';
import PreviewStaticContent from './PreviewStaticContent';

const PreviewContainer = ({ setIsCreateVisible }) => {
    const { blogState, blogActions } = useContext(BlogContext); //ye as a connect function kaam krrha he
    console.log(blogState);
    return (
        <div className="container">

            <PreviewStaticContent />
            
            <div className="edit-post-blog-btns">
                <Button
                    className="edit-blog-btn"
                    onClick={() => setIsCreateVisible(true)}
                    type="default">Edit</Button>
                <Button type="primary">Post</Button>
            </div>
        </div>
    );
};

export default PreviewContainer;
