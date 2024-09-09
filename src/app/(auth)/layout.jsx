
import {Inter} from "next/font/google";
import  '../globals.css';
import  './auth.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "componatnt/footer/footer";


const inter = Inter({
  subsets: ['latin'],
});



export const metadata = {
  icons:{
    icon: "./images/bag-shopping-solid.svg"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
     style={{
        height: "100vh",
    display: "grid",
    gridTemplateRows: "auto 1fr auto",
    alignItems: "center",
      }}
      className={` auth text-center text-bg-dark ${inter.className}`}>
      {children}
      <Footer/>
      </body>
    </html>
  )
}
