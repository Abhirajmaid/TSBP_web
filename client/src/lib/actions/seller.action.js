const { default: axios } = require("axios");

const axiosClient = axios.create({
    baseURL: "https://db.netgarage.in/api",
    headers: {
        "Content-Type": "application/json",
    },
});

const registerSeller = (token, sellerData) =>
    axiosClient.post(
        "/sellers?populate=*",
        {
            data: {
                city: sellerData.city,
                country: sellerData.country,
                email: sellerData.email,
                gst_no: sellerData.gst_no,
                mobile: sellerData.mobile,
                owner: sellerData.owner,
                password: sellerData.password,
                state: sellerData.state,
                store_name: sellerData.store_name,
                street: sellerData.street,
                zip: sellerData.zip,
            },
        },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

const getSellerByEmail = (token, email) =>
    axiosClient.get("/sellers?filters[email][$eq]=" + email + "&populate[bike_listing][populate]=*", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });


const updateSeller = (token, data) => axiosClient.put("/sellers",
    { data: data },
    {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })

export default {
    registerSeller,
    getSellerByEmail,
};
