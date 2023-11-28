import actionType from './actionTypes';
import { apiLogin } from '~/services/auth';

export const login = (payload) => async (dispatch) => {
    console.log(payload);
    try {
        const response = await apiLogin(payload);
        console.log(response);

        if (response?.status === 200) {
            dispatch({
                type: actionType.LOGIN_SUCCESS,
                token: response.data.accessToken,
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
