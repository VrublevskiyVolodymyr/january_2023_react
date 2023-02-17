import {apiService} from './apiService'
import {urls} from "../configs";


const moviesService = {
    getAll: (page) => apiService.get(urls.movies,{params:{page}}),



    // create: (data) => apiService.post(urlsCars.cars.cars, data),
    // updateById: (id, data) => apiService.put(urlsCars.cars.byId(id), data),
    // deleteById: (id) => apiService.delete(urlsCars.cars.byId(id))
}

export {moviesService}
