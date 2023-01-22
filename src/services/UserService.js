
import {axiosService} from "./AxiosServise";

const userService={

    getAll: ()=>axiosService.get('/users'),

    getById: (id)=>axiosService.get(`/users/${id}`),
}
export {userService}
