import actionType from './actionTypes';
import { companyAPI } from '~/services';
export const getCompanies = () => async (dispatch) => {
    try {
        const response = await companyAPI.apiGetCompanies();
        if (response?.data.err === 0) {
            dispatch({
                type: actionType.GET_COMPANIES,
                companies: response.data.res,
            });
        } else {
            dispatch({
                type: actionType.GET_COMPANIES,
                companies: null,
                msg: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionType.GET_COMPANIES,
            companies: null,
        });
    }
};
