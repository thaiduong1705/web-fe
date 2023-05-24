import actionType from './actionTypes';
import { candidateAPI } from '~/services';

export const getCandidates = () => async (dispatch) => {
    try {
        const response = await candidateAPI.apiGetCandidates();
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
            companies: null,
        });
    }
};

export const getCandidateById = (id) => async (dispatch) => {
    try {
        const response = await candidateAPI.apiGetCandidate(id);
        if (response?.data.err === 0) {
            dispatch({
                type: actionType.GET_CANDIDATE_BY_ID,
                detailCandidate: response.data.res,
            });
        } else {
            dispatch({
                type: actionType.GET_CANDIDATE_BY_ID,
                msg: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionType.GET_CANDIDATE_BY_ID,
            detailCandidate: null,
        });
    }
};

export const getCandidateLimit = (query) => async (dispatch) => {
    try {
        const response = await candidateAPI.apiGetCandidateLimit(query);
        if (response?.data.err === 0) {
            dispatch({
                type: actionType.GET_CANDIDATES_LIMIT,
                candidates: response.data.res,
                count: response.data.count,
            });
        } else {
            dispatch({
                type: actionType.GET_CANDIDATES_LIMIT,
                msg: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionType.GET_CANDIDATES_LIMIT,
            candidates: null,
        });
    }
};

export const setDetailCandidateNull = () => (dispatch) => {
    dispatch({
        type: actionType.SET_CANDIDATE_NULL,
        detailCandidate: null,
    });
};

export const setCandidatesToNull = () => (dispatch) => {
    dispatch({
        type: actionType.SET_CANDIDATES_NULL,
        candidates: [],
    });
};
