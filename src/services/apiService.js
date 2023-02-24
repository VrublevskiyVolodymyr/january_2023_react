import axios from "axios";
// import {createBrowserHistory} from "history";

import {baseURL, access} from "../configs";

// const history = createBrowserHistory();
const apiService = axios.create({baseURL})

apiService.interceptors.request.use((config)=>{
        config.headers.Authorization = `Bearer ${access}`
    return config
})


export {apiService}
