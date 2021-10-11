import React, { useState, useEffect, useContext } from "react";
import { Upload, message } from "antd";
import { showSuccessMessage, showErrorMessage } from "./../../utils/message";
import defaultBanner from "./../../assets/img/job-banner.png";

// import "./_CreateBlogBanner.scss";
import { showTempImgFromBaseURL } from "../../utils/helper";
import { BlogContext } from "../../BlogContext/BlogContext";

const CreateBlogBanner = () => {
    const { blogState, blogActions } = useContext(BlogContext); //ye as a connect function kaam krrha he
    const [tempBanner, setTempBanner] = useState(null);
    const { Dragger } = Upload;

    useEffect(() => {
        Object.keys(blogState.blogBanner).length && showTempImgFromBaseURL(blogState.blogBanner, setTempBanner);
    }, []);
    const blogBannerBeforeUpload = (file, setTempBanner) => {
        if (file) {
            //send this file to redux
            blogActions.updateBlogDetails({ blogBanner: file });
            showTempImgFromBaseURL(file, setTempBanner);
        }
    };

    const onRemove = (file) => {
        if (file) {
            blogActions.updateBlogDetails({ blogBanner: {} });

            setTempBanner(null);
        } else return null;
    };

    return (
        <>
            <Dragger
                className="upload-blog-container"
                accept=".jpg, .jpeg, .png"
                tooltipVisible={false}
                maxCount={1}
                onRemove={onRemove}
                beforeUpload={(file) => blogBannerBeforeUpload(file, setTempBanner)}>
                <img className="upload-blog-banner" src={tempBanner ?? defaultBanner} alt="Banner" />

                <p className="ant-upload-text">
                    <span disabled>Upload your company banner </span>
                    <span style={{ color: "#5271ff" }}>browse</span>
                </p>
            </Dragger>
        </>
    );
};

export default CreateBlogBanner;
