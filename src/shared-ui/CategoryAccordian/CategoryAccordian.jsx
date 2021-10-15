import React, { useEffect, useState, useContext } from "react";
import { Collapse, Select, Input, Form } from "antd";
import { BlogContext } from "../../BlogContext/BlogContext";
import { filterOption } from "../../utils/helper";
const CategoryAccordian = () => {
    const { blogState, blogActions } = useContext(BlogContext); //ye as a connect function kaam krrha he
    const [addCategory, setCategory] = useState(false);
    const [categoryName, setCategoryName] = useState("");
    const [subCategoryName, setSubCategoryName] = useState("");
    // const [categoriesOptions, setCategoriesOptions] = useState([]);
    const { Panel } = Collapse;
    const { Option } = Select;
    const [categoryAccordianForm] = Form.useForm();
    const callback = (key) => {
        // console.log(key);
    };
    function handleChange(value, sub) {
        // console.log("sub- > ", sub);
        // console.log(value);
        blogActions.updateBlogDetails(value);
        if (!sub && value.blogsCategoryId) {
            categoryAccordianForm.resetFields(["blogsSubCategoryId"]);
            blogActions.getSubCategories(value.blogsCategoryId);
        }
    }
    useEffect(() => {
        // console.log(blogState);
        // setCategoriesOptions(blogState?.categories);
    }, [blogState]);
    return (
        <Collapse onChange={callback} expandIconPosition={"right"}>
            <Panel header="Categories" key="2">
                {/* <label htmlFor="defaultCategory">Existing Category</label> */}
                <br />
                <Form form={categoryAccordianForm}>
                    <Form.Item
                        // rules={Rules.requiredRule}
                        label="Existing Category"
                        name="blogsCategoryId"
                        className="defaultCategory"
                        // valuePropName="data"
                    >
                        <Select
                            showSearch
                            getPopupContainer={(trigger) => trigger.parentNode}
                            name="blogsCategoryId"
                            allowClear={true}
                            defaultValue={blogState.blogsCategoryId ? blogState.blogsCategoryId : null}
                            className="defaultCategory"
                            placeholder="Select"
                            allowClear={true}
                            onClear={() => {
                                categoryAccordianForm.resetFields(["blogsSubCategoryId"]);
                                categoryAccordianForm.resetFields(["blogsCategoryId"]);
                            }}
                            // onSearch={(value) => blogActions.getCategories(value)}
                            filterOption={(input, option) => filterOption(input, option)}
                            onChange={(value) => handleChange({ blogsCategoryId: value }, false)}>
                            {blogState?.categories?.map((category, index) => (
                                <Option key={index} value={category?.id}>
                                    {category?.title}
                                </Option>
                            ))}
                            {/* <Option value="Jobsmideast">Jobsmideast</Option> */}
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Sub Category"
                        name="blogsSubCategoryId"
                        className="defaultSubCategory"
                        // rules={Rules.requiredRule}
                    >
                        <Select
                            showSearch
                            getPopupContainer={(trigger) => trigger.parentNode}
                            name="blogsSubCategoryId"
                            className="defaultSubCategory"
                            placeholder="Select"
                            defaultValue={blogState.blogsSubCategoryId ? blogState.blogsSubCategoryId : null}
                            filterOption={(input, option) => filterOption(input, option)}
                            onChange={(value) => {
                                handleChange({ blogsSubCategoryId: value }, true);
                            }}>
                            {blogState?.subCategories?.map((sub, index) => (
                                <Option key={index} value={sub?.id}>
                                    {sub?.title}
                                </Option>
                            ))}
                            {/* <Option value="Jobsmideast">Jobsmideast</Option>
                            <Option value="Paz Tafrishi">Paz Tafrishi</Option> */}
                        </Select>
                    </Form.Item>
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
                                    handleChange({ newCategory: value }, true);
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
                                    handleChange({ newSubCategory: value }, true);
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
                </Form>
            </Panel>
        </Collapse>
    );
};
export default CategoryAccordian;