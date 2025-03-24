import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { CartProvider } from "../components/context/CartContext";

import "./globals.css";
import 'aos/dist/aos.css';


const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: "Pharmacy Paddi",
  description: "Your smart pharmacy paddi...",
};


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
