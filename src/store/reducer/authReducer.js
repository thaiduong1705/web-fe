import actionType from '../action/actionTypes';

const initState = {
    isLoggedIn: false,
    token: null,
    msg: '',
    update: false,
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                token: action.token,
                msg: '',
            };
        case actionType.LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                msg: action.msg,
                token: null,
                update: !state.update,
            };
        case actionType.LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                token: null,
                msg: '',
            };
        default:
            return state;
    }
};

export default authReducer;
