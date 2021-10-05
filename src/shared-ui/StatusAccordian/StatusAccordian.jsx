import React, { useState } from "react";
import { Collapse, Select, Input } from "antd";
import { showSuccessMessage } from "./.././../utils/message";
import { useAppDispatch } from "../../store/hooks";
import { addStatus } from "../../features/createBlog/slice";

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
    const [link, setLink] = useState("");
    const { Panel } = Collapse;
    const { Option } = Select;
    const dispatch = useAppDispatch();

    function handleChange(value) {
        dispatch(addStatus(value));
    }

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
                <label>Author</label>
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
        </Collapse>
    );
};

export default StatusAccordian;
