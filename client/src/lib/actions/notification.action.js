const { default: axios } = require("axios");

const axiosClient = axios.create({
    baseURL: 'https://db.netgarage.in/api',
    headers: {
        "Content-Type": 'application/json'
    }
})

const getNotifications = () => axiosClient.get('/notifications')

export default {
    getNotifications,
}