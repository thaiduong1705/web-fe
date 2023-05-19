import axiosInstance from "~/axiosConfig";

export const apiGetAcademicLevels = async () => {
    try {
        const response = await axiosInstance({
            method: "get",
            url: "/api/v1/academic-level/all",
        })
        return response;
    } catch (error) {
        return error
    }
}