import actionType from '../action/actionTypes';
const initState = {
    msg: '',
    posts: [],
};

const postReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.GET_POSTS:
            return {
                ...state,
                posts: action.posts || [],
                msg: action.msg || '',
            };
        default:
            return state;
    }
};
export default postReducer;
