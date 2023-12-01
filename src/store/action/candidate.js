import actionType from './actionTypes';
import { candidateAPI } from '~/services';

export const getCandidates = () => async (dispatch) => {
    try {
        const response = await candidateAPI.apiGetCandidates();
        if (response?.data.err === 0) {
            dispatch({
                type: actionType.GET_CANDIDATES,
                allCandidates: response?.data,
            });
        } else {
            dispatch({
                type: actionType.GET_CANDIDATES,
                msg: response.message,
            });
        }
    } catch (error) {
        dispatch({
            type: actionType.GET_CANDIDATES,
            allCandidates: null,
        });
    }
};

export const getCandidateById = (id) => async (dispatch) => {
    try {
        const response = await candidateAPI.apiGetCandidate(id);
        console.log(response);
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

export const editCandidateData = (id) => async (dispatch) => {
    try {
        const response = await candidateAPI.apiGetCandidate(id);
        if (response?.data.err === 0) {
            dispatch({
                type: actionType.GET_CANDIDATE_EDIT,
                candidateDataEdit: response.data,
            });
        } else {
            dispatch({
                type: actionType.GET_CANDIDATE_EDIT,
                msg: response.message,
            });
        }
    } catch (error) {
        dispatch({
            type: actionType.GET_CANDIDATE_EDIT,
            companyDataEdit: null,
        });
    }
};

export const setEditCandidateDataNull = () => ({
    type: actionType.SET_CANDIDATE_EDIT_NULL,
    companyDataEdit: null,
});

export const setAllCandidatesNull = () => ({
    type: actionType.SET_ALL_CANDIDATES_NULL,
    allCandidates: [],
});
