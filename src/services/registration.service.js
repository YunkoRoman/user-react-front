import axios from 'axios'
import {baseUrl} from '../constants/AppUrl'

class RegistrationService {
    sendRegisterDatas = (form) => axios.post(`${baseUrl}/register`, {form})
}

export default new RegistrationService()