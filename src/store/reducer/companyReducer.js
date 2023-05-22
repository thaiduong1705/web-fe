import actionType from '../action/actionTypes';
const initState = {
    msg: '',
    companies: [],
    count: 0,
    detailCompany: null,
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
        case actionType.GET_COMPANY_BY_ID:
            return {
                ...state,
                detailCompany: action.detailCompany || null,
                msg: action.msg || '',
            };
        case actionType.SET_COMPANY_NULL:
            return {
                ...state,
                detailCompany: action.detailCompany || null,
                msg: action.msg || '',
            };
        case actionType.GET_COMPANIES_LIMIT:
            return {
                ...state,
                companies: action.companies || [],
                msg: action.msg || '',
                count: action.count || 0,
            };
        case actionType.SET_COMPANIES_NULL:
            return {
                ...state,
                companies: action.companies || [],
                msg: action.msg || '',
            };
        default:
            return state;
    }
};
export default companyReducer;
