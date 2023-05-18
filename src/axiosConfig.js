import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
});

instance.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    },
);

instance.interceptors.response.use(
    function (response) {
        // refresh token
        return response;
    },
    function (error) {
        return Promise.reject(error);
    },
);

export default instance;
