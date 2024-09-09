const { default: axios } = require("axios");

const axiosClient = axios.create({
    baseURL: 'http://localhost:1337/api',
    headers: {
        "Content-Type": 'application/json'
    }
})


const getReviews = (model) => axiosClient.get('/reviews?filters[bike_model][slug][$eq]=' + model + '&populate[bike_model]=*&populate[profile_pic]=*&populate[img]=*')

export default {
    getReviews,
}