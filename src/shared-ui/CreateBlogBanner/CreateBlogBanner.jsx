import React, { useState, useEffect } from "react";
import { Upload, message } from "antd";
import { InboxOutlined, PlusOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { showSuccessMessage, showErrorMessage } from "./../../utils/message";
import { getBase64 } from "../CreateBlogGalleryUpload/CreateBlogGalleryUpload";
import "./_CreateBlogBanner.scss";
import { showTempImgFromBaseURL } from "../../utils/helper";

const CreateBlogBanner = () => {
    const { Dragger } = Upload;

    const blogBannerBeforeUpload = (file, className) => {
        if (file) {
            showTempImgFromBaseURL(file, className);
        } 
    };

    const onRemove = (file) => {
        if (file) document.querySelector(".upload-blog-banner").src = "";
        else return null;
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
