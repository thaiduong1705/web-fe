import axiosInstance from "~/axiosConfig";

export const apiGetPositions = async () => {
    try {
        const response = await axiosInstance({
            method: "get",
            url: "/api/v1/position/all",
        })
        return response;
    } catch (error) {
        return error
    }
}