import React, { useState, useEffect, useContext } from "react";
import { Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { BlogContext } from "../../BlogContext/BlogContext";

export function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
}

export const UploadButton = (
    <div>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Upload</div>
    </div>
);

const CreateBlogGalleryUpload = () => {
    const [previewVisible, setPreviewVisible] = useState(false);
    const { blogState, blogActions } = useContext(BlogContext); //ye as a connect function kaam krrha he

    const [previewImage, setPreviewImage] = useState("");
    const [previewTitle, setPreviewTitle] = useState("");

    const handleCancel = () => setPreviewVisible(false);

    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewVisible(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf("/") + 1));
    };

    const handleChange = (files) => {
        let { fileList, file } = files;
        blogActions.updateBlogDetails({ blogImgaes: fileList });
    };

    return (
        <>
            <Upload
                // action={"https://www.mocky.io/v2/5cc8019d300000980a055e76"}
                listType="picture-card"
                fileList={blogState.blogImgaes}
                onPreview={handlePreview}
                onChange={handleChange}>
                {blogState.blogImgaes.length >= 5 ? null : UploadButton}
            </Upload>
            <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
                <img alt="gallery" style={{ width: "100%" }} src={previewImage} />
            </Modal>
        </>
    );
};

export default CreateBlogGalleryUpload;
