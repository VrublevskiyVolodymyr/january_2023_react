import {axiosService} from "./axiosServise";

const postService = {
    getByID: (id) => axiosService.get(`/posts/${id}`),
    getAll: () => axiosService.get('/posts')
}
export {postService}
