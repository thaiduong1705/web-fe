import actionType from '../action/actionTypes';
const initState = {
    msg: '',
    candidates: [],
    count: 0,
    detailCandidate: null,
    candidateDataEdit: null,
};

const candidateReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.GET_CANDIDATES:
            return {
                ...state,
                candidates: action.candidates || [],
                msg: action.msg || '',
            };
        case actionType.GET_CANDIDATES_LIMIT:
            return {
                ...state,
                candidates: action.candidates || [],
                msg: action.msg || '',
                count: action.count || 0,
            };
        case actionType.SET_CANDIDATES_NULL:
            return {
                ...state,
                candidates: action.candidates || [],
                msg: action.msg || '',
                count: action.count || 0,
            };
        case actionType.GET_CANDIDATE_BY_ID:
            return {
                ...state,
                detailCandidate: action.detailCandidate || null,
                msg: action.msg || '',
            };
        case actionType.SET_CANDIDATE_NULL:
            return {
                ...state,
                detailCandidate: action.detailCandidate || null,
                msg: action.msg || '',
            };
        case actionType.GET_CANDIDATE_EDIT:
            return {
                ...state,
                candidateDataEdit: action.candidateDataEdit || null,
            };
        case actionType.SET_CANDIDATE_EDIT_NULL:
            return {
                ...state,
                candidateDataEdit: action.candidateDataEdit || null,
            };
        default:
            return state;
    }
};
export default candidateReducer;
