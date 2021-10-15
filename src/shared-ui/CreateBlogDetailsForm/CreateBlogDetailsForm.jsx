import React, { useState, useEffect, useContext } from "react";
import { Input, Button } from "antd";
import { Form } from "antd";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import "./_CreateBlogDetailsForm.scss";
import CreateBlogGalleryUpload from "../CreateBlogGalleryUpload/CreateBlogGalleryUpload";
import { BlogContext } from "../../BlogContext/BlogContext";

const CreateBlogDetailsForm = ({ setIsCreateVisible }) => {
    const [title, setTitle] = useState("");
    const { blogState, blogActions } = useContext(BlogContext); //ye as a connect function kaam krrha he
    const [subTitle, setSubTitle] = useState("");
    const [errorFlag, setErrorFlag] = useState(false);

    const containsForbiddenCharacters = (text) => {
        let isDirty = false;
        const pattern = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
        if (pattern.test(text)) return (isDirty = true);
    };

    function handleChange(value) {
        // console.log("component", value);
        blogActions.updateBlogDetails(value);
        // dispatch(addStatus(value));
    }
    // const onPhotoChange = (file, className) => {
    //     // const { file } = info;
    //     // const { originFileObj } = file;
    //     // authorImage
    //     blogActions.updateBlogDetails({ authorImage: file });

    //     console.log(file, className);
    //     //send this to redux
    //     // showTempImgFromBaseURL(file, className);
    //     // getBase64(originFileObj, (imageUrl) => setAuthorPhoto(imageUrl));
    // };

    return (
        <div className="create-blog-details-form">
            <Form className="create-blog-form">
                <Form.Item label="Title" name="title">
                    <Input
                        name="title"
                        className="create-blog-title"
                        type="text"
                        // value={title}
                        defaultValue={blogState.title ? blogState.title : title}
                        onChange={({ target: { value } }) => {
                            handleChange({ title: value });
                            setTitle(value);
                        }}
                        // placeholder="Blog "
                    />
                </Form.Item>
                <Form.Item name="content" label="Sub Title">
                    <Input
                        className="create-blog-sub-title"
                        type="text"
                        name="content"
                        // value={subTitle}
                        defaultValue={blogState.content ? blogState.content : subTitle}
                        onChange={({ target: { value } }) => {
                            handleChange({ content: value });
                            setSubTitle(value);
                        }}
                        // placeholder="Blog "
                    />
                </Form.Item>
                <Form.Item
                    // rules={Rules.requiredRule}
                    label="Blog Description"
                    name="description"
                    className="checking-ck"
                    valuePropName="data"
                    getValueFromEvent={(event, editor) => {
                        const data = editor.getData();
                        if (containsForbiddenCharacters(data)) setErrorFlag(true);
                        else if (errorFlag) setErrorFlag(false);
                        return data;
                    }}>
                    <CKEditor
                        activeClass="editor"
                        id="ck-content"
                        name="blogDescription"
                        data={blogState.description ? blogState.description : "<p>Remove this and add your description"}
                        editor={ClassicEditor}
                        config={{
                            toolbar: ["bold", "italic", "numberedList", "bulletedList"],
                        }}
                        onReady={(editor) => {}}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            handleChange({ description: data });
                            // console.log(event + "\n", editor + "\n", data);
                        }}
                    />
                </Form.Item>
                <Form.Item name="photo" label="Images">
                    <CreateBlogGalleryUpload />
                </Form.Item>
                <Form.Item name="preview">
                    <Button onClick={() => setIsCreateVisible(false)} type="primary">
                        Preview
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default CreateBlogDetailsForm;
