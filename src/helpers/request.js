import axios from 'axios'

export default {
    get: async (url, params) => {
        return axios.get(`${url}/${params}`);
    },
    post: async (url, body) => {
        return axios.post(url, body);
    }
}