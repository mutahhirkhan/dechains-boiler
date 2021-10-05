import React from "react";
import StatusAccordian from "../../shared-ui/StatusAccordian/StatusAccordian";
import CategoryAccordian from "../../shared-ui/CategoryAccordian/CategoryAccordian";
import TagsAccordian from "../../shared-ui/TagsAccordian/TagsAccordian";

const CreateBlogLeft = () => {
    return (
        <div>
            <StatusAccordian />
            <CategoryAccordian />
            <TagsAccordian />
        </div>
    );
};

export default CreateBlogLeft;
