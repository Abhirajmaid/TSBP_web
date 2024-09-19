const { default: axios } = require("axios");

const axiosClient = axios.create({
    baseURL: "https://db.netgarage.in/api",
    headers: {
        "Content-Type": "application/json",
    },
});

const registerUser = (data) =>
    axiosClient.post("/auth/local/register", {
        username: data.username,
        email: data.email,
        password: data.password,
        mobile_number: data.mobile_number,
    });

const signIn = (data) =>
    axiosClient.post("/auth/local", {
        identifier: data.email,
        password: data.password,
    });

const fetchLoggedInUser = (token) =>
    axiosClient.get("/users/me?populate=*", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

const updateUserDetails = (token, data) =>
    axiosClient.put(
        `/users/${data.id}`,
        {
            username: data.username,
            email: data.email,
            mobile_number: data.mobile_number,
            password: data.password,
        },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

const updateUserRole = (token, userId, roleId) =>
    axiosClient.put(
        "/users/" + userId + "?populate=*",
        {
            role: roleId,
        },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

export default {
    registerUser,
    signIn,
    fetchLoggedInUser,
    updateUserDetails,
    updateUserRole,
};
