import React, { createContext, useReducer } from "react";
import blogReducer from "./BlogReducer";
import {
    ADD_STATUS,
    ADD_CATEGORY,
    ADD_TAG,
    BLOG_DETAILS,
    UPDATE_BLOG_DETAILS,
    PREVIEW_BLOG,
    SET_ALL_CATEGORIES,
    SET_ALL_SUB_CATEGORIES,
} from "./BlogConstants";
import axios from "axios";
import { getCategories, getSubCategories } from "../features/createBlog/service";

export const BlogContext = createContext(); //ye themeContext chezen provide karega, idhar se hoti vi aengi

const initialState = {
    categories: [],
    subCategories: [],
    isCreateVisible: true,
    visibility: null,
    publish: null,
    link: "",
    authors: [],
    authorName: null,
    authorBio: null,
    authorImage: null,
    defaultCategory: null,
    defaultSubCategory: null,
    newCategory: null,
    newSubCategory: null,
    tags: [],
    blogBanner: {},
    blogTitle: "",
    blogSubTitle: "",
    blogDescription: "",
    blogImgaes: [],
};

const BlogProvider = ({ children }) => {
    const [blogState, dispatch] = useReducer(blogReducer, initialState);

    const actions = {
        getCategories: async (payload) => {
            try {
                const { data } = await getCategories(payload);
                // console.log(data);
                // const categories = { categories: data };
                dispatch({ type: SET_ALL_CATEGORIES, payload: data });
            } catch (error) {
                console.log(error);
            }
        },
        getSubCategories: async (id) => {
            try {
                // console.log("sub categories");
                const { data } = await getSubCategories(id);
                console.log(data);
                dispatch({ type: SET_ALL_SUB_CATEGORIES, payload: data });
                // SET_ALL_SUB_CATEGORIES
            } catch (error) {
                console.log(error);
            }
        },
        updateBlogDetails: (data) => {
            // admin/superman/v1/blogs-category/list?page=1&limit=100
            console.log(data);
            return dispatch({ type: UPDATE_BLOG_DETAILS, payload: { ...data } });
        },

        // setCustomTheme: (theme) =>
        //   dispatch({ type: CUSTOM_THEME, payload: { theme } }),
    };
    return (
        //   ye as a provider kaam krrha he
        <BlogContext.Provider value={{ blogState, blogActions: actions }}>{children}</BlogContext.Provider>
    );
};

export default BlogProvider;
