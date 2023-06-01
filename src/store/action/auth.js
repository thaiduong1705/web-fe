import actionType from './actionTypes';
import { apiLogin } from '~/services/auth';

export const login = (payload) => async (dispatch) => {
    try {
        const response = await apiLogin(payload);
        if (response?.data?.err === 0) {
            dispatch({
                type: actionType.LOGIN_SUCCESS,
                token: response.data.token,
            });
        } else {
            dispatch({
                type: actionType.LOGIN_FAIL,
                token: response.data.msg,
                msg: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionType.LOGIN_FAIL,
            token: null,
        });
    }
};

export const logout = () => {
    return {
        type: actionType.LOGOUT,
    };
};
