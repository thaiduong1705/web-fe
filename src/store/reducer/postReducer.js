import actionType from '../action/actionTypes';
const initState = {
    msg: '',
    posts: [],
    count: 0,
    detailPost: null,
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
        case actionType.GET_POST_BY_ID:
            return {
                ...state,
                detailPost: action.detailPost || [],
                msg: action.msg || '',
            };
        case actionType.SET_POST_NULL:
            return {
                ...state,
                detailPost: action.detailPost || [],
                msg: action.msg || '',
            };
        default:
            return state;
    }
};
export default postReducer;
