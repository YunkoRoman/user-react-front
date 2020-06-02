import axios from 'axios'
import {baseUrl} from '../constants/AppUrl'

class RestaurantService {
    getPosts = () => axios.get(`${baseUrl}/restaurants`);
    getProducts = (resId) => axios.get(`${baseUrl}/restaurants/menu/${resId}`)
}

export default new RestaurantService()
