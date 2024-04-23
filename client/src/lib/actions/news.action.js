"use server"
// Define your Strapi API URL
const apiUrl = 'https://dashboard.thesuperbikeproject.com/'; // Change this to your Strapi server URL


export const fetchNews = async () => {
    try {
        const response = await fetch(`${apiUrl}/api/newss?populate=*`, {
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