import React, { useState, useEffect } from "react";
import { Collapse, Select, Input, Button, Upload } from "antd";
import { showSuccessMessage } from "./.././../utils/message";
import { useAppDispatch } from "../../store/hooks";
import { addStatus } from "../../features/createBlog/slice";
import Modal from "../Modal/Modal";
import { getBase64, UploadButton } from "../CreateBlogGalleryUpload/CreateBlogGalleryUpload";
import { showTempImgFromBaseURL } from "../../utils/helper";
import "./_StatusAccordian.scss";
import { PlusOutlined } from "@ant-design/icons";

function CopiedIcon({ link }) {
    return (
        <img
            width={"12px"}
            onClick={() => {
                navigator.clipboard.writeText(link);
                showSuccessMessage("Link copied to clipboard");
            }}
            src={require("./../../assets/img/icons/Copy.svg")}
        />
    );
}

const StatusAccordian = () => {
    const [addAuthorModalShow, setAddAuthorModalShow] = useState(false);
    const [authorPhoto, setAuthorPhoto] = useState("");
    const [link, setLink] = useState("");
    const { Panel } = Collapse;
    const { Option } = Select;
    const dispatch = useAppDispatch();

    function handleChange(value) {
        dispatch(addStatus(value));
    }
    const onPhotoChange = (file, className) => {
        // const { file } = info;
        // const { originFileObj } = file;
        console.log(file, className);
        //send this to redux
        showTempImgFromBaseURL(file, className);
        // getBase64(originFileObj, (imageUrl) => setAuthorPhoto(imageUrl));
    };

    return (
        <Collapse defaultActiveKey={["1"]} expandIconPosition={"right"}>
            <Panel className="status" header="Status & Visibility" key="1">
                <label>Visibility</label>
                <br />

                <Select
                    getPopupContainer={(trigger) => trigger.parentNode}
                    className="visibility"
                    name="visibility"
                    defaultValue="Public"
                    onChange={(value) => handleChange({ visibility: "visibility", value: value })}>
                    <Option value="Public">Public</Option>
                    <Option value="Private">Private</Option>
                </Select>
                <br />
                <br />
                <label>Publish</label>
                <br />
                <Select
                    getPopupContainer={(trigger) => trigger.parentNode}
                    className="publish"
                    name="publish"
                    defaultValue="Immediately1"
                    onChange={(value) => handleChange({ publish: "publish", value: value })}>
                    <Option value="Immediately1">Immediately1</Option>
                    <Option value="Immediately2">Immediately2</Option>
                </Select>
                <br />
                <br />

                <label>Share Link</label>
                <br />
                <Input
                    className="share-link"
                    type="url"
                    name="link"
                    value={link}
                    onChange={({ target: { value } }) => {
                        handleChange({ link: "link", value: value });
                        setLink(value);
                    }}
                    placeholder="Share link"
                    addonAfter={<CopiedIcon link={link} />}
                />
                <br />
                <br />
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <label>Author</label>
                    <p onClick={() => setAddAuthorModalShow(true)} style={{ cursor: "pointer" }}>
                        Add new +
                    </p>
                </div>
                <br />
                <Select
                    getPopupContainer={(trigger) => trigger.parentNode}
                    className="author"
                    name="authors"
                    defaultValue="Jobsmideast"
                    onChange={(value) => handleChange({ authors: "authors", value: value })}>
                    <Option value="Jobsmideast">Jobsmideast</Option>
                    <Option value="Paz Tafrishi">Paz Tafrishi</Option>
                </Select>
            </Panel>
            <Modal backdropClassName="connect-modal-backdrop" className="center connect-modal" show={addAuthorModalShow}>
                <img className="author-img" src={require("./../../assets/img/user.png")} width={"100px"} height={"100px"} />
                <Upload
                    accept="image/*"
                    listType="picture-card"
                    // beforeUpload={beforeUploadImage}
                    showUploadList={false}
                    accept=".png, .jpg, .jpeg"
                    maxCount={1}
                    className="author-image-upload"
                    beforeUpload={(file) => onPhotoChange(file, ".author-img")}
                    // onChange={onPhotoChange}
                    multiple={false}>
                    <PlusOutlined />
                </Upload>
                <div className="btn-row">
                    <Button
                        onClick={() => setAddAuthorModalShow(false)}
                        // className="grey"
                        type="primary">
                        {" "}
                        Cancel
                    </Button>
                    <Button
                        // onClick={handleConnectByEmployer}
                        // loading={isLoading}
                        // className="light"
                        type="primary">
                        {" "}
                        Confirm
                    </Button>
                </div>
            </Modal>
        </Collapse>
    );
};

export default StatusAccordian;
