import actionType from './actionTypes';
import { candidateAPI } from '~/services';
export const getCandidates = () => async (dispatch) => {
    try {
        const response = await candidateAPI.apiGetCandidates();
        console.log(response);
        if (response?.data.err === 0) {
            dispatch({
                type: actionType.GET_CANDIDATES,
                candidates: response?.data.res,
            });
        } else {
            dispatch({
                type: actionType.GET_CANDIDATES,
                msg: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionType.GET_CANDIDATES,
            data: null,
        });
    }
};
