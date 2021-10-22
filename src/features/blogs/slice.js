import { createSlice, isPending, isRejected } from "@reduxjs/toolkit";
import { getBlogLists, deleteBlog } from "./thunk";

const thunks = [getBlogLists, deleteBlog];

const initialState = {
    status: "idle",
    blogs: [],
    deleteBlogSuccess: false,
};

export const slice = createSlice({
    name: "blogs",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getBlogLists.fulfilled, (state, action) => {
            state.status = "idle";
            state.blogs = action.payload;
        })
        .addCase(deleteBlog.fulfilled, (state) => {
            state.status = "idle";
            state.deleteBlogSuccess = true;
        })
            .addMatcher(isPending(...thunks), (state) => {
                state.status = "loading";
                state.deleteBlogSuccess = false;
            })
            .addMatcher(isRejected(...thunks), (state) => {
                state.status = "failed";
                state.deleteBlogSuccess = false;
            });
    },
});

export const selectStatus = (state) => state.blogs.status === "loading";
export const selectBlogsList = (state) => state.blogs.blogs;
export const selectDeleteBlogSuccess = (state) => state.blogs.deleteBlogSuccess;

// export const { getSignup } = slice.actions;

export default slice.reducer;
