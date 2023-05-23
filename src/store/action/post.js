import actionType from './actionTypes';
import { postAPI } from '~/services';
export const getPosts = () => async (dispatch) => {
    try {
        const response = await postAPI.apiGetJobItem();
        if (response?.data.err === 0) {
            dispatch({
                type: actionType.GET_POSTS,
                posts: response?.data.res,
            });
        } else {
            dispatch({
                type: actionType.GET_POSTS,
                msg: response.data.msg,
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
        const response = await postAPI.apiGetPost(id);
        if (response?.data.err === 0) {
            dispatch({
                type: actionType.GET_POST_BY_ID,
                detailPost: response.data.res,
            });
        } else {
            dispatch({
                type: actionType.GET_POST_BY_ID,
                msg: response.data.msg,
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

export const editData = (dataEdit) => ({
    type: actionType.GET_POST_EDIT,
    postDataEdit: dataEdit,
});

export const setEditDataNull = () => ({
    type: actionType.SET_POST_EDIT_NULL,
    postDataEdit: null,
});
