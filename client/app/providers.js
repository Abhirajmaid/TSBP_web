"use client";

import { ToastContextProvider } from "@src/context/ToastContex";
import { ClerkProvider } from '@clerk/nextjs'

export function Providers({ children }) {
    return (
        <ClerkProvider
            appearance={{
                variables: {
                    colorPrimary: "#400094",
                },
                layout: {
                    termsPageUrl: 'https://clerk.com/terms'
                }
            }} >
            <ToastContextProvider >
                {children}
            </ToastContextProvider>
        </ClerkProvider>
    )
}