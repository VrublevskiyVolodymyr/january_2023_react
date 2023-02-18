import {apiService} from './apiService'
import {urls} from "../configs";


const moviesService = {
    getAll: (page) => apiService.get(urls.movies, {params: {page}}),
    getGenres: () => apiService.get(urls.genres),
    searchMovie:(title) => `search/keyword?query=${title}`,
    getPoster: (backdrop_path)=> `${backdrop_path}`
}

export {moviesService}
