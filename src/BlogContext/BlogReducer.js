import { ADD_STATUS, ADD_CATEGORY, ADD_TAG, BLOG_DETAILS, UPDATE_BLOG_DETAILS, PREVIEW_BLOG } from "./BlogConstants";

var blogReducer = (state, actions) => {
    var { type, payload } = actions;
    switch (type) {
        case UPDATE_BLOG_DETAILS:
            return {
                ...state,
                ...payload,
            };
        default:
            return state;
    }
};

export default blogReducer;
