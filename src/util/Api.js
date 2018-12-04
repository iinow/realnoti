import axios from 'axois'
import { clone } from '../util/Utils'

const Api = {
    // get: (url) => {
    //     axios.get(url)
    //         .then(
    //             res => {
    //                 console.log(res)
    //             },
    //             err => {
    //                 console.log(err)
    //             },
    //             () => {
    //                 console.log('요청 완료')
    //             }
    //         )
    // }
    get: (url, param) => {
        return axios.get(url, param)
    },

    post: (url, param) => {
        return axios.post(url, param)
    }
}

// export default clone(Api)
export default Api
