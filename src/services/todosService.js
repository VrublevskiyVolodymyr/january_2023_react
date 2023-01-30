import {axiosService} from "./axiosServise";

import {urls} from "../configs";

const todosService={
    getAll: () => axiosService.get(urls.todos),
    getById: (id) => axiosService.get(urls.todos+`/${id}`)
}
export {todosService}
