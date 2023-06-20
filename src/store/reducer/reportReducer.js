import actionType from '../action/actionTypes';
const initState = {
    msg: '',
    reports: null,
};

const reportReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.GET_REPORT:
            return {
                ...state,
                reports: action.reports || [],
                msg: action.msg || '',
            };
        default:
            return state;
    }
};
export default reportReducer;
