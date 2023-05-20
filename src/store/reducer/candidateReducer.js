import actionType from '../action/actionTypes';
const initState = {
    msg: '',
    candidates: [],
};

const candidateReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.GET_CANDIDATES:
            console.log(action);
            return {
                ...state,
                candidates: action.candidates || [],
                msg: action.msg || '',
            };
        default:
            return state;
    }
};
export default candidateReducer;
