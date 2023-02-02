import {axiosRequest} from '../utils/axiosConfig'
import {requestEndpoints} from '../endpoints'

const postsRequests={
    getAll: ()=> axiosRequest.get(requestEndpoints.posts)
}

export {postsRequests}
