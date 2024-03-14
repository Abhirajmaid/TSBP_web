// // 
"use client"
import { useRouter } from "next/navigation";

// // components/SellerProtectedRoute.js
// import { fetchUser } from '@src/lib/actions/user.action';
// import { useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';

// const SellerProtectedRoute = ({ children }) => {
//     const router = useRouter();
//     const [isSeller, setIsSeller] = useState(false);
//     const [strapiUser, setStrapiUser] = useState([]);
//     useEffect(() => {
//         fetchUserData();
//     }, []);

//     const fetchUserData = async () => {
//         try {
//             const { data } = await fetchUser(9);
//             setStrapiUser(data);
//         } catch (e) {
//             console.log(e);
//         }
//     };

//     useEffect(() => {
//         if (!strapiUser?.attributes?.seller) {
//             console.log("fuck");
//             router.push("/store");
//         } else {
//             setIsSeller(true);
//         }
//     }, [strapiUser, router]);

//     return isSeller ? children : null;
// };

// export default SellerProtectedRoute;


const SellerProtectedRoute = ({ user, children }) => {
    const router = useRouter();
    // const seller = !user?.attributes?.seller
    console.log(user);
    if (!user) {
        router.push("/store");;
    }
    return children;
};

export default SellerProtectedRoute;