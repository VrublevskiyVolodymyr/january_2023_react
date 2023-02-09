import {apiService} from "./apiService";
import {urlsCars} from "../configs";

const userService = {
    create: (user)=>apiService.post(urlsCars.users, user)
}
export {
    userService
}
