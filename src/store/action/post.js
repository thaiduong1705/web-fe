import actionType from './actionTypes';
import { postAPI } from '~/services';
export const getPosts = () => async (dispatch) => {
    try {
        const response = await postAPI.apiGetAllPosts();
        if (response?.data.err === 0) {
            dispatch({
                type: actionType.GET_POSTS,
                posts: response?.data,
            });
        } else {
            dispatch({
                type: actionType.GET_POSTS,
                msg: response.message,
            });
        }
    } catch (error) {
        dispatch({
            type: actionType.GET_POSTS,
            posts: null,
        });
    }
};

export const getPostsLimit = (query) => async (dispatch) => {
    try {
        const response = await postAPI.apiGetPostLimit(query);
        if (response?.data.err === 0) {
            dispatch({
                type: actionType.GET_POSTS_LIMIT,
                posts: response.data.res,
                count: response.data.count,
            });
        } else {
            dispatch({
                type: actionType.GET_POSTS_LIMIT,
                msg: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionType.GET_POSTS_LIMIT,
            posts: null,
        });
    }
};

export const getPostById = (id) => async (dispatch) => {
    try {
        const response = await postAPI.apiGetPostById(id);
        if (response?.data.err === 0) {
            dispatch({
                type: actionType.GET_POST_BY_ID,
                detailPost: response.data,
            });
        } else {
            dispatch({
                type: actionType.GET_POST_BY_ID,
                msg: response.message,
            });
        }
    } catch (error) {
        dispatch({
            type: actionType.GET_POST_BY_ID,
            detailPost: null,
        });
    }
};

export const setDetailPostNull = () => (dispatch) => {
    dispatch({
        type: actionType.SET_POST_NULL,
        detailPost: null,
    });
};

export const setPostsToNull = () => (dispatch) => {
    dispatch({
        type: actionType.SET_POSTS_NULL,
        posts: [],
    });
};

export const editData = (id) => async (dispatch) => {
    try {
        const response = await postAPI.apiGetPostById(id);
        if (response?.data.err === 0) {
            dispatch({
                type: actionType.GET_POST_EDIT,
                postDataEdit: response.data,
            });
        } else {
            dispatch({
                type: actionType.GET_POST_EDIT,
                msg: response.message,
            });
        }
    } catch (error) {
        dispatch({
            type: actionType.GET_POST_EDIT,
            postDataEdit: null,
        });
    }
};

export const setEditDataNull = () => ({
    type: actionType.SET_POST_EDIT_NULL,
    postDataEdit: null,
});

export const getDeletedPosts = () => async (dispatch) => {
    try {
        const response = await postAPI.apiGetDeletedPosts();
        if (response?.data.err === 0) {
            dispatch({
                type: actionType.GET_DELETED_POST,
                posts: response?.data,
            });
        } else {
            dispatch({
                type: actionType.GET_DELETED_POST,
                msg: response.message,
            });
        }
    } catch (error) {
        dispatch({
            type: actionType.GET_DELETED_POST,
            posts: null,
        });
    }
};
