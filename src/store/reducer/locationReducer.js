import actionType from '../action/actionTypes';
const initState = {
    msg: '',
    provinces: [], //Tỉnh thành
    districts: [], //Quận huyện
    wards: [],
    msg: '',
};

const locationReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.GET_PROVINCES:
            return {
                ...state,
                provinces: action.provinces,
                msg: action.msg || ""
            }
        case actionType.GET_PROVINCE_DISTRICTS:
            return {
                ...state,
                districts: action.districts,
                msg: action.msg || ""
            }
        case actionType.GET_DISTRICT_WARDS:
            return {
                ...state,
                wards: action.wards,
                msg: action.msg || ""
            }
        default:
            return state,
    }
}

export default locationReducer