import React, { useState, useEffect, useContext } from "react";
import { Upload, Modal } from "antd";
import { BlogContext } from "../../BlogContext/BlogContext";
import { CloseCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { showWarningMessage } from "../../utils/message";
import { showTempImgFromBaseURL, toBase64 } from "./../../utils/helper";

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
    const { blogState, blogActions } = useContext(BlogContext); //ye as a connect function kaam krrha he

    const [tempImgArray, setTempImgArray] = useState([]);

    useEffect(() => {
        async function getBlobUrl() {
            var temp = blogState?.photo.map((ph) => toBase64(ph));

            const res = await Promise.all([...temp]);
            setTempImgArray([...res]);
        }
        getBlobUrl();
    }, [blogState?.photo]);

    const pictureListBeforeUploadV2 = (file) => {
        const payload = [...blogState?.photo, file]
        blogActions.updateBlogDetails({ photo: payload })
    };

    const removeImage = (index) => {
        if (index !== undefined) {
            const updatedPhotos = blogState?.photo.filter((item, i) => i != index);
            blogActions.updateBlogDetails({ photo: updatedPhotos })
        }
    };

    return (
        <>
            <div className="antd-col image-uploader-section">
                {[0, 1, 2, 3, 4].map((el, i) => (
                    <div className="upload-wrapper">
                        {tempImgArray?.[i] ? (
                            <div className="avatar-upload">
                                <div className="photo-square">
                                    {tempImgArray.length > 0 && <img src={tempImgArray[i]} alt="" />}
                                    <CloseCircleOutlined className="button" onClick={() => removeImage(i)} />
                                </div>
                            </div>
                        ) : (
                            <Upload
                                accept=".jpg, .jpeg, .png"
                                multiple={false}
                                beforeUpload={pictureListBeforeUploadV2}
                                showUploadList={false}>
                                <div className="avatar-upload">
                                    <div className="photo-square">
                                        <PlusOutlined className="button" />
                                    </div>
                                </div>
                            </Upload>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};

export default CreateBlogGalleryUpload;
