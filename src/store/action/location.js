import actionType from './actionTypes';
import { locationAPI } from '~/services';

export const getListProvinces = async () => {
    try {
        const response = await locationAPI.getListProvinces();
        console.log(response);
        if (response?.data.err === 0) {
            dispatch({
                type: actionType.GET_PROVINCES,
                provinces: response?.data,
            });
        } else {
            dispatch({
                type: actionType.GET_PROVINCES,
                msg: response.message,
            });
        }
    } catch (error) {
        dispatch({
            type: actionType.GET_PROVINCES,
            provinces: null,
        });
    }
};

export const getProvinceDistricts = async (code) => {
    try {
        const response = await locationAPI.getProvinceDistricts(code);
        console.log(response);
        if (response?.data.err === 0) {
            dispatch({
                type: actionType.GET_PROVINCE_DISTRICTS,
                districts: response?.data.districts,
            });
        } else {
            dispatch({
                type: actionType.GET_PROVINCE_DISTRICTS,
                msg: response.message,
            });
        }
    } catch (error) {
        dispatch({
            type: actionType.GET_PROVINCE_DISTRICTS,
            districts: null,
        });
    }
};

export const getDistrictWards = async (code) => {
    try {
        const response = await locationAPI.getDistrictWards(code);
        console.log(response);
        if (response?.data.err === 0) {
            dispatch({
                type: actionType.GET_DISTRICT_WARDS,
                wards: response?.data.wards,
            });
        } else {
            dispatch({
                type: actionType.GET_DISTRICT_WARDS,
                msg: response.message,
            });
        }
    } catch (error) {
        dispatch({
            type: actionType.GET_DISTRICT_WARDS,
            wards: null,
        });
    }
};
