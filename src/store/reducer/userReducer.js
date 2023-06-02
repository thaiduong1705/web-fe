import actionType from '../action/actionTypes';

const initState = {
    currentUser: {},
};

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.GET_CURRENT:
            return {
                ...state,
                currentUser: action.currentUser || {},
            };
        case actionType.LOGOUT:
            return {
                ...state,
                currentUser: {},
            };
        default:
            return state;
    }
};
export default userReducer;
