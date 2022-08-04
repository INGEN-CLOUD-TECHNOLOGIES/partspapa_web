import axios from 'axios'
// import NProgress from "vue-nprogress";
// import Vue from "vue";
import LocalStorageService from "./token";
// import router from "../../router";


// Vue.use(NProgress)

// const nprogress = new NProgress()

// const baseURL = process.env.VUE_APP_ROOT_API;
const baseURL = 'http://127.0.0.1:9000';
// const baseURL = 'https://partspapa.herokuapp.com';

const getAPI = axios.create({
    baseURL: baseURL,
    timeout: 9000000,
})

export { getAPI }


// LocalstorageService
const localStorageService = LocalStorageService.getService();

// Add a request interceptor
getAPI.interceptors.request.use(
    config => {
        const token = localStorageService.getAccessToken()
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        return config
    },
    error => {
        Promise.reject(error)
    });



//Add a response interceptor

getAPI.interceptors.response.use(
    (response) => {
        return response;
    },
    async function (error) {
        const originalRequest = error.config;
        if (
            error.response.status === 401 &&
            originalRequest.url === `${baseURL}/auth-token/`
        ) {
            router.push("/login");
            return Promise.reject(error);
        }

        if (error.response.status === 403) {
            originalRequest._retry = true;
            const refreshToken = localStorageService.getRefreshToken();
            try {
                const res = await axios.post(`${baseURL}/api-token-refresh/`, { refresh: refreshToken });
                if (res.status === 200) {
                    localStorageService.setToken(res.data);
                    getAPI.defaults.headers.common["Authorization"] =
                        "Bearer " + localStorageService.getAccessToken();
                    return getAPI(originalRequest);
                } else {
                    localStorageService.clearToken()
                    router.push("/login");
                }
            } catch (error) {
                localStorageService.clearToken();
                router.push("/login");
                return Promise.reject(error);
            }
        }

        // if (error.response.status === 404) {
        //     console.log('404')
        // }

        return Promise.reject(error);
    }
);
