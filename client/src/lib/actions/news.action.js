const { default: axios } = require("axios");

const axiosClient = axios.create({
    baseURL: 'https://db.netgarage.in/api',
    headers: {
        "Content-Type": 'application/json'
    }
})

const getNews = () => axiosClient.get('/newss?populate=*')

export default {
    getNews,
}