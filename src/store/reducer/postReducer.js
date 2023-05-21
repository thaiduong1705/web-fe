import actionType from '../action/actionTypes';
const initState = {
    msg: '',
    posts: [],
    count: 0,
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
        default:
            return state;
    }
};
export default postReducer;
