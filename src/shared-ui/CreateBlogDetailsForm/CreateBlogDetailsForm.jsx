import React, { useState } from "react";
import { Input, Button } from "antd";
import { Form } from "antd";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./_CreateBlogDetailsForm.scss";
import CreateBlogGalleryUpload from "../CreateBlogGalleryUpload/CreateBlogGalleryUpload";

const CreateBlogDetailsForm = () => {
    const [title, setTitle] = useState("");
    const [subTitle, setSubTitle] = useState("");
    const [errorFlag, setErrorFlag] = useState(false);

    const containsForbiddenCharacters = (text) => {
        let isDirty = false;
        console.log("changed", text);
        // const forbiddenText = ["www", "http://", "https://", "@"];
        // forbiddenText.forEach((element) => {
        //   if (text.indexOf(element) > -1) isDirty = true;
        // });
        const pattern = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
        if (pattern.test(text)) return (isDirty = true);
    };

    return (
        <div className="create-blog-details-form">
            <Form className="create-blog-form">
                <Form.Item name="title">
                    <Input
                        className="create-blog-title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        // placeholder="Blog "
                    />
                </Form.Item>
                <Form.Item name="sub-title">
                    <Input
                        className="create-blog-sub-title"
                        type="text"
                        value={subTitle}
                        onChange={(e) => setSubTitle(e.target.value)}
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
                        id="ck-content"
                        name="description"
                        editor={ClassicEditor}
                        config={{
                            toolbar: ["bold", "italic", "numberedList", "bulletedList"],
                        }}
                        onReady={(editor) => {}}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            // console.log({ event, editor, data });
                        }}
                    />
                </Form.Item>
                <Form.Item name="images" label="Images">
                    <CreateBlogGalleryUpload />
                </Form.Item>
                <Form.Item name="preview">
                    <Button type="primary">Preview</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default CreateBlogDetailsForm;
