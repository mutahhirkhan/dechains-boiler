import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    visibility: null,
    publish: null,
    link: "",
    authors: [],
    authorName: null,
    authorBio: null,
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

// Y E   S L I C E   K U C H   B H I   N H I   K R T A

export const slice = createSlice({
    name: "createBlog",
    initialState,
    reducers: {
        addStatus: (state, action) => {
            const { visibility, publish, link, authors, authorBio, value } = action.payload;
            if (visibility) state.visibility = value;
            else if (publish) state.publish = value;
            else if (link) state.link = value;
            else if (authorBio) state.authorBio = value;
            else state.authorName = value;
            return {};
        },
        addCategory: (state, action) => {
            const { defaultCategory, defaultSubCategory, newCategory, newSubCategory, value } = action.payload;
            if (defaultCategory) state.defaultCategory = value;
            else if (defaultSubCategory) state.defaultSubCategory = value;
            else if (newCategory) state.newCategory = value;
            else state.newSubCategory = value;
        },
        addTag: (state, action) => {
            state.tags = action.payload;
        },
        blogDetails: (state, action) => {
            const { blogBanner, value } = action.payload;
            console.log(value);
            if (blogBanner) state.blogBanner = value;
        },
    },
    extraReducers: (builder) => {},
});

export const { addStatus, addCategory, addTag, blogDetails } = slice.actions;

export default slice.reducer;
