import React, { useState, useContext } from "react";
import { Collapse, Select, Input } from "antd";
import { BlogContext } from '../../BlogContext/BlogContext';

const CategoryAccordian = () => {
    const { blogState, blogActions } = useContext(BlogContext); //ye as a connect function kaam krrha he
    const [addCategory, setCategory] = useState(false);
    const [categoryName, setCategoryName] = useState("");
    const [subCategoryName, setSubCategoryName] = useState("");
    const { Panel } = Collapse;
    const { Option } = Select;

    const callback = (key) => {
        console.log(key);
    };
    function handleChange(value) {
        console.log(value);
        blogActions.updateBlogDetails(value);
    }
    return (
        <Collapse onChange={callback} expandIconPosition={"right"}>
            <Panel header="Categories" key="2">
                <label htmlFor="defaultCategory">Existing Category</label>
                <br />
                <Select
                    showSearch
                    getPopupContainer={(trigger) => trigger.parentNode}
                    name="defaultCategory"
                    className="defaultCategory"
                    placeholder="Select"
                    onChange={(value) => handleChange({ defaultCategory:  value })}>
                    <Option value="Jobsmideast">Jobsmideast</Option>
                </Select>
                <br />
                <br />

                <label htmlFor="existing-sub-category">Sub Category</label>
                <br />
                <Select
                    showSearch
                    getPopupContainer={(trigger) => trigger.parentNode}
                    name="defaultSubCategory"
                    className="defaultSubCategory"
                    placeholder="Select"
                    onChange={(value) => handleChange({ defaultSubCategory:value })}>
                    <Option value="Jobsmideast">Jobsmideast</Option>
                    <Option value="Paz Tafrishi">Paz Tafrishi</Option>
                </Select>

                {!addCategory && (
                    <div style={{ cursor: "pointer" }} onClick={() => setCategory(!addCategory)} className="add-new-category">
                        Add new +{" "}
                    </div>
                )}

                {addCategory && (
                    <>
                        <Input
                            className="category-name"
                            type="text"
                            name="newCategory"
                            value={categoryName}
                            onChange={({ target: { value } }) => {
                                handleChange({ newCategory: value });
                                setCategoryName(value);
                            }}
                            placeholder="Category name"
                        />
                        <Input
                            className="sub-category-name"
                            type="text"
                            name="newSubCategory"
                            value={subCategoryName}
                            onChange={({ target: { value } }) => {
                                handleChange({ newSubCategory:  value });
                                setSubCategoryName(value);
                            }}
                            placeholder="Sub Category name"
                        />
                        <div
                            style={{ cursor: "pointer" }}
                            onClick={() => setCategory(!addCategory)}
                            className="add-new-category clear-new-category">
                            Clear Category -{" "}
                        </div>
                    </>
                )}
            </Panel>
        </Collapse>
    );
};

export default CategoryAccordian;
