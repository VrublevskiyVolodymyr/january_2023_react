
import {axiosService} from "./axiosServise";
import {urls} from "../configs";

  const albumService= {
      getAll: () => axiosService.get(urls.albums),
      getById: (id) => axiosService.get(urls.albums +`/${id}`)
}

export {albumService}
