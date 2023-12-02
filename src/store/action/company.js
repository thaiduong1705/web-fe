import actionType from './actionTypes';
import { companyAPI } from '~/services';
export const getCompanies = () => async (dispatch) => {
    try {
        const response = await companyAPI.apiGetAllCompanies();
        console.log(response);
        if (response?.data.err === 0) {
            dispatch({
                type: actionType.GET_COMPANIES,
                companies: response?.data,
            });
        } else {
            dispatch({
                type: actionType.GET_COMPANIES,
                msg: response.message,
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
        const response = await companyAPI.apiGetCompanyById(id);
        if (response?.data.err === 0) {
            dispatch({
                type: actionType.GET_COMPANY_BY_ID,
                detailCompany: response.data,
            });
        } else {
            dispatch({
                type: actionType.GET_COMPANY_BY_ID,
                msg: response.message,
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
    // try {
    //     const response = await companyAPI.apiGetCompanyLimit(query);
    //     if (response?.data.err === 0) {
    //         dispatch({
    //             type: actionType.GET_COMPANIES_LIMIT,
    //             companies: response.data.res,
    //             count: response.data.count,
    //         });
    //     } else {
    //         dispatch({
    //             type: actionType.GET_COMPANIES_LIMIT,
    //             msg: response.data.msg,
    //         });
    //     }
    // } catch (error) {
    //     dispatch({
    //         type: actionType.GET_COMPANIES_LIMIT,
    //         companies: null,
    //     });
    // }
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

export const editCompanyData = (id) => async (dispatch) => {
    try {
        const response = await companyAPI.apiGetCompanyById(id);
        if (response?.data.err === 0) {
            dispatch({
                type: actionType.GET_COMPANY_EDIT,
                companyDataEdit: response.data,
            });
        } else {
            dispatch({
                type: actionType.GET_COMPANY_EDIT,
                msg: response.message,
            });
        }
    } catch (error) {
        dispatch({
            type: actionType.GET_COMPANY_EDIT,
            companyDataEdit: null,
        });
    }
};

export const setEditCompanyDataNull = () => ({
    type: actionType.SET_COMPANY_EDIT_NULL,
    companyDataEdit: null,
});
