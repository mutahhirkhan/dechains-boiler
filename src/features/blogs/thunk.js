import { getBlogLists as getBlogListsAPI, deleteBlog as deleteBlogAPI } from "./service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBlogLists = createAsyncThunk("blog-list/get", async (qs) => {
    const response = await getBlogListsAPI(qs);
    return response.data;
});
export const deleteBlog = createAsyncThunk("delete-blog", async (body) => {
    console.log(body);
    const response = await deleteBlogAPI(body);
    return response.data;
});
