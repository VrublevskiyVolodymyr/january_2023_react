import axios from "axios";
import {createBrowserHistory} from "history";

import {baseURL} from "../configs";
import {authService} from "./authService";

const history = createBrowserHistory();
const apiService = axios.create({baseURL})

apiService.interceptors.request.use((config)=>{
    if (authService.isAuthenticated()) {
        const access = authService.getAccessToken();
        config.headers.Authorization = `Bearer ${access}`
    }
    return config
})

let isRefreshing = false

apiService.interceptors.response.use((config)=>{
    return config
    },
    async (error) => {
    const refresh = authService.getRefreshToken();

    if (error.response?.status === 401 && refresh && !isRefreshing){
        isRefreshing = true

        try {
          await  authService.refresh(refresh);
        }catch (e){
          authService.deleteToken()
            history.replace('/login?expSession=true')
        }
        isRefreshing=false;
        return apiService(error.config)
    }
    return Promise.reject(error)
    }
)
export {apiService, history}
