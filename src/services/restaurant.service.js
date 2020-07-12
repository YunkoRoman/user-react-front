import axios from 'axios'
import {baseUrl} from '../constants/AppUrl'

class RestaurantService {
    getPosts = () => axios.get(`${baseUrl}/restaurants`);
    getProducts = (resId) => axios.get(`${baseUrl}/restaurants/menu/${resId}`);
    getRestInfo = (restId) => axios.get(`${baseUrl}/restaurants/info/${restId}`)
}

export default new RestaurantService()
