
import {axiosService} from "./axiosServise";
import {urls} from "../configs";

const userService={

    getAll: ()=>axiosService.get(urls.users),

    getById: (id)=>axiosService.get(urls.users +`${id}`),

    create: (newUser)=>axiosService.post(urls.users,{newUser})
}
export {userService}

