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
        case SET_ALL_SUB_CATEGORIES:
            return {
                ...state,
                subCategories: [...payload],
            };
        default:
            return state;
    }
};

export default blogReducer;
