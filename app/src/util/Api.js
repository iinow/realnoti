import axios from 'axios'

const Api = {
    get: (url, param) => {
        return axios.get(url, param)
    },

    post: (url, param) => {
        return axios.post(url, param)
    }
}

export default Api
