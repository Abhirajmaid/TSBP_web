import "./globals.css";
import { montserrat } from "./fonts";
import { Providers } from "@app/providers";
import { ToastContainer } from "react-toastify";

export const metadata = {
  metadataBase: new URL("https://netgarage.in"),
  title: {
    default: "Netgarage",
    template: "%s | Netgarage",
  },
  description:
    "Netgarage is India's trusted online marketplace for buying and selling premium pre-owned motorcycles. Find a wide variety of top brands like Harley Davidson, Ducati, and Royal Enfield at unbeatable prices. Sell your motorcycle quickly and securely with our hassle-free listing process and secure transaction system.",
  twitter: {
    card: "summary_large_image",
    site: "@Netgargae",
  },
  openGraph: {
    title: "Netgarage",
    description:
      "Netgarage is India's trusted online marketplace for buying and selling premium pre-owned motorcycles. Find a wide variety of top brands like Harley Davidson, Ducati, and Royal Enfield at unbeatable prices. Sell your motorcycle quickly and securely with our hassle-free listing process and secure transaction system.",
    images: [
      {
        url: "./opengraph-image.png",
      },
    ],
  },
  keywords: [
    "Netgarage",
    "Superbike",
    "Bike",
    "Motorcycle",
    "Used Motorcycle",
    "buy used motorcycles online",
  ],
};

export default function RootLayout({ children }) {
  return (
    <>
      <Providers>
        <html lang="en">
          <body className={montserrat.className}>
            <ToastContainer />
            {children}
          </body>
        </html>
      </Providers>
    </>
  );
}
