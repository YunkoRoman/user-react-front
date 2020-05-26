import axios from 'axios'
import {baseUrl} from '../constants/AppUrl'


class UserCheck {
    sendToken = (token) => axios.get(`${baseUrl}/auth/check`, {
        headers: {
            Authorization: token
        }
    }).then(res => {return res})

}

export default new UserCheck()