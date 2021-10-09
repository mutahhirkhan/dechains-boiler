import React, { useState, useEffect, useContext } from "react";
import { Upload, message } from "antd";
import { showSuccessMessage, showErrorMessage } from "./../../utils/message";

import "./_CreateBlogBanner.scss";
import { showTempImgFromBaseURL } from "../../utils/helper";
import { BlogContext } from "../../BlogContext/BlogContext";

const CreateBlogBanner = () => {
    const { blogState, blogActions } = useContext(BlogContext); //ye as a connect function kaam krrha he
    const { Dragger } = Upload;

    const blogBannerBeforeUpload = (file, className) => {
        if (file) {
            //send this file to redux
            blogActions.updateBlogDetails({ blogBanner: file });
            showTempImgFromBaseURL(file, className);
        }
    };

    const onRemove = (file) => {
        if (file) {
            blogActions.updateBlogDetails({ blogBanner: {} });

            document.querySelector(".upload-blog-banner").src = "";
        } else return null;
    };

    return (
        <>
            <Dragger
                accept=".jpg, .jpeg, .png"
                tooltipVisible={false}
                maxCount={1}
                onRemove={onRemove}
                beforeUpload={(file) => blogBannerBeforeUpload(file, ".upload-blog-banner")}>
                <img className="upload-blog-banner" src={``} alt="Banner" />

                <p className="ant-upload-text">
                    <span disabled>Upload your company banner </span>
                    <span style={{ color: "#5271ff" }}>browse</span>
                </p>
            </Dragger>
        </>
    );
};

export default CreateBlogBanner;
