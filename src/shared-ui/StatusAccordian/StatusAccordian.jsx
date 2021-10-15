import React, { useState, useEffect, useContext } from "react";
import { Collapse, Select, Input, Button, Upload } from "antd";
import { showSuccessMessage } from "./.././../utils/message";
import defaultAuthorImg from "./../../assets/img/user.png";
import { isObjectFilled } from "../../utils/helper";

import Modal from "../Modal/Modal";
import { showTempImgFromBaseURL, filterOption } from "../../utils/helper";
import "./_StatusAccordian.scss";
import { PlusOutlined } from "@ant-design/icons";
import { BlogContext } from "./../../BlogContext/BlogContext";
import { showWarningMessage } from "../../utils/message";

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

const StatusAccordian = ({ selectedBlog }) => {
    // console.log("props from left");
    // console.log(selectedBlog);
    const { blogState, blogActions } = useContext(BlogContext); //ye as a connect function kaam krrha he
    const [addAuthorModalShow, setAddAuthorModalShow] = useState(false);
    const [authorImage, setAuthorImage] = useState(null);

    const [link, setLink] = useState("");
    const [newAuthorName, setNewAuthorName] = useState("");
    const [newAuthorBio, setNewAuthorBio] = useState("");
    const { Panel } = Collapse;
    const { Option } = Select;
    const { TextArea } = Input;

    function handleChange(value) {
        // console.log(value);
        blogActions.updateBlogDetails(value);
    }
    const onPhotoChange = (file, className) => {
        //send this to redux
        blogActions.updateBlogDetails({ authorImage: file });
        showTempImgFromBaseURL(file, setAuthorImage);
    };
    const handleAuthorPost = async () => {
        if (!newAuthorBio || !blogState.authorImage || !newAuthorName) {
            showWarningMessage("Please fill out every field");
        } else {
            const authorImage = blogState.authorImage;
            const payload = { newAuthorBio, authorImage, newAuthorName };
            const res = await blogActions.postAuthor(payload);
            if (res === true) {
                setAddAuthorModalShow(false);
                blogActions.getAuthors();
            }
        }
    };

    useEffect(() => {
        if (blogState.authorImage) {
            showTempImgFromBaseURL(blogState.authorImage, setAuthorImage);
        }
    }, []);
    useEffect(() => {
        console.log(blogState);
    }, [blogState]);

    const selectStatus = () => {
        if (selectedBlog?.isPublic) return "Public";
        else if (selectedBlog?.isPublic === false) return "Private";
        else if (blogState?.isPublic) return "Public";
        else if (blogState?.isPublic === false)return "Private";
        else  return null
    };

    return (
        <Collapse defaultActiveKey={["3"]} expandIconPosition={"right"}>
            <Panel className="status" header="Status & Visibility" key="1">
                <label>Visibility</label>
                <br />
                <Select
                    showSearch
                    getPopupContainer={(trigger) => trigger.parentNode}
                    className="visibility"
                    name="isPublic"
                    defaultValue={selectStatus()}
                    placeholder="select publication type"
                    filterOption={(input, option) => filterOption(input, option)}
                    onChange={(value) => {
                        if (value == "Public") {
                            console.log(value);
                            handleChange({ isPublic: true });
                        } else if (value == "Private") {
                            console.log(value);
                            handleChange({ isPublic: false });
                        }
                    }}>
                    <Option value={"Public"}>Public</Option>
                    <Option value={"Private"}>Private</Option>
                </Select>
                <br />
                <br />
                <label>Publish</label>
                <br />
                <Select
                    showSearch
                    getPopupContainer={(trigger) => trigger.parentNode}
                    className="publish"
                    name="status"
                    value={selectedBlog?.status ? selectedBlog?.status : blogState.status ? blogState.status : null}
                    placeholder={"Select publish type"}
                    filterOption={(input, option) => filterOption(input, option)}
                    onChange={(value) => handleChange({ status: value })}>
                    <Option value={"PUBLISHED"}>PUBLISHED</Option>
                    <Option value={"DRAFT"}>DRAFT</Option>
                </Select>
                <br />
                <br />

                {/* <label>Share Link</label>
                <br />
                <Input
                    className="share-link"
                    type="url"
                    name="link"
                    value={link}
                    onChange={({ target: { value } }) => {
                        handleChange({ link: value });
                        setLink(value);
                    }}
                    placeholder="Share link"
                    addonAfter={<CopiedIcon link={link} />}
                /> */}
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
                    showSearch
                    getPopupContainer={(trigger) => trigger.parentNode}
                    className="author"
                    name="blogAuthorId"
                    placeholder={"Select author"}
                    filterOption={(input, option) => filterOption(input, option)}
                    defaultValue={isObjectFilled(selectedBlog?.blogAuthor) ? selectedBlog?.blogAuthor?.id :  blogState.blogAuthorId ? blogState.blogAuthorId : null}
                    onChange={(value) => handleChange({ blogAuthorId: value })}>
                    {blogState?.authors?.map((author, index) => (
                        <Option key={index} value={author.id}>
                            {author.name}
                        </Option>
                    ))}
                    {/* <Option value={1}>Jobsmideast</Option>
                    <Option value={2}>Paz Tafrishi</Option> */}
                </Select>
            </Panel>
            <Modal
                backdropClassName="connect-modal-backdrop"
                className="center connect-modal"
                show={addAuthorModalShow}
                onHide={() => setAddAuthorModalShow(false)}>
                {/* {console.log(blogState.authorImage)}
                {console.log(blogState.authorImage ? true : false)} */}
                <img className="author-img" src={authorImage ?? defaultAuthorImg} width={"100px"} height={"100px"} />
                {/* <img
                    className="author-img"
                    src={
                        
                        blogState.authorImage
                            ? showTempImgFromBaseURL(blogState.authorImage, ".author-img")
                            : require("./../../assets/img/user.png")
                    }
                    width={"100px"}
                    height={"100px"}
                /> */}
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
                <div className="">
                    <label htmlFor="newAuthorName">Name</label>
                    <br />
                    <Input
                        className="new-author-name"
                        type="text"
                        name="newAuthorName"
                        value={newAuthorName}
                        onChange={({ target: { value } }) => {
                            handleChange({ authorName: value });
                            setNewAuthorName(value);
                        }}
                        placeholder="Author name"
                        // addonAfter={<CopiedIcon link={link} />}
                    />
                    <label htmlFor="newAuthorBio">About me</label>
                    <br />
                    <TextArea
                        name="authorBio"
                        value={newAuthorBio}
                        onChange={({ target: { value } }) => {
                            handleChange({ authorBio: value });
                            setNewAuthorBio(value);
                        }}
                        rows={4}
                    />
                    <Button
                        onClick={handleAuthorPost}
                        // loading={isLoading}
                        // className="light"
                        type="primary">
                        {" "}
                        Save
                    </Button>
                </div>
            </Modal>
        </Collapse>
    );
};

export default StatusAccordian;
/**
 * 
 *
    if : value ? novalue 
    : value ? novalue 
    : value ? novalue
    : value ? novalue

*/
