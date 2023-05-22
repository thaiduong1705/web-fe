import actionType from './actionTypes';
import { companyAPI } from '~/services';
export const getCompanies = () => async (dispatch) => {
    try {
        const response = await companyAPI.apiGetCompanies();
        if (response?.data.err === 0) {
            dispatch({
                type: actionType.GET_COMPANIES,
                companies: response?.data.res,
            });
        } else {
            dispatch({
                type: actionType.GET_COMPANIES,
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

export const getCompanyById = (id) => async (dispatch) => {
    try {
        const response = await companyAPI.apiGetCompany(id);
        if (response?.data.err === 0) {
            dispatch({
                type: actionType.GET_COMPANY_BY_ID,
                detailCompany: response.data.res,
            });
        } else {
            dispatch({
                type: actionType.GET_COMPANY_BY_ID,
                msg: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionType.GET_COMPANY_BY_ID,
            detailCompany: null,
        });
    }
};

export const getCompanyLimit = (query) => async (dispatch) => {
    try {
        const response = await companyAPI.apiGetCompanyLimit(query);
        if (response?.data.err === 0) {
            dispatch({
                type: actionType.GET_COMPANIES_LIMIT,
                companies: response.data.res,
                count: response.data.count,
            });
        } else {
            dispatch({
                type: actionType.GET_COMPANIES_LIMIT,
                msg: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionType.GET_COMPANIES_LIMIT,
            companies: null,
        });
    }
};

export const setDetailCompanyNull = () => (dispatch) => {
    dispatch({
        type: actionType.SET_COMPANY_NULL,
        detailCompany: null,
    });
};

export const setCompaniesToNull = () => (dispatch) => {
    dispatch({
        type: actionType.SET_COMPANIES_NULL,
        companies: [],
    });
};
