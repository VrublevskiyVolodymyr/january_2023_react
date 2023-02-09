import {axiosService} from "./axiosServise";

const userServise = {
    getAll: () => axiosService.get('/users'),
    getById: (id) => axiosService.get(`/users/${id}`),
}
export {userServise}
