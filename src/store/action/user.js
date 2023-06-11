import actionType from './actionTypes';
import { apiGetCurrent } from '~/services/user';

export const getCurrent = () => async (dispatch) => {
    try {
        const response = await apiGetCurrent();
        if (response.data?.err === 0) {
            dispatch({
                type: actionType.GET_CURRENT,
                currentUser: response.data.res,
            });
        } else {
            dispatch({
                type: actionType.GET_CURRENT,
                msg: response.data.msg,
                currentUser: null,
            });
            dispatch({
                type: actionType.LOGOUT,
            });
        }
    } catch (error) {
        dispatch({
            type: actionType.GET_CURRENT,
            msg: error,
            currentUser: null,
        });
        dispatch({
            type: actionType.LOGOUT,
        });
    }
};
