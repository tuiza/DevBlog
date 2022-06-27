import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.100.188:1337/' // a url que nunca vai mudar

})
export default api