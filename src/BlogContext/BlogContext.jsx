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
    SET_ALL_AUTHORS,
    BLOG_POST_LOADING,
} from "./BlogConstants";
import axios from "axios";
import {
    getCategories,
    getSubCategories,
    uploadFile,
    uploadProfileImage,
    postAuthorAPI,
    getAuthors,
    getAuthorById,
    uploadMultiPics,
    postBlog,
} from "../features/createBlog/service";
import { isObjectFilled } from "../utils/helper";
import { useHistory } from 'react-router';

export const BlogContext = createContext(); //ye themeContext chezen provide karega, idhar se hoti vi aengi

const initialState = {
    categories: [],
    subCategories: [],
    isCreateVisible: true,
    isPublic: null,
    status: null,
    link: "",
    authors: [],
    blogAuthorId: null,
    authorBio: null,
    authorImage: null,
    blogsCategoryId: null,
    blogsSubCategoryId: null,
    newCategory: null,
    newSubCategory: null,
    blogsTag: [],
    bannerPhoto: {},
    title: "",
    content: "",
    description: "",
    photo: [],
    postAuthorLoading:false,
    postAuthorSuccess: false,
};

const BlogProvider = ({ children }) => {
    const history = useHistory()
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
                // console.log(data);
                dispatch({ type: SET_ALL_SUB_CATEGORIES, payload: data });
                // SET_ALL_SUB_CATEGORIES
            } catch (error) {
                console.log(error);
            }
        },
        getAuthors: async (payload) => {
            try {
                const { data } = await getAuthors(payload);
                console.log(data);
                dispatch({ type: SET_ALL_AUTHORS, payload: data });
            } catch (error) {
                console.log(error);
            }
        },
        updateBlogDetails: (data) => {
            // admin/superman/v1/blogs-category/list?page=1&limit=100
            // console.log(data);
            return dispatch({ type: UPDATE_BLOG_DETAILS, payload: { ...data } });
        },
        postAuthor: async (data) => {
            try {
                const payload = new FormData();
                payload.append("file", data.authorImage, data.authorImage.name);
                const params = {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                };
                const {
                    data: { url },
                } = await uploadProfileImage(payload, params);

                const authorPayload = { name: data.newAuthorName, aboutMe: data.newAuthorBio, displayPhoto: url };
                let authorRes;
                if (url) authorRes = await postAuthorAPI(authorPayload);
                return authorRes.status;
            } catch (error) {
                console.log(error);
            }
        },
        getAuthorById: async (id) => {
            try {
                return await getAuthorById(id);
            } catch (error) {
                console.log(error);
            }
        },
        uploadBannerAndImages: async () => {
            try {
                dispatch({type:BLOG_POST_LOADING, payload:{postAuthorLoading:true}})
                if (isObjectFilled(blogState.bannerPhoto) && blogState.photo.length > 0) {
                    let bannerPayload = new FormData();
                    bannerPayload.append("file", blogState.bannerPhoto);

                    var payload = new FormData();
                    blogState.photo.forEach((element) => {
                        payload.append("files", element.originFileObj);
                    });

                    const {url} = await uploadProfileImage(bannerPayload);
                    const { data } = await uploadMultiPics(payload);
                    console.log("multi image res");
                    console.log(data);

                    let photo = [];
                    data.forEach((el) => photo.push(el?.url));

                    const postBlogPayload = {
                        title: blogState.title,
                        photo: photo,
                        BlogsTag: blogState.blogsTag,
                        description: blogState.description,
                        bannerPhoto: url,
                        isPublic: blogState.isPublic,
                        status: blogState.status,
                        content: blogState.content,
                        blogsCategoryId: blogState.blogsCategoryId,
                        blogsSubCategoryId: blogState.blogsSubCategoryId,
                        blogAuthorId: blogState.blogAuthorId,
                    };
                    console.log("postBlogPayload");
                    console.log(postBlogPayload);
                    const res = await postBlog(postBlogPayload);
                    console.log("blog posted");
                    console.log(res);
                    dispatch({type:BLOG_POST_LOADING, payload:{postAuthorLoading:false, postAuthorSuccess:true}})
                    history.push("/blogs")
                }
                else{
                    console.log(isObjectFilled(blogState.bannerPhoto) , blogState.photo.length)
                }
            } catch (error) {
                dispatch({type:BLOG_POST_LOADING, payload:{postAuthorLoading:false, postAuthorSuccess:false}})
                console.log(error);
            }
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
