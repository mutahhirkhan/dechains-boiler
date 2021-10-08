import React, { createContext, useReducer } from "react";
import blogReducer from "./BlogReducer";
import { ADD_STATUS, ADD_CATEGORY, ADD_TAG, BLOG_DETAILS, UPDATE_BLOG_DETAILS, PREVIEW_BLOG } from "./BlogConstants";

export const BlogContext = createContext(); //ye themeContext chezen provide karega, idhar se hoti vi aengi

const initialState = {
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
        updateBlogDetails: (data) => dispatch({ type: UPDATE_BLOG_DETAILS, payload: { ...data } }),

        // setCustomTheme: (theme) =>
        //   dispatch({ type: CUSTOM_THEME, payload: { theme } }),
    };
    return (
        //   ye as a provider kaam krrha he
        <BlogContext.Provider value={{ blogState, blogActions: actions }}>{children}</BlogContext.Provider>
    );
};

export default BlogProvider;
