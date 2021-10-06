import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    visibility: null,
    publish: null,
    link: "",
    authors: [],
    defaultCategory: null,
    defaultSubCategory: null,
    newCategory: null,
    newSubCategory: null,
    tags: [],
};

export const slice = createSlice({
    name: "createBlog",
    initialState,
    reducers: {
        addStatus: (state, action) => {
            const { visibility, publish, link, authors, value } = action.payload;
            if (visibility) state.visibility = value;
            else if (publish) state.publish = value;
            else if (link) state.link = value;
            else state.authors = value;
        },
        addCategory: (state, action) => {
            const { payload } = action;
            const { name, value } = payload;
            state = {
                ...initialState,
                name: value,
            };
        },
        addTag: (state, action) => {
            const { payload } = action;
            const { name, value } = payload;
            state = {
                ...initialState,
                name: value,
            };
        },
    },
    extraReducers: (builder) => {},
});

export const { addStatus } = slice.actions;

export default slice.reducer;

// payload = {name:"visibility",value:"hello"}
// dispatchEvent(addStatus({name:"authors", value:[1,2,3]}))

// authors:[]
