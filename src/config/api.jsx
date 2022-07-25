import axios from 'axios';

const miaMusicAPI = axios.create({
    baseURL: 'http://localhost:3000'
})

export default miaMusicAPI;