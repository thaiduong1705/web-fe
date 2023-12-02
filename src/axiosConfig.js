import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
});

axiosInstance.interceptors.request.use(
    function (config) {
        const local =
            window.localStorage.getItem('persist:auth') && JSON.parse(window.localStorage.getItem('persist:auth'));
        const authState = {
            isLoggedIn: local.isLoggedIn,
            token: local.token,
        };
        if (authState) {
            config.headers.Authorization = `Bearer ${authState.token}`;
        }
        return config;
    },
    function (error) {
        console.log(error);
        return Promise.reject(error);
    },
);

axiosInstance.interceptors.response.use(
    function (response) {
        // Bất kì mã trạng thái nào nằm trong tầm 2xx đều khiến hàm này được trigger
        // Làm gì đó với dữ liệu response
        return response;
    },
    function (error) {
        // Bất kì mã trạng thái nào lọt ra ngoài tầm 2xx đều khiến hàm này được trigger\
        // Làm gì đó với lỗi response
        return Promise.reject(error);
    },
);

export default axiosInstance;
