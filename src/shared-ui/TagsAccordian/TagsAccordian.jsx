import React, { useState, useEffect } from "react";
import { Collapse, Select } from "antd";

const TagsAccordian = () => {
    const [tags, setTags] = useState(null);
    const { Panel } = Collapse;

    useEffect(() => {
        console.log(tags);
    }, [tags]);

    const callback = (key) => {
        console.log(key);
    };
    const handleChange = (value) => setTags(value);

    return (
        <Collapse onChange={callback} expandIconPosition={"right"}>
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
                        onChange={handleChange}></Select>
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
