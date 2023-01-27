
import {axiosService} from "./axiosServise";

import {urls} from "../configs";

const commentService = {
    getAll: () => axiosService.get(urls.comments),
    getById: (id) => axiosService.get(`${urls.comments}/${id}`)
}

export {commentService}
