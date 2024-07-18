import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://tinder-clone-production-0413.up.railway.app'
})

export default instance;