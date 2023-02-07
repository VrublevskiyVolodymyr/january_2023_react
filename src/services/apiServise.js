import axios from "axios";

import {baseURLCars} from '../configs'

const apiService=axios.create({baseURLCars})

export {apiService}
