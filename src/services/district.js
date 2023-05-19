import axiosInstance from "~/axiosConfig";

export const apiGetDistricts = async () => {
    try {
        const response = await axiosInstance({
            method: "get",
            url: "/api/v1/district/all",
        })
        return response;
    } catch (error) {
        return error
    }
}