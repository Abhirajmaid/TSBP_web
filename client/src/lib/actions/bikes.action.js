const { default: axios } = require("axios");

const axiosClient = axios.create({
    baseURL: 'http://localhost:1337/api',
    headers: {
        "Content-Type": 'application/json'
    }
})

const getBikeModel = (model) => axiosClient.get('/bike-models?filters[slug][$eq]=' + model + '&populate[variants]=*&populate[img]=*&populate[brand_or_company_name]=*')

const getBikeBrands = () => axiosClient.get('/brand-or-company-names?populate[bike_models][populate][variants]=*')

const getModels = () => axiosClient.get('/bike-models?populate=*')

const getVariants = () => axiosClient.get('/variants?populate=*')

export default {
    getBikeModel,
    getVariants,
    getBikeBrands,
    getModels,
}