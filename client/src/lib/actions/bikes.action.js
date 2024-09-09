const { default: axios } = require("axios");

const axiosClient = axios.create({
    baseURL: 'http://localhost:1337/api',
    headers: {
        "Content-Type": 'application/json'
    }
})

const getBikeModel = (model) => axiosClient.get('/bike-models?filters[slug][$eq]=' + model + '&populate[variants]=*&populate[img]=*&populate[brand_or_company_name]=*')


export default {
    getBikeModel,
}