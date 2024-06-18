import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar.jsx";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextJS Thingys",
  description: "Testing NextJS features",
};

export default function RootLayout({ children }) {
  return (

    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
      
      <Navbar />
      {children}
      
      </body>
    </html>
    </ClerkProvider>
  );
}
