import "./globals.css";
import Navbar from "./component/navbar";
import Footer from "./component/Footer";
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      
    >
      <body>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
