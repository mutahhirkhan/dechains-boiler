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

var blogReducer = (state, actions) => {
    var { type, payload } = actions;
    switch (type) {
        case UPDATE_BLOG_DETAILS:
            return {
                ...state,
                ...payload,
            };
        case SET_ALL_CATEGORIES:
            return {
                ...state,
                categories: [...payload],
            };
        case SET_ALL_AUTHORS:
            return {
                ...state,
                authors: [...payload],
            };
        case SET_ALL_SUB_CATEGORIES:
            return {
                ...state,
                subCategories: [...payload],
            };
        case BLOG_POST_LOADING:
            return {
                ...state,
                ...payload,
            };
        default:
            return state;
    }
};

export default blogReducer;
