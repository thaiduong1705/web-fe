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
            res: null,
        });
    }
};
