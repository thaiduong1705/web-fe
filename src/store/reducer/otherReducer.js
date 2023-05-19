import actionType from '../action/actionTypes';
const initState = {
    msg: '',
    careers: [],
    academicLevels: [],
    districts: [],
    positions: [],
    workingTypes: [],
};

const otherReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.GET_CAREER:
            return {
                ...state,
                careers: action.careers || [],
                msg: action.msg || '',
            };
        case actionType.GET_ACADEMIC_LEVEL:
            return {
                ...state,
                academicLevels: action.academicLevels || [],
                msg: action.msg || '',
            };
        case actionType.GET_DISTRICT:
            return {
                ...state,
                districts: action.districts || [],
                msg: action.msg || '',
            };
        case actionType.GET_POSITION:
            return {
                ...state,
                positions: action.positions || [],
                msg: action.msg || '',
            };
        case actionType.GET_WORKING_TYPE:
            return {
                ...state,
                workingTypes: action.workingTypes || [],
                msg: action.msg || '',
            };
        default:
            return state;
    }
};
export default otherReducer;
