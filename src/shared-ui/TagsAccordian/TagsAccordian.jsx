import React, { useState, useEffect, useContext } from "react";
import { Collapse, Select } from "antd";
import { BlogContext } from "./../../BlogContext/BlogContext";

const TagsAccordian = ({ selectedBlog }) => {
    const { blogState, blogActions } = useContext(BlogContext); //ye as a connect function kaam krrha he
    const [tags, setTags] = useState(null);
    const [editTags, setEditTags] = useState([]);
    const { Panel } = Collapse;
    const { Options } = Select;

    useEffect(() => {
        let tempTags = [];
        if (selectedBlog?.blogsTag?.length > 0) {
            selectedBlog.blogsTag.forEach((tag, index) => tempTags.push(tag.title));
        }
        blogActions.updateBlogDetails({ blogsTag: tempTags });
    }, [selectedBlog?.blogsTag]);

    const callback = (key) => {
        // console.log(key);
    };
    const handleChange = (value) => {
        console.log(value);
        setTags(value.tags);
        blogActions.updateBlogDetails(value);
    };
    const forEditTags = () => {
        let tempTags = [];
        if (selectedBlog?.blogsTag?.length > 0) {
            selectedBlog.blogsTag.forEach((tag, index) => tempTags.push(tag.title));
        }
        return tempTags;

        // setEditTags([...tempTags])
    };

    return (
        <Collapse defaultActiveKey={["3"]} onChange={callback} expandIconPosition={"right"}>
            <Panel header="Tags" key="3">
                <div>
                    <label htmlFor="education">Add tags +</label>
                    <br />
                    <Select
                        getPopupContainer={(trigger) => trigger.parentNode}
                        name="blogsTag"
                        open={false}
                        maxTagCount={"responsive"}
                        mode="tags"
                        value={blogState.blogsTag ? blogState.blogsTag : null}
                        listHeight={128}
                        className="education"
                        placeholder="Add the tags that rank your blog"
                        onChange={(value) => handleChange({ blogsTag: value })}></Select>
                </div>
                <div className="tags">
                    {blogState.blogsTag.length
                        ? blogState.blogsTag?.map((tag, index) => (
                              <span key={index} className="tag">
                                  {tag}
                              </span>
                          ))
                        : tags?.map((tag, index) => (
                              <span key={index} className="tag">
                                  {tag}
                              </span>
                          ))}
                </div>
            </Panel>
        </Collapse>
    );
};

export default TagsAccordian;
