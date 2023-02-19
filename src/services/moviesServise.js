import {apiService} from './apiService'
import {urls} from "../configs";


const moviesService = {
    getAll: (page=1) => apiService.get(urls.movies, {params: {page}}),
    getGenres: () => apiService.get(urls.genres()),
    searchMovie:(title) => apiService.get(urls.search_movie(title))
}

export {moviesService}
