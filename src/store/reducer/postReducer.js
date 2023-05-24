import actionType from '../action/actionTypes';
const initState = {
    msg: '',
    posts: [],
    count: 0,
    detailPost: null,
    postDataEdit: null,
};

const postReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.GET_POSTS:
            return {
                ...state,
                posts: action.posts || [],
                msg: action.msg || '',
            };
        case actionType.GET_POSTS_LIMIT:
            return {
                ...state,
                posts: action.posts || [],
                msg: action.msg || '',
                count: action.count || 0,
            };
        case actionType.SET_POSTS_NULL:
            return {
                ...state,
                detailPost: action.detailPost || null,
                msg: action.msg || '',
                count: action.count || 0,
            };
        case actionType.GET_POST_BY_ID:
            return {
                ...state,
                detailPost: action.detailPost || null,
                msg: action.msg || '',
            };
        case actionType.SET_POST_NULL:
            return {
                ...state,
                detailPost: action.detailPost || null,
                msg: action.msg || '',
            };
        case actionType.GET_POST_EDIT:
            return {
                ...state,
                postDataEdit: action.postDataEdit || null,
            };
        case actionType.SET_POST_EDIT_NULL:
            return {
                ...state,
                postDataEdit: action.postDataEdit || null,
            };
        default:
            return state;
    }
};
export default postReducer;
