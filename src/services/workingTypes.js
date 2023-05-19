import axiosInstance from "~/axiosConfig";

export const apiGetWorkingTypes = async () => {
    try {
        const response = await axiosInstance({
            method: "get",
            url: "/api/v1/working-type/all",
        })
        return response;
    } catch (error) {
        return error
    }
}