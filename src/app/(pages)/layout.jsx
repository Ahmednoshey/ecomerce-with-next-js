import {Inter} from "next/font/google";
import "../globals.css";
import AuthProvider from "app/providers/AuthProvider";

const inter = Inter({
  subsets: ['latin'],
});


export const metadata = {
  title: "Home Page",
  description: "Description My Home Page",
  icons:{
    icon: "./images/bag-shopping-solid.svg"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
      <AuthProvider>
        {children}
        </AuthProvider>
      </body>
    </html>
  );
}
