import axios from 'axios'
import {baseUrl} from '../constants/AppUrl'

class RestaurantService {
    getPosts = () => axios.get(`${baseUrl}/restaurants`)
}

export default new RestaurantService()
