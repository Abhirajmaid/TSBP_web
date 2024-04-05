"use server"
// Define your Strapi API URL
const apiUrl = 'http://localhost:1337'; // Change this to your Strapi server URL

// Function to create a user in the Strapi database with authentication
export const createUser = async (user) => {
    // console.log(user);
    try {
        const response = await fetch(`${apiUrl}/api/client-users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
            },
            body: JSON.stringify({ data: user }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to create user');
        }

        console.log('User created successfully:', data);
        return data;
    } catch (error) {
        console.error('Error creating user:', error.message);
        return null;
    }
}

export const fetchUser = async (userId) => {
    try {
        const response = await fetch(`${apiUrl}/api/client-users/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.BEARER_TOKEN}`,
            },
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to fetch user');
        }

        console.log('User fetched successfully:', data);
        return data;
    } catch (error) {
        console.error('Error fetching user:', error.message);
        return null;
    }
}