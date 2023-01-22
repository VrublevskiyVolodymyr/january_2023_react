import {axiosService} from "./AxiosServise";

const postsService={

    getAllByID: (id)=>axiosService.get(`/users/${id}/posts`)
}
export {postsService}
