import axios from "axios";
import {baseURL} from '../endpoints'

const axiosRequest=axios.create({baseURL})

export {axiosRequest}
