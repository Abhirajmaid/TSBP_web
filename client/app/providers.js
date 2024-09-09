"use client";
import { ToastContextProvider } from "@src/context/ToastContex";

export function Providers({ children }) {
    return (
        <ToastContextProvider >
            {children}
        </ToastContextProvider>
    )
}