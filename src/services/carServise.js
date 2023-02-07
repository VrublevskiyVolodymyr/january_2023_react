import {apiService} from './apiServise'
import {urlsCars} from '../configs'

const carService = {
    getAll: () => apiService.get(urlsCars.cars.cars),
    create: (data) => apiService.post(urlsCars.cars, data),
    updateById: (id, data) => apiService.put(urlsCars.cars.byId(id), data),
    deleteById: (id) => apiService.delete(urlsCars.cars.byId(id))
}

export {carService}
