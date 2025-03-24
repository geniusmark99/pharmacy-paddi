import Axios from 'axios'
import env from "../config/env";


const axios = Axios.create({
    baseURL: env.API_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
    withXSRFToken: true
})

export default axios