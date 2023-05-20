import actionType from './actionTypes';
import { careerAPI, districtAPI, positionAPI, academicLevelAPI, workingTypeAPI } from '~/services';

export const getCareers = () => async (dispatch) => {
    try {
        const response = await careerAPI.apiGetCareers();
        if (response?.data.err === 0) {
            dispatch({
                type: actionType.GET_CAREER,
                careers: response.data.res,
            });
        } else {
            dispatch({
                type: actionType.GET_CAREER,
                msg: response.data.msg,
                careers: null,
            });
        }
    } catch (error) {
        dispatch({
            type: actionType.GET_CAREER,
            careers: null,
        });
    }
};

export const getDistricts = () => async (dispatch) => {
    try {
        const response = await districtAPI.apiGetDistricts();
        if (response?.data.err === 0) {
            dispatch({
                type: actionType.GET_DISTRICT,
                districts: response.data.res,
            });
        } else {
            dispatch({
                type: actionType.GET_DISTRICT,
                msg: response.data.msg,
                districts: null,
            });
        }
    } catch (error) {
        dispatch({
            type: actionType.GET_DISTRICT,
            districts: null,
        });
    }
};

export const getAcademicLevels = () => async (dispatch) => {
    try {
        const response = await academicLevelAPI.apiGetAcademicLevels();
        if (response?.data.err === 0) {
            dispatch({
                type: actionType.GET_ACADEMIC_LEVEL,
                academicLevels: response.data.res,
            });
        } else {
            dispatch({
                type: actionType.GET_ACADEMIC_LEVEL,
                msg: response.data.msg,
                academicLevels: null,
            });
        }
    } catch (error) {
        dispatch({
            type: actionType.GET_ACADEMIC_LEVEL,
            academicLevels: null,
        });
    }
};

export const getPositions = () => async (dispatch) => {
    try {
        const response = await positionAPI.apiGetPositions();
        if (response?.data.err === 0) {
            dispatch({
                type: actionType.GET_POSITION,
                positions: response.data.res,
            });
        } else {
            dispatch({
                type: actionType.GET_POSITION,
                msg: response.data.msg,
                positions: null,
            });
        }
    } catch (error) {
        dispatch({
            type: actionType.GET_POSITION,
            positions: null,
        });
    }
};

export const getWorkingTypes = () => async (dispatch) => {
    try {
        const response = await workingTypeAPI.apiGetWorkingTypes();
        if (response?.data.err === 0) {
            dispatch({
                type: actionType.GET_WORKING_TYPE,
                workingTypes: response.data.res,
            });
        } else {
            dispatch({
                type: actionType.GET_WORKING_TYPE,
                msg: response.data.msg,
                workingTypes: null,
            });
        }
    } catch (error) {
        dispatch({
            type: actionType.GET_WORKING_TYPE,
            workingTypes: null,
        });
    }
};
