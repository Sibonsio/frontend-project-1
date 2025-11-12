import axios from "axios"

const baseURL = {
    baseURL: 'http://localhost:5001'
}
const instance = axios.create(baseURL)
export default instance
