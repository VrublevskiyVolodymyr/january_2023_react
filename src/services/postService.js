import {axiosService} from "./axiosServise";
import {urls} from "../configs";

const postService={

    getAllByID: (id)=>axiosService.get(urls.users +`/${id}/posts`),

    create: (newPost)=>axiosService.post(urls.posts,{newPost})
}
export {postService}
