import actionType from './actionTypes';
import { careerAPI, positionAPI, academicLevelAPI, workingTypeAPI } from '~/services';

export const getCareers = () => async (dispatch) => {
    try {
        const response = await careerAPI.apiGetAllCareers();
        console.log(response);
        if (response?.data.err === 0) {
            dispatch({
                type: actionType.GET_CAREER,
                careers: response.data,
            });
        } else {
            dispatch({
                type: actionType.GET_CAREER,
                msg: response.message,
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

export const getAcademicLevels = () => async (dispatch) => {
    try {
        const response = await academicLevelAPI.apiGetAcademicLevels();
        console.log(response);
        if (response?.data.err === 0) {
            dispatch({
                type: actionType.GET_ACADEMIC_LEVEL,
                academicLevels: response.data,
            });
        } else {
            dispatch({
                type: actionType.GET_ACADEMIC_LEVEL,
                msg: response.message,
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
        const response = await positionAPI.apiGetAllPositions();
        if (response?.data.err === 0) {
            dispatch({
                type: actionType.GET_POSITION,
                positions: response.data,
            });
        } else {
            dispatch({
                type: actionType.GET_POSITION,
                msg: response.message,
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
                workingTypes: response.data,
            });
        } else {
            dispatch({
                type: actionType.GET_WORKING_TYPE,
                msg: response.message,
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
