import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { AuthContxtProvider } from "./context/AuthContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SMART COM",
  description: "SMART COM",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContxtProvider>
          <Navbar />
          {children}
        </AuthContxtProvider>
      </body>
    </html>
  );
}
