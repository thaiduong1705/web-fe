import actionType from '../action/actionTypes';
const initState = {
    msg: '',
    companies: [],
    count: 0,
};

const companyReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.GET_COMPANIES:
            return {
                ...state,
                companies: action.companies || [],
                msg: action.msg || '',
                count: action.count || 0,
            };
        default:
            return state;
    }
};
export default companyReducer;
