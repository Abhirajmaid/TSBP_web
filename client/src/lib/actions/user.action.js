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
                Authorization: 'Bearer df101a2f9b6201511b1f4a48ffa10573be6bc1b633e8e8758fd8082480f932f3e3dd2445e5cb42cd99344e0c574b572a90604b88da1f9a50d5e170899e55e715b096263ea576557e8adb72a8e453958b992fa16e6a672ad3d2e7ad1930794fa4eb1ffab0730bd57cfadfda06a8ab0e3b4c484da582b2456df6c04d96f0fad064',
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
                'Authorization': 'Bearer df101a2f9b6201511b1f4a48ffa10573be6bc1b633e8e8758fd8082480f932f3e3dd2445e5cb42cd99344e0c574b572a90604b88da1f9a50d5e170899e55e715b096263ea576557e8adb72a8e453958b992fa16e6a672ad3d2e7ad1930794fa4eb1ffab0730bd57cfadfda06a8ab0e3b4c484da582b2456df6c04d96f0fad064',
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