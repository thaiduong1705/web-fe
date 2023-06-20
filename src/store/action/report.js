import actionType from './actionTypes';
import { reportAPI } from '~/services';

export const getReports = () => async (dispatch) => {
    try {
        const response = await reportAPI.apiGetReport();
        if (response?.data.err === 0) {
            dispatch({
                type: actionType.GET_REPORT,
                reports: response?.data.res,
            });
        } else {
            dispatch({
                type: actionType.GET_REPORT,
                msg: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionType.GET_REPORT,
            reports: null,
        });
    }
};
