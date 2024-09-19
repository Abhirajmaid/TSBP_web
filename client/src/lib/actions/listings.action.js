const { default: axios } = require("axios");

const axiosClient = axios.create({
    baseURL: 'http://localhost:1337/api',
    headers: {
        "Content-Type": 'application/json'
    }
})


const fetchListings = () => axiosClient.get('/bike-listings?populate=*')

const getBikeListingById = (id) => axiosClient.get('/bike-listings/' + id + '?populate=*')

const deleteListing = (token, id) => axiosClient.delete('/bike-listings/' + id, {
    headers: {
        Authorization: `Bearer ${token}`,
    },

})



export default {
    fetchListings,
    getBikeListingById,
    deleteListing,
}