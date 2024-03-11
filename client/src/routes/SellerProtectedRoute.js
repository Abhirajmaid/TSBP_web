"use client"
import { useUser } from '@clerk/nextjs';
import { fetchUser } from '@src/lib/actions/user.action';
import { redirect } from 'next/navigation';
import React, { useEffect, useState } from 'react';


const SellerProtectedRoute = ({ children }) => {
    const [strapiUser, setStrapiUser] = useState()
    const user = useUser()
    // const id = user.user.id
    useEffect(() => {
        setStrapiUser(fetchUser(10))
    }, [])

    const seller = strapiUser?.attributes?.seller;
    if (!seller) {
        return redirect('/store');
    }
    return children;
};

export default SellerProtectedRoute;