import axiosInstance from "~/axiosConfig";

export const apiGetCareers = async () => {
    try {
        const response = await axiosInstance({
            method: "get",
            url: "/api/v1/career/all",
        })
        return response;
    } catch (error) {
        return error
    }
}