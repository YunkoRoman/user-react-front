import axios from 'axios'
import {baseUrl} from '../constants/AppUrl'

class AuthService {
    authUser = (email, password) => axios.post(`${baseUrl}/auth`, {email, password})
}

export default new AuthService()