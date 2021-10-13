import React, { useState, useEffect, useContext } from "react";
import { Collapse, Select } from "antd";
import { BlogContext } from "./../../BlogContext/BlogContext";

const TagsAccordian = () => {
    const { blogState, blogActions } = useContext(BlogContext); //ye as a connect function kaam krrha he
    const [tags, setTags] = useState(null);
    const { Panel } = Collapse;


    const callback = (key) => {
        console.log(key);
    };
    const handleChange = (value) => {
        setTags(value.tags);
        blogActions.updateBlogDetails(value);
    };

    return (
        <Collapse defaultActiveKey={["3"]} onChange={callback} expandIconPosition={"right"}>
            <Panel header="Tags" key="3">
                <div>
                    <label htmlFor="education">Add tags +</label>
                    <br />
                    <Select
                        //getPopupContainer={(trigger) => trigger.parentNode}
                        name="education"
                        open={false}
                        maxTagCount={"responsive"}
                        mode="tags"
                        // listHeight={128}
                        className="education"
                        placeholder="Eduaction"
                        onChange={(value) => handleChange({ blogsTag: value })}></Select>
                </div>
                <div className="tags">
                    {tags?.map((tag) => (
                        <span className="tag">{tag}</span>
                    ))}
                </div>
            </Panel>
        </Collapse>
    );
};

export default TagsAccordian;
