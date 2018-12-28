import * as axios from 'axios'

export const Api = {
    get: (url: string, param?: any) => {
        return axios.default.get(url, param)
    },

    post: (url: string, param?: any) => {
        return axios.default.post(url, param)
    }
}
