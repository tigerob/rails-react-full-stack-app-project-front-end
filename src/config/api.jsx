import axios from 'axios';

const miaMusicAPI = axios.create({
    baseURL: 'http://localhost:3000'
})

miaMusicAPI.interceptors.request.use(req => {
    const token = sessionStorage.getItem("token")
    if (token) {
        req.headers["Authorization"] = `Bearer ${token}`
    }
    return req
})

export default miaMusicAPI;